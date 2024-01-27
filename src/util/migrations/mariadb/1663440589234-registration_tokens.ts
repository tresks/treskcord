import { MigrationInterface, QueryRunner } from "typeorm";

export class registrationTokens1663440589234 implements MigrationInterface {
	name = "registrationTokens1663440589234";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
            CREATE TABLE \`valid_registration_tokens\` (
                \`id\` varchar(255) NOT NULL,
                \`token\` varchar(255) NOT NULL,
                \`created_at\` datetime NOT NULL,
                \`expires_at\` datetime NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
            ALTER TABLE \`users\`
            ADD \`notes\` text NOT NULL
        `);
	}
}
