import customersRouter from "@modules/customer/routes/customer.routes";
import publishRouter from "@modules/publish/routes/publishRoutes";
import passwordRouter from "@modules/users/routes/password.routes";
import profileRouter from "@modules/users/routes/profile.routes";
import sessionsRouter from "@modules/users/routes/sessions.routes";
import usersRouter from "@modules/users/routes/users.routes";
import { Router } from "express";

const routes = Router();

routes.use('/publish', publishRouter)
routes.use('/user', usersRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/password', passwordRouter)
routes.use('/profile', profileRouter);
routes.use('/customers', customersRouter);

export default routes;