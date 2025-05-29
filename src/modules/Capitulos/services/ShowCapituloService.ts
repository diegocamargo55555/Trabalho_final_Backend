import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Capitulo from "../typeorm/entities/Capitulo";
import CapitulosRepository from "../typeorm/repositories/CapitulosRepository";

interface IRequest {
    id: string;
}

export default class ShowCapitloService {
    public async execute({ id }: IRequest): Promise<Capitulo> {
        const CapituloRepository = getCustomRepository(CapitulosRepository);
        const Capitulo = await CapituloRepository.findOne(id);
        if (!Capitulo) {
            throw new AppError('Capitulo not found.');
        }
        return Capitulo;
    }
}