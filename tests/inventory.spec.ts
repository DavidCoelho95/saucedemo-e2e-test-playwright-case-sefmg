import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('InventoryPage', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.validateLoginWithSuccess();
  });

  test('Adicionar um item ao carrinho', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    // Adicionar o primeiro item ao carrinho
    await inventoryPage.addItemToCart(1);

    // Verificar se o item foi adicionado ao carrinho
    const cartBadge = await page.textContent('.shopping_cart_badge');
    expect(cartBadge).toBe('1');
  });

  test('Ir para o carrinho', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    // Adicionar um item ao carrinho
    await inventoryPage.addItemToCart(1);

    // Ir para o carrinho
    await inventoryPage.goToCart();

    // Verificar se a URL é a do carrinho
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
  });
});