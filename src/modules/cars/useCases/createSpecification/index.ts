import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationService';

const specificationsRepository = new SpecificationsRepository();

const createSPecificatioinUseCase = new CreateSpecificationUseCase(
    specificationsRepository,
);

const createSpecificationController = new CreateSpecificationController(
    createSPecificatioinUseCase,
);

export { createSpecificationController };
