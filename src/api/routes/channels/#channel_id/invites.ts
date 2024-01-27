import { route } from "@fosscord/api";
import { Channel, emitEvent, Guild, HTTPError, Invite, InviteCreateEvent, OrmUtils, PublicInviteRelation, User } from "@fosscord/util";
import { Request, Response, Router } from "express";
import { isTextChannel } from "./messages";

const router: Router = Router();

router.post(
	"/",
	route({ body: "InviteCreateSchema", permission: "CREATE_INSTANT_INVITE", right: "CREATE_INVITES" }),
	async (req: Request, res: Response) => {
		const { user_id } = req;
		const { channel_id } = req.params;
		const channel = await Channel.findOneOrFail({ where: { id: channel_id }, select: ["id", "name", "type", "guild_id"] });
		isTextChannel(channel.type);

		if (!channel.guild_id) {
			throw new HTTPError(req.t("common:notfound.CHANNEL"), 404);
		}
		const { guild_id } = channel;

		const expires_at = new Date(req.body.max_age * 1000 + Date.now());

		const invite = await OrmUtils.mergeDeep(new Invite(), {
			temporary: req.body.temporary || true,
			max_uses: req.body.max_uses,
			max_age: req.body.max_age,
			expires_at,
			guild_id,
			channel_id,
			inviter_id: user_id
		}).save();
		//TODO: check this, removed toJSON call
		const data = JSON.parse(JSON.stringify(invite));
		data.inviter = await User.getPublicUser(req.user_id);
		data.guild = await Guild.findOne({ where: { id: guild_id } });
		data.channel = channel;

		await emitEvent({ event: "INVITE_CREATE", data, guild_id } as InviteCreateEvent);
		res.status(201).send(data);
	}
);

router.get("/", route({ permission: "MANAGE_CHANNELS" }), async (req: Request, res: Response) => {
	const { channel_id } = req.params;
	const channel = await Channel.findOneOrFail({ where: { id: channel_id } });

	if (!channel.guild_id) {
		throw new HTTPError(req.t("common:notfound.CHANNEL"), 404);
	}
	const { guild_id } = channel;

	const invites = await Invite.find({ where: { guild_id }, relations: PublicInviteRelation });

	res.status(200).send(invites);
});

export default router;
