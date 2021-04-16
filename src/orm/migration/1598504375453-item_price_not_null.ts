import {MigrationInterface, QueryRunner} from "typeorm";

export class itemPriceNotNull1598504375453 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "price" SET DEFAULT ''`);
        await queryRunner.query(`UPDATE "item" SET "price" = '' WHERE "price" IS NULL`);
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "price" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "price" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "price" DROP DEFAULT`);
    }

}
