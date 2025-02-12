import { Page } from '@playwright/test';

export class LogoutPage {
  constructor(private page: Page) {}

  async logout() {
    await this.page.click('#react-burger-menu-btn');
    await this.page.click('#logout_sidebar_link');
  }
}