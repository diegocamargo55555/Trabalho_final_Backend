import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import CapitulosRepository from "../typeorm/repositories/CapitulosRepository";

interface IRequest{
    id: string;
}

export default class DeleteCapituloService{

    public async execute({id}: IRequest) : Promise<void>{
        const capitulosRepository = getCustomRepository(CapitulosRepository);
        const capitulo = await capitulosRepository.findOne(id);
        if(!capitulo){
            throw new AppError('capitulo not found.');
        }
        await capitulosRepository.remove(capitulo); 
    }
}
