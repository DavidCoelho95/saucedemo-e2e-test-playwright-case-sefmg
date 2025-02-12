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
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }

  async logout() {  
    await this.page.click('#react-burger-menu-btn');
    await this.page.click('#logout_sidebar_link');
  } 


  async validateLoginWithSuccess() {
    // Verificar se o login foi bem-sucedido
    await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html");
  
    // Verificar se o texto "Swag Labs" está presente no topo
    const headerText = await this.page.textContent(".app_logo");
    expect(headerText).toBe("Swag Labs");
  }

  async getErrorMessage() {
    return this.page.textContent('.error-message-container');
  }
}