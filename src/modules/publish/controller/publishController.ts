import { Request, response, Response } from "express";
import CreatePublishService from "../services/CreatePublishService";
import ListPublishService from "../services/ListPublishService";
import ShowPublishService from "../services/ShowPublishService";
import UpdatePublishService from "../services/UpdatePublishService";
import DeletePublishService from "../services/DeletePublishService";

export default class publishController{
    public async show(req:Request, res:Response):Promise<Response>{
        console.log('SHOW', req.url)
        const {id} = req.params;
        const publish = new ShowPublishService()
        const publishes = publish.execute({id})
        return response.json(publishes)
    }

    public async list(req:Request, res:Response):Promise<Response>{
        console.log('entrou')
        const publish = new ListPublishService()
        const publishes = publish.execute()
        return response.json(publishes)
    }

    public async create(req:Request, res:Response):Promise<Response>{
        console.log('CREATE')
        const {tag, title, content, actor, available} = req.body;
        const publish = new CreatePublishService()
        const publishes = publish.execute({tag, title, content, actor, available})
        return response.json(publishes)
    }

    public async update(req:Request, res:Response):Promise<Response>{
        const {tag, title, content, actor, available} = req.body;
        const {id} = req.params
        const publish = new UpdatePublishService()
        const publishes = publish.execute({id, tag, title, content, actor, available})
        return response.json(publishes)
    }

    public async delete(req:Request, res:Response):Promise<Response>{
        const {id} = req.params
        const publish = new DeletePublishService()
        const publishes = publish.execute(id)
        return response.json([])
    }
}