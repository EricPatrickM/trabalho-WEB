import publishRouter from "@modules/publish/routes/publishRoutes";
import { Router } from "express";

const routes = Router();

routes.get('/publish', publishRouter)

export default routes;