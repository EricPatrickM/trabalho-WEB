import { getCustomRepository } from "typeorm";
import publish from "../typeorm/entities/publish";
import publishRepository from "../typeorm/repositories/publishRepository";


export default class ListPublishService{
    public async execute():Promise<publish[]>{
        const publishRepo = getCustomRepository(publishRepository);

        const publishes = await publishRepo.find({
            where:{available:"true"},
            select:['id', 'tag', 'preview', 'views', 'title','created_at', 'updated_at', 'customer', 'content']
        })

        return publishes;
    }
}