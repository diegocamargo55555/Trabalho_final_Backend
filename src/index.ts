import mangasRouter from "@modules/mangas/routes/mangas.routes";
import { Router } from "express";

const routes = Router();
routes.use('/mangas', mangasRouter);
routes.get('/', (request, response) =>{
    return response.json({message: 'Hello Dev!'});
})