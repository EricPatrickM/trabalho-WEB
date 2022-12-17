import { getCustomRepository } from "typeorm";
import publish from "../typeorm/entities/publish";
import publishRepository from "../typeorm/repositories/publishRepository";


//    views:number;     preview:string;
interface IRequest{
    tag:string;
    title:string;
    content:string;
    actor:string;
    available:boolean;
}

export default class CreatePublishService{
    public async execute({tag,title,content, actor, available}:IRequest) : Promise<publish>{
        const publishRep = getCustomRepository(publishRepository);

        const publish = publishRep.create({
            tag,title,content, actor, available
        });
        publish.preview= publish.content.length > 100 ? (publish.content.substring(0, 99) + "..."): publish.content
        await publishRep.save(publish);
        return publish;
    }

}