import {MigrationInterface, QueryRunner} from "typeorm";

export class descriptionSize1596993791206 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "description" character varying(50000) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "description" character varying(255) NOT NULL`);
    }

}
