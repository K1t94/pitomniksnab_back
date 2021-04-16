import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('content')
class Content {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column('text', {
    nullable: false,
    default: '',
  })
  phone: string;

  @Column('text', {
    nullable: false,
    default: '',
  })
  email: string;

  @Column('text', {
    nullable: false,
    default: '',
  })
  howToBuy: string;

  @Column('text', {
    nullable: false,
    default: '',
  })
  mainHeader: string;

  @Column('text', {
    nullable: false,
    default: '',
  })
  mainText: string;

  @Column('text', {
    nullable: false,
    default: '',
  })
  companyInfo: string;
}

export default Content;
