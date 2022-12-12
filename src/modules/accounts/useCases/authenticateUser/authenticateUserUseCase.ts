import { compare } from 'bcryptjs'
import { inject, injectable } from "tsyringe";
import { sign } from 'jsonwebtoken'

import { AppError } from '../../../../errors/AppError'

import { IUsersRepository } from '../../repositories/IUsersRepository'

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    }, 
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UserRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError("Email or password incorrect!");
        }

        const passwordMath = await compare(password, user.password);

        if (!passwordMath) {
            throw new AppError("Email or password incorrent!");
        }

        const token = sign({}, "2f78f66382dd916c36ca97f8405bb644", {
            subject: user.id,
            expiresIn: "1d",
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }
        return tokenReturn;
    }
}

export { AuthenticateUserUseCase }