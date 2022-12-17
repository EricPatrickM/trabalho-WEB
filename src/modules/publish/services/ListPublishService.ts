import { getCustomRepository } from "typeorm";
import publish from "../typeorm/entities/publish";
import publishRepository from "../typeorm/repositories/publishRepository";


export default class ListPublishService{
    public async execute():Promise<publish[] | undefined>{
        const publishRepo = getCustomRepository(publishRepository);

        const publishes = await publishRepo.find()

        return publishes;
    }
}