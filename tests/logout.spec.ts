import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LogoutPage } from '../pages/LogoutPage';

test.describe('LogoutPage', () => {
  test('Logout com sucesso', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const logoutPage = new LogoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.validateLoginWithSuccess();

    await logoutPage.logout();

    // Verificar se a URL é a da página de login
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });
});