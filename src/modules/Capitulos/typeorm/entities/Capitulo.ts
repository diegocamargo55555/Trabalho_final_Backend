import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from 'typeorm';

@Entity('capitulos')
export default class Capitulo {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    pages_url: string;

    @Column('int')
    pages_total: number;

    @Column('date')
    release_date: Timestamp;

    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
}


// id, name, author, description, gender, capitulos, release_date, created_at, updated_at