import { EntityRepository, Repository } from "typeorm";
import publish from "../entities/publish";

@EntityRepository(publish)
export default class publishRepository extends Repository<publish>{
    public async findByName(title:string):Promise<publish | undefined>{
        const publish = await this.findOne({
            where:{title}
        });
        return publish;
    }
}