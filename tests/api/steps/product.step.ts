import test, { expect } from '@playwright/test'
import { ProductQuerier } from '../../../core/controller/product/productQuerier';

export class ProductStep {
    constructor() {}

    async findAll() {
        return test.step('I find all products', async () => {
            const querier: ProductQuerier = new ProductQuerier();
            const response = await querier.query();
            expect(response).not.toBeNull();
            console.log(await response.text());
            
        });
    }

    async findById(id: string) {
        return test.step(`I find product with id=${id}`, async () => {
            const querier: ProductQuerier = new ProductQuerier();
            const response = await querier.setId(id).query();
            expect(response).not.toBeNull();
            console.log(await response.text());
        });
    }
}