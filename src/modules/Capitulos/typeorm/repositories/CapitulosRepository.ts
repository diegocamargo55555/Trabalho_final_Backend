import { EntityRepository, Repository } from "typeorm";
import Capitulo from "../entities/Capitulo";

@EntityRepository(Capitulo)
export default class CapitulosRepository extends Repository<Capitulo> {

    //esse método retorna uma promessa
    public async findByTitle(title: string): Promise<Capitulo | undefined> {
        const Capitulo = this.findOne({
            where: { title }
        })
        return Capitulo;
    }
}
