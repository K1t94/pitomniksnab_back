import {
  Column,
  Entity,
  PrimaryColumn,
} from 'typeorm';

@Entity('oauth_clients')
class OauthClients {
  @PrimaryColumn('text', {
    nullable: false,
    primary: true,
    name: 'client_id',
  })
  clientId: string;

  @Column('text', {
    nullable: false,
    primary: true,
    name: 'client_secret',
  })
  clientSecret: string;

  @Column('text', {
    nullable: false,
    name: 'redirect_uri',
  })
  redirectUri: string;
}

export default OauthClients;
