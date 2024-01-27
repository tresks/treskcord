import { HTTPError } from "@fosscord/util";
import bodyParser, { OptionsJson } from "body-parser";
import { NextFunction, Request, Response } from "express";

export function BodyParser(opts?: OptionsJson) {
	const jsonParser = bodyParser.json(opts);

	return (req: Request, res: Response, next: NextFunction) => {
		if (!req.headers["content-type"]) req.headers["content-type"] = "application/json";

		jsonParser(req, res, (err) => {
			if (err) {
				// TODO: different errors for body parser (request size limit, wrong body type, invalid body, ...)
				return next(new HTTPError(req.t("common:body.INVALID_BODY"), 400));
			}
			next();
		});
	};
}
