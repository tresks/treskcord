import { route } from "@fosscord/api";
import {
	adjustEmail,
	Config,
	emitEvent,
	FieldErrors,
	generateToken,
	handleFile,
	OrmUtils,
	PrivateUserProjection,
	User,
	UserModifySchema,
	UserUpdateEvent
} from "@fosscord/util";
import { Request, Response, Router } from "express";

let bcrypt: any;
try {
	bcrypt = require("bcrypt");
} catch {
	bcrypt = require("bcryptjs");
	console.log("Warning: using bcryptjs because bcrypt is not installed! Performance will be affected.");
}

const router: Router = Router();

router.get("/", route({}), async (req: Request, res: Response) => {
	res.json(await User.findOne({ select: PrivateUserProjection, where: { id: req.user_id } }));
});

router.patch("/", route({ body: "UserModifySchema" }), async (req: Request, res: Response) => {
	var token = null as any;
	const body = req.body as UserModifySchema;

	if (body.avatar) body.avatar = await handleFile(`/avatars/${req.user_id}`, body.avatar as string);
	if (body.banner) body.banner = await handleFile(`/banners/${req.user_id}`, body.banner as string);
	let user = await User.findOneOrFail({ where: { id: req.user_id }, select: [...PrivateUserProjection, "data"] });

	if (body.password) {
		if (user.data?.hash) {
			const same_password = await bcrypt.compare(body.password, user.data.hash || "");
			if (!same_password) {
				throw FieldErrors({ password: { message: req.t("auth:login.INVALID_PASSWORD"), code: "INVALID_PASSWORD" } });
			}
		} else {
			user.data.hash = await bcrypt.hash(body.password, 12);
		}
	}

	if (body.email) {
		body.email = adjustEmail(body.email);
		if (!body.email && Config.get().register.email.required)
			throw FieldErrors({ email: { message: req.t("auth:register.EMAIL_INVALID"), code: "EMAIL_INVALID" } });
		if (!body.password) throw FieldErrors({ password: { message: req.t("auth:register.INVALID_PASSWORD"), code: "INVALID_PASSWORD" } });
	}

	if (body.new_password) {
		if (!body.password && !user.email) {
			throw FieldErrors({
				password: { code: "BASE_TYPE_REQUIRED", message: req.t("common:field.BASE_TYPE_REQUIRED") }
			});
		}
		user.data.hash = await bcrypt.hash(body.new_password, 12);
		user.data.valid_tokens_since = new Date();
		token = (await generateToken(user.id)) as string;
	}

	if (body.username) {
		let check_username = body?.username?.replace(/\s/g, "");
		if (!check_username) {
			throw FieldErrors({
				username: { code: "BASE_TYPE_REQUIRED", message: req.t("common:field.BASE_TYPE_REQUIRED") }
			});
		}
	}

	user = OrmUtils.mergeDeep(user, body);
	await user.save();

	// @ts-ignore
	delete user.data;

	// TODO: send update member list event in gateway
	await emitEvent({
		event: "USER_UPDATE",
		user_id: req.user_id,
		data: user
	} as UserUpdateEvent);

	res.json({
		...user,
		token
	});
});

export default router;
// {"message": "Invalid two-factor code", "code": 60008}
