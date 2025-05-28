import AppError from "@shared/errors/AppError";
import { getCustomRepository, Timestamp } from "typeorm";
import Manga from "../typeorm/entities/Manga";
import MangasRepository from "../typeorm/repositories/MangasRepository";

interface IRequest{
    id: string;
    name: string;
    capitulos: number;
    author: string;
    description: string;
    gender: string;
    release_date:Timestamp
}

export default class UpdateMangaService{

    public async execute({id, name, capitulos, author, description, gender, release_date}: IRequest) : Promise<Manga>{
        const mangasRepository = getCustomRepository(MangasRepository);
        const manga = await mangasRepository.findOne(id);
        if(!manga){
            throw new AppError('manga not found.');
        }
        //verificar se o novo nome do produto tbm já não exite e que não é o mesmo
        const mangaExists = await mangasRepository.findByName(name);
        if(mangaExists && name != manga.name){
            throw new AppError('There is already one manga with this name.');
        }
        manga.name = name;
        manga.capitulos = capitulos;
        manga.author = author
        manga.description = description
        manga.gender = gender
        manga.release_date = release_date

        await mangasRepository.save(manga);

        return manga;
    }
}


/*
                    { name: 'id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()' },
                    { name: 'name', type: 'varchar' },
                    { name: 'capitulos', type: 'int' },
                    { name: 'author', type: 'varchar' },
                    { name: 'description', type: 'varchar' },
                    { name: 'gender', type: 'varchar' },
                    { name: 'release_date', type: 'timestamp' },

*/