import {MigrationInterface, QueryRunner} from "typeorm";

export class content1598545038921 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "content" ("id" SERIAL NOT NULL, "phone" text NOT NULL DEFAULT '', "email" text NOT NULL DEFAULT '', "howToBuy" text NOT NULL DEFAULT '', "mainHeader" text NOT NULL DEFAULT '', "mainText" text NOT NULL DEFAULT '', "companyInfo" text NOT NULL DEFAULT '', CONSTRAINT "PK_6a2083913f3647b44f205204e36" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "content"`);
    }

}
