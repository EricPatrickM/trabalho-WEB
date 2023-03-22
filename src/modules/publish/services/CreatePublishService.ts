import CustomersRepository from "@modules/customer/typeorm/repositories/CustomersRepository";
import UsersRepository from "@modules/users/typeorm/repositories/UsersRepository";
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import publish from "../typeorm/entities/publish";
import publishRepository from "../typeorm/repositories/publishRepository";


//    views:number;     preview:string;
interface IRequest{
    tag:string;
    title:string;
    content:string;
    available:boolean;
}

export default class CreatePublishService{
    public async execute({tag,title,content, available}:IRequest, customer_id:string) : Promise<publish>{//Promise<publish>{
        const publishRep = getCustomRepository(publishRepository);
        const customerRep = getCustomRepository(CustomersRepository)
        const userRep = getCustomRepository(UsersRepository)

        const userPub = await userRep.findOne({id:customer_id})
        if(!userPub){
            throw new AppError('Invalid User')
        }
        const customerPub = await customerRep.findOne({email:userPub?.email})
        if(!customerPub){
            throw new AppError('Invalid Customer')
        }

        const publish = publishRep.create({
            tag, title, content, available
        });
        
        publish.preview= publish.content.length > 100 ? (publish.content.substring(0, 99) + "..."): publish.content
        publish.customer=customerPub
        await publishRep.save(publish);
        return publish;
    }

}