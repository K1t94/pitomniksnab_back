import {MigrationInterface, QueryRunner} from "typeorm";

export class addItemImage1596816170703 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "item" ADD "imageURL" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "imageURL"`);
    }

}
