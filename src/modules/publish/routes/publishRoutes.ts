import { Router } from "express";
import publishController from "../controller/publishController";

const publishRouter= Router();
const publishControl = new publishController();

publishRouter.get('/', publishControl.list);
//publishRouter.get('/:id', publishControl.show);
publishRouter.post('/', publishControl.create);
publishRouter.put('/:id', publishControl.update);
publishRouter.delete('/:id', publishControl.delete);

export default publishRouter;