import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import publish from "../typeorm/entities/publish";
import publishRepository from "../typeorm/repositories/publishRepository";

interface IRequest{
    id:string
}

export default class ShowPublishService{
    public async execute({id}:IRequest): Promise<publish | undefined>{
        const publishRep = getCustomRepository(publishRepository)
        const publish = await publishRep.findOne(id);
        
        if(!publish || publish.available == false){
            throw new AppError('POST NOT FOUND!')
        }

        publish.views+=1;
        publishRep.save(publish)

        return publish
    }
}