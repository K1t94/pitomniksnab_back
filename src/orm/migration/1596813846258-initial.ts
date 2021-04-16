import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1596813846258 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "name" character varying(20) NOT NULL, CONSTRAINT "UQ_ae4578dcaed5adff96595e61660" UNIQUE ("name"), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "identity" ("id" SERIAL NOT NULL, "phone" character varying(20) NOT NULL, "email" character varying(50), "password" character varying(64) NOT NULL, "type" character varying NOT NULL, "role_id" integer, CONSTRAINT "UQ_1676734d98fbadef7631fcffcec" UNIQUE ("phone"), CONSTRAINT "UQ_0d9005670fa2ee7dcc48842f64d" UNIQUE ("email"), CONSTRAINT "PK_ff16a44186b286d5e626178f726" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "identity_phone_key" ON "identity" ("phone") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "identity_email_key" ON "identity" ("email") `);
        await queryRunner.query(`CREATE INDEX "IDX_2f210945312823f42d93ee702b" ON "identity" ("type") `);
        await queryRunner.query(`CREATE TABLE "oauth_clients" ("client_id" text NOT NULL, "client_secret" text NOT NULL, "redirect_uri" text NOT NULL, CONSTRAINT "PK_d10fc8276aef07c36fd329b5969" PRIMARY KEY ("client_id", "client_secret"))`);
        await queryRunner.query(`CREATE TABLE "oauth_tokens" ("access_token" text NOT NULL, "access_token_expires_on" TIMESTAMP NOT NULL, "client_id" text NOT NULL, "refresh_token" text NOT NULL, "refresh_token_expires_on" TIMESTAMP NOT NULL, "user_id" integer NOT NULL, CONSTRAINT "PK_fa26928ba3302488360ac9e1145" PRIMARY KEY ("access_token"))`);
        await queryRunner.query(`CREATE INDEX "index_user_id" ON "oauth_tokens" ("user_id") `);
        await queryRunner.query(`ALTER TABLE "identity" ADD CONSTRAINT "FK_2c5540cddf06606b3fb9b02d9f2" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "identity" DROP CONSTRAINT "FK_2c5540cddf06606b3fb9b02d9f2"`);
        await queryRunner.query(`DROP INDEX "index_user_id"`);
        await queryRunner.query(`DROP TABLE "oauth_tokens"`);
        await queryRunner.query(`DROP TABLE "oauth_clients"`);
        await queryRunner.query(`DROP INDEX "IDX_2f210945312823f42d93ee702b"`);
        await queryRunner.query(`DROP INDEX "identity_email_key"`);
        await queryRunner.query(`DROP INDEX "identity_phone_key"`);
        await queryRunner.query(`DROP TABLE "identity"`);
        await queryRunner.query(`DROP TABLE "role"`);
    }

}
