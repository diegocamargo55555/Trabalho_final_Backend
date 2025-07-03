import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from 'typeorm';
import Manga from "@modules/mangas/typeorm/entities/Manga";

@Entity('capitulos')
export default class Capitulo {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Manga, (manga) => manga.id)
    @JoinColumn({ name: 'manga_id' })
    manga: Manga;

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