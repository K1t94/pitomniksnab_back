import {MigrationInterface, QueryRunner} from "typeorm";

export class categoryActive1598455908555 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "category" ADD "active" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "active"`);
    }

}
