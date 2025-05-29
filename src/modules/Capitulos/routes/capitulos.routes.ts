import { Router } from 'express';
import CapitulosController from '../controllers/CapitulosController';

const capituloRouter = Router();
const capitulosController = new CapitulosController(); // instanciando a classe

capituloRouter.get('/', async (req, res, next) => {
  try {
    await capitulosController.index(req, res, next);
  } catch (err) {
    next(err);
  }
});

capituloRouter.get('/:id', async (req, res, next) => {
  try {
    await capitulosController.show(req, res, next);
  } catch (err) {
    next(err);
  }
});

capituloRouter.post('/', async (req, res, next) => {
  try {
    await capitulosController.create(req, res, next);
  } catch (err) {
    next(err);
  }
});

capituloRouter.put('/:id', async (req, res, next) => {
  try {
    await capitulosController.update(req, res, next);
  } catch (err) {
    next(err);
  }
});

capituloRouter.delete('/:id', async (req, res, next) => {
  try {
    await capitulosController.delete(req, res, next);
  } catch (err) {
    next(err);
  }
});

export default capituloRouter;
