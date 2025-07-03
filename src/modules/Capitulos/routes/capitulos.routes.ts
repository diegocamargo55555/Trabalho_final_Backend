import { Router } from 'express';
import CapitulosController from '../controllers/CapitulosController';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { celebrate, Joi, Segments } from 'celebrate';

const capituloRouter = Router();
const capitulosController = new CapitulosController(); // instanciando a classe

capituloRouter.get('/', isAuthenticated, async (req, res, next) => {
  try {
    await capitulosController.index(req, res, next);
  } catch (err) {
    next(err);
  }
});

capituloRouter.get('/:id', isAuthenticated, celebrate({
  [Segments.PARAMS]: { id: Joi.string().uuid().required() }
}), async (req, res, next) => {
  try {
    await capitulosController.show(req, res, next);
  } catch (err) {
    next(err);
  }
});

capituloRouter.post('/', isAuthenticated, celebrate({
  [Segments.BODY]: {
    title: Joi.string().required(),
    pages_url: Joi.string().required(),
    pages_total: Joi.number().required(),
    release_date: Joi.string().required(),
    manga: Joi.string().required()
  }
}), async (req, res, next) => {
  try {
    await capitulosController.create(req, res, next);
  } catch (err) {
    next(err);
  }
});

capituloRouter.put('/:id', isAuthenticated, celebrate({
  [Segments.PARAMS]: { id: Joi.string().uuid().required() },

}), async (req, res, next) => {
  try {
    await capitulosController.update(req, res, next);
  } catch (err) {
    next(err);
  }
});

capituloRouter.delete('/:id', isAuthenticated, celebrate({
  [Segments.PARAMS]: { id: Joi.string().uuid().required() }
}), async (req, res, next) => {
  try {
    await capitulosController.delete(req, res, next);
  } catch (err) {
    next(err);
  }
});

export default capituloRouter;
