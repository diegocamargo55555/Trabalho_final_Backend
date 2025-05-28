import { Router } from 'express';
import MangasController from '../controllers/MangasController';

const mangasRouter = Router();
const mangasController = new MangasController(); // instanciando a classe

mangasRouter.get('/', async (req, res, next) => {
  try {
    console.log("test1")
    await mangasController.index(req, res, next);
  } catch (err) {
    next(err);
  }
});

mangasRouter.get('/:id', async (req, res, next) => {
  try {
    await mangasController.show(req, res, next);
  } catch (err) {
    next(err);
  }
});

mangasRouter.post('/', async (req, res, next) => {
  try {
    await mangasController.create(req, res, next);
  } catch (err) {
    next(err);
  }
});

mangasRouter.put('/:id', async (req, res, next) => {
  try {
    await mangasController.update(req, res, next);
  } catch (err) {
    next(err);
  }
});

mangasRouter.delete('/:id', async (req, res, next) => {
  try {
    await mangasController.delete(req, res, next);
  } catch (err) {
    next(err);
  }
});

export default mangasRouter;
