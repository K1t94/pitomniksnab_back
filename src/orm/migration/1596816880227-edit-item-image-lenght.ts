import {MigrationInterface, QueryRunner} from "typeorm";

export class editItemImageLenght1596816880227 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "imageURL"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "imageURL" character varying(2000) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "imageURL"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "imageURL" character varying(255) NOT NULL`);
    }

}
