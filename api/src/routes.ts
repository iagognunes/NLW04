import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { SurveysController } from './controllers/SurveysController';
import { SendMailController } from './controllers/SendMailController';

const router = Router();

const userController = new UserController();
const surveyController = new SurveysController();

const sendMailController = new SendMailController();

//rota pra mandar e visualisar os usuarios
router.post('/users', userController.create);
router.get('/users', userController.show);

//rota pra mandar e visualisar as pesquisas
router.post("/surveys", surveyController.create);
router.get("/surveys", surveyController.show);

router.post("/sendMail", sendMailController.execute);
router.get("/sendMail", sendMailController.show);

export { router };