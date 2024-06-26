import { route } from "@fosscord/api";
import { Config } from "@fosscord/util";
import { Request, Response, Router } from "express";
const router = Router();

router.get("/", route({}), async (req: Request, res: Response) => {
	const { cdn, gateway } = Config.get();

	const IdentityForm = {
		cdn: cdn.endpointPublic || process.env.CDN || "http://localhost:3001",
		gateway: gateway.endpointPublic || process.env.GATEWAY || "ws://localhost:3002"
	};

	res.json(IdentityForm);
});

export default router;
