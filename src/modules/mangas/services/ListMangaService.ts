import { getCustomRepository } from "typeorm";
import Manga from "../typeorm/entities/Manga";
import MangasRepository from "../typeorm/repositories/MangasRepository";

export default class ListMangaService{

    public async execute() : Promise<Manga[]>{
        const mangaRepository = getCustomRepository(MangasRepository);
        const mangas = await mangaRepository.find();
        return mangas;
    }
}