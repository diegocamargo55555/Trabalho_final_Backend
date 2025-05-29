import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Manga from "../typeorm/entities/Capitulo";
import CapituloRepository from "../typeorm/repositories/CapitulosRepository";


interface IRequest {
    title: string;
    pages_url: string;
    pages_total: number;
    release_date: Date;
}

export default class CreateCapituloService {

    public async execute({ title, pages_url, pages_total, release_date }: IRequest): Promise<Manga> {
        const capituloRepository = getCustomRepository(CapituloRepository);

        const mangaExists = await capituloRepository.findByTitle(title);
        if (mangaExists) {
            throw new AppError('There is already one manga with this name.');
        }
            console.log("f")

        const manga = capituloRepository.create({
            title, pages_url, pages_total, release_date
        });
        await capituloRepository.save(manga);
        return manga;
    }
}
