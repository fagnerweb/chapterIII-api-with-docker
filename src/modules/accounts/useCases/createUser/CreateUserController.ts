import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserCase } from './CreateUserCase';

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { name, email, password, driver_license } = request.body;

            const createUserUserCase = container.resolve(CreateUserCase);

            await createUserUserCase.execute({
                name,
                email,
                password,
                driver_license,
            })

            return response.status(201).send()
        } catch (err) {
            return response.status(400).json({
                error: err
            })
        }
    }
}

export { CreateUserController }