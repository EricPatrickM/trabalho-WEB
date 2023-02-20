import User from "@modules/users/typeorm/entities/User";
import AppError from "@shared/errors/AppError";
import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import UsersRepository from "../typeorm/repositories/UsersRepository";

interface IRequest{
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService{

  public async execute({name, email, password}: IRequest) : Promise<User>{
    const usersRepository = getCustomRepository(UsersRepository);
    const emailExists  = await usersRepository.findByEmail(email);
    const hashedPassword = await hash(password, 8);
    if(emailExists){
      throw new AppError('Email address already used');
    }
    const user = usersRepository.create({
      name,
      email,
      password:hashedPassword,
    });
    await usersRepository.save(user);
    return user;
  }
}