import AppError from "@shared/errors/AppError";
import { getCustomRepository, Timestamp } from "typeorm";
import Capitulo from "../typeorm/entities/Capitulo";
import CapitulosRepository from "../typeorm/repositories/CapitulosRepository";

interface IRequest {
    id: string
    title: string;
    pages_url: string;
    pages_total: number;
    release_date: Timestamp;
}


export default class UpdateCapituloService{

    public async execute({id, title, pages_url, pages_total, release_date}: IRequest) : Promise<Capitulo>{
        const capitulosRepository = getCustomRepository(CapitulosRepository);
        const capitulo = await capitulosRepository.findOne(id);
        if(!capitulo){
            throw new AppError('capitulo not found.');
        }
        //verificar se o novo nome do produto tbm já não exite e que não é o mesmo
        const capituloExists = await capitulosRepository.findByTitle(title);
        if(capituloExists && title != capitulo.title){
            throw new AppError('There is already one capitulo with this title.');
        }
        capitulo.title = title
        capitulo.pages_url = pages_url
        capitulo.pages_total = pages_total
        capitulo.release_date = release_date

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