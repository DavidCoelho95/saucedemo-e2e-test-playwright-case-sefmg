import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test.describe('CartPage', () => {
  test('Verificar itens no carrinho', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    

    await inventoryPage.addItemToCart(1);
    await inventoryPage.addItemToCart(2);

    await inventoryPage.goToCart();

    const cartItemsCount = await cartPage.getCartItemsCount();
    expect(cartItemsCount).toBe(2);
  });
});