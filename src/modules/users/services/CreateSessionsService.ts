import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";
import AppError from "src/shared/errors/AppError";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import auth from "@config/auth";


interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User
  token: string
}

export default class CreateUserService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const userRepository = getCustomRepository(UsersRepository);
    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw new AppError('Incorrect email/password combination');
    }
    const passwordConfirmed = await compare(password, user.password)
    if (!passwordConfirmed) {
      throw new AppError('Incorrect email/password combination');
    }

    const token = sign({}, auth.jwt.secret, {
      subject: user.id,
      expiresIn: '1d'
    })

    return { user, token };

  }
}