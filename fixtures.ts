import {test as base} from '@playwright/test'
import { ProductStep } from './tests/api/steps/product.step';

// The instances WorkerFixtures will be initialized on worker level 
interface WorkerFixtures {
    
}

// The instances defined in TestFixtures will be initialized on test level
interface TestFixtures {
    productStep: ProductStep,
}

// The fxituers are set to auto execution 
export const test = base.extend<TestFixtures, WorkerFixtures> ({
    productStep: async ({}, use) => {
        const step = new ProductStep();
        await use(step);
    }
});

