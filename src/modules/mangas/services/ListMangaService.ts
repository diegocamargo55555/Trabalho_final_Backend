import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Manga";
import MangasRepository from "../typeorm/repositories/MangasRepository";

export default class ListProductService{

    public async execute() : Promise<Product[]>{
        const mangaRepository = getCustomRepository(MangasRepository);
        const mangas = await mangaRepository.find();
        return mangas;
    }
}