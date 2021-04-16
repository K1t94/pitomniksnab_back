import {
  Column,
  Entity, JoinColumn, ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Category from './Category';

@Entity('item')
class Item {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column('character varying', {
    nullable: false,
    length: 255,
  })
  name: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    default: '',
  })
  price: string;

  @ManyToOne(() => Category)
  @JoinColumn({
    name: 'category_id',
  })
  category: Promise<Category>;

  @Column('integer', {
    nullable: false,
    default: 0,
  })
  order: number;

  @Column('character varying', {
    nullable: false,
    length: 50000,
  })
  description: string;

  @Column('character varying', {
    nullable: false,
    length: 2000,
  })
  imageURL: string;

  @Column('boolean', {
    nullable: false,
  })
  active: boolean;
}

export default Item;
