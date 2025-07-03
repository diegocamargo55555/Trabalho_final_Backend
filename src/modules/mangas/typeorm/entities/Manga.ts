import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from 'typeorm';
import Capitulo from "@modules/Capitulos/typeorm/entities/Capitulo";

@Entity('mangas')
export default class Manga {
    @PrimaryGeneratedColumn('uuid')
    id: string;         

    @OneToMany(() => Capitulo, (capitulo) => capitulo.manga, {
        cascade: true
    })
    charpters: Capitulo[];

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