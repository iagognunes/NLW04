import { getCustomRepository } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import { Request, Response } from "express";
import { AppError } from "../errors/AppError";


class AnswerController{

    async execute(request: Request, response: Response){
        const { value } = request.params;
        const { u } = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u),
        });

        if(!surveyUser){
            throw new AppError("Survey User does not exists!");

        }

        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser);

        return response.json(surveyUser);
    }
}

export { AnswerController }

/**
 * 
 * Route Params => Parametros que compõe a rota(obrigatorios)
 *  routes.get("/answers/:value"); => :value
 * 
 * Query Params => Parametros de busca e paginação (Não são obrigatórios)
 *  => chave=valor
 */