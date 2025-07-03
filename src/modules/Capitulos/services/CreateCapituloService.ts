import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Manga from "../typeorm/entities/Capitulo";
import CapituloRepository from "../typeorm/repositories/CapitulosRepository";
import MangasRepository from "@modules/mangas/typeorm/repositories/MangasRepository";


interface IRequest {
    title: string;
    pages_url: string;
    pages_total: number;
    release_date: Date;
    manga_id: string
}

export default class CreateCapituloService {

    public async execute({ manga_id, title, pages_url, pages_total, release_date }: IRequest): Promise<Manga> {
        const capituloRepository = getCustomRepository(CapituloRepository);
        const mangaRepository = getCustomRepository(MangasRepository);



        const capituloExists = await capituloRepository.findByTitle(title);
        if (capituloExists) {
            throw new AppError('There is already one capitulo with this name.');
        }
        const mangaExists = await mangaRepository.findById(manga_id);
        if (!mangaExists) {
            throw new AppError('Could not find any manga with the given ids.');
        }

        console.log("f: ", mangaExists)



        const capitulo = capituloRepository.create({
            title,
            pages_url,
            pages_total,
            release_date,
            manga: mangaExists,
        });


        await capituloRepository.save(capitulo);
        return capitulo;
    }
}
