import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from 'typeorm';

@Entity('mangas')
export default class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    author: string;

    @Column()
    description: string;

    @Column()
    gender: string;

    @Column('int')
    capitulos: number;

    @Column('date')
    release_date: Timestamp;


    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
}


// id, name, author, description, gender, capitulos, release_date, created_at, updated_at