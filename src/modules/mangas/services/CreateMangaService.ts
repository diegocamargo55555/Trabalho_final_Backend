import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Manga from "../typeorm/entities/Manga";
import MangasRepository from "../typeorm/repositories/MangasRepository";


interface IRequest {
    name: string;
    capitulos: number;
    author: string;
    description: string;
    gender: string;
    release_date: Date;
}

export default class CreateMangaService {

    public async execute({ name, capitulos, author, description, gender, release_date }: IRequest): Promise<Manga> {
        const mangasRepository = getCustomRepository(MangasRepository);

        const mangaExists = await mangasRepository.findByName(name);
        if (mangaExists) {
            throw new AppError('There is already one manga with this name.');
        }

        const manga = mangasRepository.create({
            name, capitulos, author, description, gender, release_date
        });
        await mangasRepository.save(manga);
        return manga;
    }
}