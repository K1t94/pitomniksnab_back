import {MigrationInterface, QueryRunner} from "typeorm";

export class fixIdentity1596989110794 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP INDEX "IDX_2f210945312823f42d93ee702b"`);
        await queryRunner.query(`ALTER TABLE "identity" DROP COLUMN "type"`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "identity" ADD "type" character varying NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_2f210945312823f42d93ee702b" ON "identity" ("type") `);
    }

}
