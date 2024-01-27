import { FieldErrors } from "@fosscord/util";
import { Request } from "express";
import { ntob } from "./Base64";
import { SPECIAL_CHAR } from "./Regex";

export function checkLength(str: string, min: number, max: number, key: string, req: Request) {
	if (str.length < min || str.length > max) {
		throw FieldErrors({
			[key]: {
				code: "BASE_TYPE_BAD_LENGTH",
				message: req.t("common:field.BASE_TYPE_BAD_LENGTH", { length: `${min} - ${max}` })
			}
		});
	}
}

export function generateCode() {
	return ntob(Date.now() + Math.randomIntBetween(0, 10000));
}

export function trimSpecial(str?: string): string {
	// @ts-ignore
	if (!str) return;
	return str.replace(SPECIAL_CHAR, "").trim();
}
