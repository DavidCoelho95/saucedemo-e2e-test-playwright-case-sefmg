import { expect, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.fill('[data-test="username"]', username);
    await this.page.fill('[data-test="password"]', password);
    await this.page.click('[data-test="login-button"]');
  }

  async logout() {  
    await this.page.click('[data-test="react-burger-menu-btn"]');
    await this.page.click('[data-test="logout-sidebar-link"]');
  } 

  async validateLoginWithSuccess() {
    // Verificar se o login foi bem-sucedido
    await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html");
  
    // Verificar se o texto "Swag Labs" está presente no topo
    const headerText = await this.page.textContent('.app_logo');
    expect(headerText).toBe("Swag Labs");
  }

  async getErrorMessage() {
    return this.page.textContent('.error-message-container');
  }
}