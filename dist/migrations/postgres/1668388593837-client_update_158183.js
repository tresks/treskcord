"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientUpdate1581831668388593837 = void 0;
class clientUpdate1581831668388593837 {
    name = 'clientUpdate1581831668388593837';
    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ADD "max_stage_video_channel_users" integer NOT NULL DEFAULT '25'
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "afk_timeout"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "afk_timeout"
            SET DEFAULT '300'
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "default_message_notifications"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "default_message_notifications"
            SET DEFAULT '1'
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "explicit_content_filter"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "explicit_content_filter"
            SET DEFAULT '0'
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "large"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "large"
            SET DEFAULT false
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "max_members"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "max_members"
            SET DEFAULT '25000000'
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "max_presences"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "max_presences"
            SET DEFAULT '250000'
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "max_video_channel_users"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "max_video_channel_users"
            SET DEFAULT '25'
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "member_count"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "member_count"
            SET DEFAULT '0'
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "presence_count"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "presence_count"
            SET DEFAULT '0'
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "mfa_level"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "mfa_level"
            SET DEFAULT '0'
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "premium_subscription_count"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "premium_subscription_count"
            SET DEFAULT '0'
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "premium_tier"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "premium_tier"
            SET DEFAULT '0'
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "system_channel_flags"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "system_channel_flags"
            SET DEFAULT '4'
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "unavailable"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "unavailable"
            SET DEFAULT false
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "verification_level"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "verification_level"
            SET DEFAULT '0'
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "nsfw_level"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "nsfw_level"
            SET DEFAULT '0'
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "nsfw"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "nsfw"
            SET DEFAULT false
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "nsfw" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "nsfw" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "nsfw_level" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "nsfw_level" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "verification_level" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "verification_level" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "unavailable" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "unavailable" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "system_channel_flags" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "system_channel_flags" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "premium_tier" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "premium_tier" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "premium_subscription_count" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "premium_subscription_count" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "mfa_level" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "mfa_level" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "presence_count" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "presence_count" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "member_count" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "member_count" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "max_video_channel_users" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "max_video_channel_users" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "max_presences" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "max_presences" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "max_members" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "max_members" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "large" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "large" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "explicit_content_filter" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "explicit_content_filter" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "default_message_notifications" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "default_message_notifications" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "afk_timeout" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
            ALTER COLUMN "afk_timeout" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds" DROP COLUMN "max_stage_video_channel_users"
        `);
    }
}
exports.clientUpdate1581831668388593837 = clientUpdate1581831668388593837;
//# sourceMappingURL=1668388593837-client_update_158183.js.map