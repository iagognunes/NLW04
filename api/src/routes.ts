import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { SurveysController } from './controllers/SurveysController';

const router = Router();

const userController = new UserController();
const surveyController = new SurveysController();

//rota pra mandar e visualisar os usuarios
router.post('/users', userController.create);
router.get('/users', userController.show);

//rota pra mandar e visualisar as pesquisas
router.post("/surveys", surveyController.create);
router.get("/surveys", surveyController.show);

export { router };