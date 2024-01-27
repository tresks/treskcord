"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.premiumSinceAsDate1659921722863 = void 0;
class premiumSinceAsDate1659921722863 {
    name = "premiumSinceAsDate1659921722863";
    async up(queryRunner) {
        await queryRunner.query(`
            DROP INDEX "IDX_bb2bf9386ac443afbbbf9f12d3"
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_members" (
                "index" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "id" varchar NOT NULL,
                "guild_id" varchar NOT NULL,
                "nick" varchar,
                "joined_at" datetime NOT NULL,
                "premium_since" bigint,
                "deaf" boolean NOT NULL,
                "mute" boolean NOT NULL,
                "pending" boolean NOT NULL,
                "settings" text NOT NULL,
                "last_message_id" varchar,
                "joined_by" varchar,
                CONSTRAINT "FK_16aceddd5b89825b8ed6029ad1c" FOREIGN KEY ("guild_id") REFERENCES "guilds" ("id") ON DELETE CASCADE ON UPDATE NO ACTION,
                CONSTRAINT "FK_28b53062261b996d9c99fa12404" FOREIGN KEY ("id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_members"(
                    "index",
                    "id",
                    "guild_id",
                    "nick",
                    "joined_at",
                    "premium_since",
                    "deaf",
                    "mute",
                    "pending",
                    "settings",
                    "last_message_id",
                    "joined_by"
                )
            SELECT "index",
                "id",
                "guild_id",
                "nick",
                "joined_at",
                "premium_since",
                "deaf",
                "mute",
                "pending",
                "settings",
                "last_message_id",
                "joined_by"
            FROM "members"
        `);
        await queryRunner.query(`
            DROP TABLE "members"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_members"
                RENAME TO "members"
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX "IDX_bb2bf9386ac443afbbbf9f12d3" ON "members" ("id", "guild_id")
        `);
        await queryRunner.query(`
            DROP INDEX "IDX_bb2bf9386ac443afbbbf9f12d3"
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_members" (
                "index" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "id" varchar NOT NULL,
                "guild_id" varchar NOT NULL,
                "nick" varchar,
                "joined_at" datetime NOT NULL,
                "premium_since" datetime,
                "deaf" boolean NOT NULL,
                "mute" boolean NOT NULL,
                "pending" boolean NOT NULL,
                "settings" text NOT NULL,
                "last_message_id" varchar,
                "joined_by" varchar,
                CONSTRAINT "FK_16aceddd5b89825b8ed6029ad1c" FOREIGN KEY ("guild_id") REFERENCES "guilds" ("id") ON DELETE CASCADE ON UPDATE NO ACTION,
                CONSTRAINT "FK_28b53062261b996d9c99fa12404" FOREIGN KEY ("id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_members"(
                    "index",
                    "id",
                    "guild_id",
                    "nick",
                    "joined_at",
                    "premium_since",
                    "deaf",
                    "mute",
                    "pending",
                    "settings",
                    "last_message_id",
                    "joined_by"
                )
            SELECT "index",
                "id",
                "guild_id",
                "nick",
                "joined_at",
                "premium_since",
                "deaf",
                "mute",
                "pending",
                "settings",
                "last_message_id",
                "joined_by"
            FROM "members"
        `);
        await queryRunner.query(`
            DROP TABLE "members"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_members"
                RENAME TO "members"
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX "IDX_bb2bf9386ac443afbbbf9f12d3" ON "members" ("id", "guild_id")
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DROP INDEX "IDX_bb2bf9386ac443afbbbf9f12d3"
        `);
        await queryRunner.query(`
            ALTER TABLE "members"
                RENAME TO "temporary_members"
        `);
        await queryRunner.query(`
            CREATE TABLE "members" (
                "index" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "id" varchar NOT NULL,
                "guild_id" varchar NOT NULL,
                "nick" varchar,
                "joined_at" datetime NOT NULL,
                "premium_since" bigint,
                "deaf" boolean NOT NULL,
                "mute" boolean NOT NULL,
                "pending" boolean NOT NULL,
                "settings" text NOT NULL,
                "last_message_id" varchar,
                "joined_by" varchar,
                CONSTRAINT "FK_16aceddd5b89825b8ed6029ad1c" FOREIGN KEY ("guild_id") REFERENCES "guilds" ("id") ON DELETE CASCADE ON UPDATE NO ACTION,
                CONSTRAINT "FK_28b53062261b996d9c99fa12404" FOREIGN KEY ("id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "members"(
                    "index",
                    "id",
                    "guild_id",
                    "nick",
                    "joined_at",
                    "premium_since",
                    "deaf",
                    "mute",
                    "pending",
                    "settings",
                    "last_message_id",
                    "joined_by"
                )
            SELECT "index",
                "id",
                "guild_id",
                "nick",
                "joined_at",
                "premium_since",
                "deaf",
                "mute",
                "pending",
                "settings",
                "last_message_id",
                "joined_by"
            FROM "temporary_members"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_members"
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX "IDX_bb2bf9386ac443afbbbf9f12d3" ON "members" ("id", "guild_id")
        `);
        await queryRunner.query(`
            DROP INDEX "IDX_bb2bf9386ac443afbbbf9f12d3"
        `);
        await queryRunner.query(`
            ALTER TABLE "members"
                RENAME TO "temporary_members"
        `);
        await queryRunner.query(`
            CREATE TABLE "members" (
                "index" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "id" varchar NOT NULL,
                "guild_id" varchar NOT NULL,
                "nick" varchar,
                "joined_at" datetime NOT NULL,
                "premium_since" bigint,
                "deaf" boolean NOT NULL,
                "mute" boolean NOT NULL,
                "pending" boolean NOT NULL,
                "settings" text NOT NULL,
                "last_message_id" varchar,
                "joined_by" varchar,
                CONSTRAINT "FK_16aceddd5b89825b8ed6029ad1c" FOREIGN KEY ("guild_id") REFERENCES "guilds" ("id") ON DELETE CASCADE ON UPDATE NO ACTION,
                CONSTRAINT "FK_28b53062261b996d9c99fa12404" FOREIGN KEY ("id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "members"(
                    "index",
                    "id",
                    "guild_id",
                    "nick",
                    "joined_at",
                    "premium_since",
                    "deaf",
                    "mute",
                    "pending",
                    "settings",
                    "last_message_id",
                    "joined_by"
                )
            SELECT "index",
                "id",
                "guild_id",
                "nick",
                "joined_at",
                "premium_since",
                "deaf",
                "mute",
                "pending",
                "settings",
                "last_message_id",
                "joined_by"
            FROM "temporary_members"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_members"
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX "IDX_bb2bf9386ac443afbbbf9f12d3" ON "members" ("id", "guild_id")
        `);
    }
}
exports.premiumSinceAsDate1659921722863 = premiumSinceAsDate1659921722863;
//# sourceMappingURL=1659921722863-premium_since_as_date.js.map