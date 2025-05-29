import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Manga from "../typeorm/entities/Capitulo";
import MangasRepository from "../typeorm/repositories/CapitulosRepository";


interface IRequest {
    title: string;
    pages_url: string;
    pages_total: number;
    release_date: Date;
}

export default class CreateCapituloService {

    public async execute({ title, pages_url, pages_total, release_date }: IRequest): Promise<Manga> {
        const mangasRepository = getCustomRepository(MangasRepository);

        const mangaExists = await mangasRepository.findByName(title);
        if (mangaExists) {
            throw new AppError('There is already one manga with this name.');
        }

        const manga = mangasRepository.create({
            title, pages_url, pages_total, release_date
        });
        await mangasRepository.save(manga);
        return manga;
    }
}
