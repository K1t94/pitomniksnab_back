import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Role from './Role';

@Entity('identity')
@Index('identity_email_key', ['email'], { unique: true })
@Index('identity_phone_key', ['phone'], { unique: true })
class Identity {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @ManyToOne(() => Role, {
    eager: true,
  })
  @JoinColumn({
    name: 'role_id',
  })
  role: Role;

  @Column('character varying', {
    nullable: false,
    unique: true,
    length: 20,
    name: 'phone',
  })
  phone: string;

  @Column('character varying', {
    nullable: true,
    unique: true,
    length: 50,
    name: 'email',
  })
  email: string | null;

  @Column('character varying', {
    nullable: false,
    length: 64, // sha256
    name: 'password',
  })
  password: string;
}

export default Identity;
