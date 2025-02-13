import { Page } from '@playwright/test';

export class LogoutPage {
  constructor(private page: Page) {}

  async logout() {
    await this.page.click('[id="react-burger-menu-btn"]');
    await this.page.click('[data-test="logout-sidebar-link"]');
  }
}