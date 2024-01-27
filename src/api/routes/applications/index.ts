import { route } from "@fosscord/api";
import { Application, OrmUtils, trimSpecial, User } from "@fosscord/util";
import { Request, Response, Router } from "express";

const router: Router = Router();

export interface ApplicationCreateSchema {
	name: string;
	team_id?: string | number;
}

router.get("/", route({}), async (req: Request, res: Response) => {
	//TODO
	let results = await Application.find({ where: { owner: { id: req.user_id } }, relations: ["owner", "bot"] });
	res.json(results).status(200);
});

router.post("/", route({}), async (req: Request, res: Response) => {
	const body = req.body as ApplicationCreateSchema;
	const user = await User.findOne({ where: { id: req.user_id } });
	if (!user) res.status(420);
	let app = OrmUtils.mergeDeep(new Application(), {
		name: trimSpecial(body.name),
		description: "",
		bot_public: true,
		owner: user,
		verify_key: "IMPLEMENTME",
		flags: 0
	});
	await app.save();
	res.json(app).status(200);
});

export default router;
