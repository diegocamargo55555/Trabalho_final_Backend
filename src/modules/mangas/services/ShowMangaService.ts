import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Manga from "../typeorm/entities/Manga";
import MangasRepository from "../typeorm/repositories/MangasRepository";

interface IRequest {
    id: string;
}

export default class ShowMangaService {
    public async execute({ id }: IRequest): Promise<Manga> {
        const mangaRepository = getCustomRepository(MangasRepository);
        const manga = await mangaRepository.findOne(id);
        if (!manga) {
            throw new AppError('manga not found.');
        }
        return manga;
    }
}