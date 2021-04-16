import {MigrationInterface, QueryRunner} from "typeorm";

export class categoryOrderPrice1598454524354 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "order" integer NOT NULL DEFAULT 0, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "item" ADD "price" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "item" ADD "order" integer NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "item" ADD "category_id" integer`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_91ba90f150e8804bdaad7b17ff8" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_91ba90f150e8804bdaad7b17ff8"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "category_id"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "order"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "price"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
