import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { SurveysController } from './controllers/SurveysController';
import { SendMailController } from './controllers/SendMailController';
import { AnswerController } from './controllers/AnswerController';
import { NpsController } from './controllers/NpsController';

const router = Router();

const userController = new UserController();
const surveyController = new SurveysController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

//rota pra mandar e visualisar os usuarios
router.post('/users', userController.create);
router.get('/users', userController.show);

//rota pra mandar e visualisar as pesquisas
router.post("/surveys", surveyController.create);
router.get("/surveys", surveyController.show);

router.post("/sendMail", sendMailController.execute);
router.get("/sendMail", sendMailController.show);

router.get("/answers/:value",answerController.execute);

router.get("/nps/:survey_id", npsController.execute);

export { router };