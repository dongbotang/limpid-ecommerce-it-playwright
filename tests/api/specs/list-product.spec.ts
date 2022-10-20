import { test } from '../../../fixtures'

test.describe('Test list all product and list a product by id', () => {
    test('Test list list all product then list product id=1', async ({ productStep }) => {
        await productStep.findAll();
        await productStep.findById('1');
    });

    test('Test list product id=2', async ({ productStep }) => {
        await productStep.findById('2');
    });

    test('Test list product id=3', async ({ productStep }) => {
        await productStep.findById('3');
    });

    test('Test list product id=4', async ({ productStep }) => {
        await productStep.findById('3');
    });
});