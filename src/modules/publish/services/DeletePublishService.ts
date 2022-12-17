import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import publishRepository from "../typeorm/repositories/publishRepository";



export default class DeletePublishService{
    public async execute(id:string):Promise<void>{
        const publishRep = getCustomRepository(publishRepository)
        const publish = await publishRep.findOne(id)
        if(!publish){
            throw new AppError('POST NOT EXISTS!')
        }
        await publishRep.remove(publish)
    }
}