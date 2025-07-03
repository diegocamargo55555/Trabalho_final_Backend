import { EntityRepository, Repository } from "typeorm";
import Manga from "../entities/Manga";

@EntityRepository(Manga)
export default class MangasRepository extends Repository<Manga> {

    //esse método retorna uma promessa
    public async findByName(name: string): Promise<Manga | undefined> {
        const manga = this.findOne({
            where: { name }
        })
        return manga;
    }


    public async findById(id: string): Promise<Manga | undefined> {
        const manga = await this.findOne(id, {
        relations: ['charpters']});
        return manga;
    }

}


