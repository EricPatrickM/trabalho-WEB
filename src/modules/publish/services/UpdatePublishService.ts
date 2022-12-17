import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import publish from "../typeorm/entities/publish";
import publishRepository from "../typeorm/repositories/publishRepository";


interface IRequest{
    id:string;
    tag:string;
    title:string;
    content:string;
    actor:string;
    available:boolean;
}

export default class UpdatePublishService{
    public async execute({id,tag,title,content, actor, available}:IRequest):Promise<publish>{
        const publishRep = getCustomRepository(publishRepository);

        const publish = await publishRep.findOne(id);
        if(! publish){
            throw new AppError('POST NAO EXISTE', 400)
        }
        try{
            publish.tag = tag;
            publish.title = title;
            publish.content = content;
            publish.actor = actor;
            publish.available = available
            //publish.updated_at= new Date()
            await publishRep.save(publish)
            return publish
        } catch(e){
            throw new AppError('Erro nos dados!!')
        }
    }  
}