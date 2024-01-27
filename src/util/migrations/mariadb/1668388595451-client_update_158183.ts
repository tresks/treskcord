import { MigrationInterface, QueryRunner } from "typeorm";

export class clientUpdate1581831668388595451 implements MigrationInterface {
    name = 'clientUpdate1581831668388595451'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`guilds\`
            ADD \`max_stage_video_channel_users\` int NOT NULL DEFAULT '25'
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`afk_timeout\` \`afk_timeout\` int NOT NULL DEFAULT '300'
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`default_message_notifications\` \`default_message_notifications\` int NOT NULL DEFAULT '1'
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`explicit_content_filter\` \`explicit_content_filter\` int NOT NULL DEFAULT '0'
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`large\` \`large\` tinyint NOT NULL DEFAULT 0
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`max_members\` \`max_members\` int NOT NULL DEFAULT '25000000'
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`max_presences\` \`max_presences\` int NOT NULL DEFAULT '250000'
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`max_video_channel_users\` \`max_video_channel_users\` int NOT NULL DEFAULT '25'
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`member_count\` \`member_count\` int NOT NULL DEFAULT '0'
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`presence_count\` \`presence_count\` int NOT NULL DEFAULT '0'
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`mfa_level\` \`mfa_level\` int NOT NULL DEFAULT '0'
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`premium_subscription_count\` \`premium_subscription_count\` int NOT NULL DEFAULT '0'
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`premium_tier\` \`premium_tier\` int NOT NULL DEFAULT '0'
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`system_channel_flags\` \`system_channel_flags\` int NOT NULL DEFAULT '4'
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`unavailable\` \`unavailable\` tinyint NOT NULL DEFAULT 0
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`verification_level\` \`verification_level\` int NOT NULL DEFAULT '0'
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`nsfw_level\` \`nsfw_level\` int NOT NULL DEFAULT '0'
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`nsfw\` \`nsfw\` tinyint NOT NULL DEFAULT 0
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`nsfw\` \`nsfw\` tinyint NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`nsfw_level\` \`nsfw_level\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`verification_level\` \`verification_level\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`unavailable\` \`unavailable\` tinyint NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`system_channel_flags\` \`system_channel_flags\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`premium_tier\` \`premium_tier\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`premium_subscription_count\` \`premium_subscription_count\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`mfa_level\` \`mfa_level\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`presence_count\` \`presence_count\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`member_count\` \`member_count\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`max_video_channel_users\` \`max_video_channel_users\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`max_presences\` \`max_presences\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`max_members\` \`max_members\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`large\` \`large\` tinyint NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`explicit_content_filter\` \`explicit_content_filter\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`default_message_notifications\` \`default_message_notifications\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` CHANGE \`afk_timeout\` \`afk_timeout\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` DROP COLUMN \`max_stage_video_channel_users\`
        `);
    }

}
