import mangasRouter from "@modules/mangas/routes/mangas.routes";
import { Router } from "express";


const routes = Router();
routes.use('/mangas', mangasRouter);
export default routes;