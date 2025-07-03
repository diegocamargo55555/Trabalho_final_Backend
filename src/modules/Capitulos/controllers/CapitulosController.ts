import CreateCapituloService from "../services/CreateCapituloService";
import DeleteCapituloService from "../services/DeleteCapituloService";
import ListCapituloService from "../services/ListCapituloService";
import ShowCapituloService from "../services/ShowCapituloService";
import UpdateCapituloService from "../services/UpdateCapituloService";
import { Request, Response, NextFunction } from 'express';

export default class CapitulosController {

    public async index(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        try {
            const listCapitulos = new ListCapituloService();
            const capitulos = await listCapitulos.execute();
            return response.json(capitulos);
        } catch (err) {
            next(err);
        }
    }

    public async show(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { id } = request.params;
            const showCapitulo = new ShowCapituloService();
            const capitulo = await showCapitulo.execute({ id });
            return response.json(capitulo);
        } catch (err) {
            next(err);
        }
    }

    public async create(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        try { //            title, pages_url, pages_total, release_date
            const { manga_id, title, pages_url, pages_total, release_date } = request.body;
            const createCapitulo = new CreateCapituloService();
            const capitulo = await createCapitulo.execute({ manga_id, title, pages_url, pages_total, release_date });
            console.log("fff")

            return response.json(capitulo);
        } catch (err) {
            next(err);
        }
    }

    public async update(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { title, pages_url, pages_total, release_date, manga_id } = request.body;
            const { id } = request.params;
            const updateCapitulo = new UpdateCapituloService();
            const capitulo = await updateCapitulo.execute({ id, title, pages_url, pages_total, release_date, manga_id });
            return response.json(capitulo);
        } catch (err) {
            next(err);
        }
    }

    public async delete(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { id } = request.params;
            const deleteCapitulo = new DeleteCapituloService();
            await deleteCapitulo.execute({ id });
            return response.json([]);
        } catch (err) {
            next(err);
        }
    }
}