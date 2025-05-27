import CreateMangaService from "../services/CreateMangaService";
import DeleteMangaService from "../services/DeleteMangaService";
import ListMangaService from "../services/ListMangaService";
import ShowMangaService from "../services/ShowMangaService";
import UpdateMangaService from "../services/UpdateMangaService";
import { Request, Response, NextFunction } from 'express';

export default class MangasController {

    public async index(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        try {
            const listMangas = new ListMangaService();
            const mangas = await listMangas.execute();
            return response.json(mangas);
        } catch (err) {
            next(err);
        }
    }

    public async show(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { id } = request.params;
            const showManga = new ShowMangaService();
            const manga = await showManga.execute({ id });
            return response.json(manga);
        } catch (err) {
            next(err);
        }
    }

    public async create(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        try { //            name, capitulos, author, description, gender, release_date

            const { name, capitulos, author, description, gender, release_date } = request.body;
            const createManga = new CreateMangaService();
            const manga = await createManga.execute({ name, capitulos, author, description, gender, release_date });
            return response.json(manga);
        } catch (err) {
            next(err);
        }
    }

    public async update(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        try {
            const {name, capitulos, author, description, gender, release_date } = request.body;
            const { id } = request.params;
            const updateManga = new UpdateMangaService();
            const manga = await updateManga.execute({id, name, capitulos, author, description, gender, release_date });
            return response.json(manga);
        } catch (err) {
            next(err);
        }
    }

    public async delete(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { id } = request.params;
            const deleteManga = new DeleteMangaService();
            await deleteManga.execute({ id });
            return response.json([]);
        } catch (err) {
            next(err);
        }
    }
}