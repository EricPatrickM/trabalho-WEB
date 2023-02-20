import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import UsersController from "../controllers/UserController";
import isAuthenticadted from "../../../shared/http/middlewares/isAuthenticated";
import UsersAvatarController from "../controllers/UserAvatarController";

import multer from 'multer';
import uploadConfig from '@config/upload';

const usersAvatarController = new UsersAvatarController();
const upload = multer(uploadConfig);

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/', isAuthenticadted, usersController.index);

usersRouter.post(
  '/',
  celebrate({
  [Segments.BODY]:{
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
  }
}),
  usersController.create);

usersRouter.patch('/avatar',
  isAuthenticadted,
  upload.single('avatar'),
  usersAvatarController.update
);

export default usersRouter;