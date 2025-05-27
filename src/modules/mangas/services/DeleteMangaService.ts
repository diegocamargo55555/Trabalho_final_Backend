import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import MangasRepository from "../typeorm/repositories/MangasRepository";

interface IRequest{
    id: string;
}

export default class DeleteMangaService{

    public async execute({id}: IRequest) : Promise<void>{
        const mangasRepository = getCustomRepository(MangasRepository);
        const manga = await mangasRepository.findOne(id);
        if(!manga){
            throw new AppError('manga not found.');
        }
        await mangasRepository.remove(manga); 
    }
}
