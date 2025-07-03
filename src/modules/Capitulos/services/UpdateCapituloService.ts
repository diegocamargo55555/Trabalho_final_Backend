import AppError from "@shared/errors/AppError";
import { getCustomRepository, Timestamp } from "typeorm";
import Capitulo from "../typeorm/entities/Capitulo";
import CapitulosRepository from "../typeorm/repositories/CapitulosRepository";
import MangasRepository from "@modules/mangas/typeorm/repositories/MangasRepository";

interface IRequest {
    id: string
    title: string;
    pages_url: string;
    pages_total: number;
    release_date: Timestamp;
    manga_id: string

}


export default class UpdateCapituloService {

    public async execute({ id, title, pages_url, pages_total, release_date, manga_id }: IRequest): Promise<Capitulo> {
        const capitulosRepository = getCustomRepository(CapitulosRepository);
        const capitulo = await capitulosRepository.findById(id);
        const mangaRepository = getCustomRepository(MangasRepository);


        if (!capitulo) {
            throw new AppError('capitulo not found.');
        }
        const capituloExists = await capitulosRepository.findByTitle(title);
        if (capituloExists && title != capitulo.title) {
            throw new AppError('There is already one capitulo with this title.');
        }

        const mangaExists = await mangaRepository.findOne(manga_id);
        if (!mangaExists) {
            throw new AppError('Could not find any manga with the given ids.');
        }

        capitulo.title = title
        capitulo.pages_url = pages_url
        capitulo.pages_total = pages_total
        capitulo.release_date = release_date
        capitulo.manga = mangaExists

        await capitulosRepository.save(capitulo);
        return capitulo;
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