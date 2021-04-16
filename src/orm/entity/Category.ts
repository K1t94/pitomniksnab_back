import {
  Column,
  Entity, JoinTable, OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Item from './Item';

@Entity('category')
class Category {
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

  @Column('integer', {
    nullable: false,
    default: 0,
  })
  order: number;

  @Column('boolean', {
    nullable: false,
    default: true,
  })
  active: boolean;

  @OneToMany(() => Item, (item) => item.category)
  @JoinTable()
  items: Promise<Item[]>;
}

export default Category;
