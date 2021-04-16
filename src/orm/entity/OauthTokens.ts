import {
  Column,
  Entity,
  Index,
  PrimaryColumn,
} from 'typeorm';

@Entity('oauth_tokens')
@Index('index_user_id', ['userId'])
class OauthTokens {
  @PrimaryColumn('text', {
    nullable: false,
    name: 'access_token',
  })
  accessToken: string;

  @Column('timestamp without time zone', {
    nullable: false,
    name: 'access_token_expires_on',
  })
  accessTokenExpiresOn: Date;

  @Column('text', {
    nullable: false,
    name: 'client_id',
  })
  clientId: string;

  @Column('text', {
    nullable: false,
    name: 'refresh_token',
  })
  refreshToken: string;

  @Column('timestamp without time zone', {
    nullable: false,
    name: 'refresh_token_expires_on',
  })
  refreshTokenExpiresOn: Date;

  @Column('integer', {
    nullable: false,
    name: 'user_id',
  })
  userId: number;
}

export default OauthTokens;
