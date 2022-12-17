import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import publishController from "../controller/publishController";

const publishRouter= Router();
const publishControl = new publishController();

publishRouter.get('/', publishControl.list);

publishRouter.get('/:id', celebrate({
    [Segments.PARAMS]:{
        id:Joi.string().uuid().required()
    }
}), publishControl.show);

publishRouter.post('/', celebrate({
    [Segments.BODY]:{
        tag:Joi.string().required(),
        title:Joi.string().required(),
        content:Joi.string().required(),
        actor:Joi.string().required(),
        available:Joi.bool().required()
    }
}), publishControl.create);

publishRouter.put('/:id', celebrate({
    [Segments.PARAMS]:{
        id:Joi.string().uuid().required()
    },
    [Segments.BODY]:{
        tag:Joi.string().required(),
        title:Joi.string().required(),
        content:Joi.string().required(),
        actor:Joi.string().required(),
        available:Joi.boolean().required()
    }
}), publishControl.update);

publishRouter.delete('/:id', celebrate({
    [Segments.PARAMS]:{
        id:Joi.string().uuid().required()
    }
}), publishControl.delete);

export default publishRouter;