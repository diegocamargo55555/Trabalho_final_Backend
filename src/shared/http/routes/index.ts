import capituloRouter from "@modules/Capitulos/routes/capitulos.routes";
import mangasRouter from "@modules/mangas/routes/mangas.routes";
import { Router } from "express";


const routes = Router();
routes.use('/mangas', mangasRouter);
routes.use('/capitulos', capituloRouter)
export default routes;