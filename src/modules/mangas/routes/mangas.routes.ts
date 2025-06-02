import { Router } from 'express';
import MangasController from '../controllers/MangasController';
import { celebrate, Joi, Segments } from 'celebrate';

const mangasRouter = Router();
const mangasController = new MangasController(); // instanciando a classe

mangasRouter.get('/', async (req, res, next) => {
  try {
    await mangasController.index(req, res, next);
  } catch (err) {
    next(err);
  }
});

mangasRouter.get('/:id', celebrate({
  [Segments.PARAMS]: { id: Joi.string().uuid().required() }
}),
  async (req, res, next) => {
    try {
      await mangasController.show(req, res, next);
    } catch (err) {
      next(err);
    }
  });

mangasRouter.post('/', celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    capitulos: Joi.number().required(),
    author: Joi.string().required(),
    description: Joi.string().required(),
    gender: Joi.string().required(),
    release_date: Joi.string().required()
  }
}),
  async (req, res, next) => {
    try {
      await mangasController.create(req, res, next);
    } catch (err) {
      next(err);
    }
  });

mangasRouter.put('/:id', celebrate({
  [Segments.PARAMS]: { id: Joi.string().uuid().required() },
  [Segments.BODY]: {
    name: Joi.string().required(),
    capitulos: Joi.number().required(),
    author: Joi.string().required(),
    description: Joi.string().required(),
    gender: Joi.string().required(),
    release_date: Joi.string().required()
  }
}),
  async (req, res, next) => {
    try {
      await mangasController.update(req, res, next);
    } catch (err) {
      next(err);
    }
  });

mangasRouter.delete('/:id', celebrate({
  [Segments.PARAMS]: { id: Joi.string().uuid().required() }
}),
  async (req, res, next) => {
    try {
      await mangasController.delete(req, res, next);
    } catch (err) {
      next(err);
    }
  });

export default mangasRouter;
