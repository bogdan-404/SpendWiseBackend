import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Expense {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('float')
    amount: number;

    @Column()
    category: string;

    @Column({ type: 'date' })
    date: Date;
}