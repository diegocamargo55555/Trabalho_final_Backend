import { getCustomRepository } from "typeorm";
import Capitulo from "../typeorm/entities/Capitulo";
import CapitulosRepository from "../typeorm/repositories/CapitulosRepository";

export default class CapituloService{

    public async execute() : Promise<Capitulo[]>{
        const capitulosRepository = getCustomRepository(CapitulosRepository);
        const capitulos = await capitulosRepository.find();
        return capitulos;
    }
}