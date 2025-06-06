import capituloRouter from "@modules/Capitulos/routes/capitulos.routes";
import mangasRouter from "@modules/mangas/routes/mangas.routes";
import sessionsRouter from "@modules/users/routes/sessions.routes";
import usersRouter from "@modules/users/routes/users.routes";
import { Router } from "express";


const routes = Router();
routes.use('/mangas', mangasRouter);
routes.use('/capitulos', capituloRouter)
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
export default routes;