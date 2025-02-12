import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', postalCode);
  }

  async completeCheckout() {
    await this.page.click('#continue');
    await this.page.click('#finish');
  }

  async getCompleteHeader() {
    return this.page.textContent('.complete-header');
  }
  
  async clickBackHome() {
    await this.page.click('#back-to-products');
  }
}