"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test1661273147273 = void 0;
class test1661273147273 {
    name = "test1661273147273";
    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE \`invites\` DROP FOREIGN KEY \`FK_15c35422032e0b22b4ada95f48f\`
        `);
        await queryRunner.query(`
            DROP INDEX \`IDX_2ce5a55796fe4c2f77ece57a64\` ON \`applications\`
        `);
        await queryRunner.query(`
            CREATE TABLE \`plugin_config\` (
                \`key\` varchar(255) NOT NULL,
                \`value\` text NULL,
                PRIMARY KEY (\`key\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`user_settings\` (
                \`id\` varchar(255) NOT NULL,
                \`afk_timeout\` int NULL,
                \`allow_accessibility_detection\` tinyint NULL,
                \`animate_emoji\` tinyint NULL,
                \`animate_stickers\` int NULL,
                \`contact_sync_enabled\` tinyint NULL,
                \`convert_emoticons\` tinyint NULL,
                \`custom_status\` text NULL,
                \`default_guilds_restricted\` tinyint NULL,
                \`detect_platform_accounts\` tinyint NULL,
                \`developer_mode\` tinyint NULL,
                \`disable_games_tab\` tinyint NULL,
                \`enable_tts_command\` tinyint NULL,
                \`explicit_content_filter\` int NULL,
                \`friend_source_flags\` text NULL,
                \`gateway_connected\` tinyint NULL,
                \`gif_auto_play\` tinyint NULL,
                \`guild_folders\` text NULL,
                \`guild_positions\` text NULL,
                \`inline_attachment_media\` tinyint NULL,
                \`inline_embed_media\` tinyint NULL,
                \`locale\` varchar(255) NULL,
                \`message_display_compact\` tinyint NULL,
                \`native_phone_integration_enabled\` tinyint NULL,
                \`render_embeds\` tinyint NULL,
                \`render_reactions\` tinyint NULL,
                \`restricted_guilds\` text NULL,
                \`show_current_game\` tinyint NULL,
                \`status\` varchar(255) NULL,
                \`stream_notifications_enabled\` tinyint NULL,
                \`theme\` varchar(255) NULL,
                \`timezone_offset\` int NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\` DROP COLUMN \`settings\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\`
            ADD \`settingsId\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\`
            ADD UNIQUE INDEX \`IDX_76ba283779c8441fd5ff819c8c\` (\`settingsId\`)
        `);
        await queryRunner.query(`
            ALTER TABLE \`channels\`
            ADD \`flags\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`channels\`
            ADD \`default_thread_rate_limit_per_user\` int NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\`
            ADD \`premium_progress_bar_enabled\` tinyint NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\` CHANGE \`bio\` \`bio\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\` CHANGE \`mfa_enabled\` \`mfa_enabled\` tinyint NULL
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX \`REL_76ba283779c8441fd5ff819c8c\` ON \`users\` (\`settingsId\`)
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\`
            ADD CONSTRAINT \`FK_76ba283779c8441fd5ff819c8cf\` FOREIGN KEY (\`settingsId\`) REFERENCES \`user_settings\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`invites\`
            ADD CONSTRAINT \`FK_15c35422032e0b22b4ada95f48f\` FOREIGN KEY (\`inviter_id\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE \`invites\` DROP FOREIGN KEY \`FK_15c35422032e0b22b4ada95f48f\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_76ba283779c8441fd5ff819c8cf\`
        `);
        await queryRunner.query(`
            DROP INDEX \`REL_76ba283779c8441fd5ff819c8c\` ON \`users\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\` CHANGE \`mfa_enabled\` \`mfa_enabled\` tinyint NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\` CHANGE \`bio\` \`bio\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`guilds\` DROP COLUMN \`premium_progress_bar_enabled\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`channels\` DROP COLUMN \`default_thread_rate_limit_per_user\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`channels\` DROP COLUMN \`flags\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\` DROP INDEX \`IDX_76ba283779c8441fd5ff819c8c\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\` DROP COLUMN \`settingsId\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\`
            ADD \`settings\` text NOT NULL
        `);
        await queryRunner.query(`
            DROP TABLE \`user_settings\`
        `);
        await queryRunner.query(`
            DROP TABLE \`plugin_config\`
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX \`IDX_2ce5a55796fe4c2f77ece57a64\` ON \`applications\` (\`bot_user_id\`)
        `);
        await queryRunner.query(`
            ALTER TABLE \`invites\`
            ADD CONSTRAINT \`FK_15c35422032e0b22b4ada95f48f\` FOREIGN KEY (\`inviter_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }
}
exports.test1661273147273 = test1661273147273;
//# sourceMappingURL=1661273147273-test.js.map