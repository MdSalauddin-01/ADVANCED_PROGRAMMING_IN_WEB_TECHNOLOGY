import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    // Postgres returns decimals as strings; convert back to number
    transformer: {
      to: (value: number) => value,
      from: (value: string | null) => (value === null ? null : parseFloat(value)),
    },
  })
  price: number;

  @Column({ default: 0 })
  stock: number;

  @Column()
  category: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}