import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('[data-test="firstName"]', firstName);
    await this.page.fill('[data-test="lastName"]', lastName);
    await this.page.fill('[data-test="postalCode"]', postalCode);
  }

  async completeCheckout() {
    await this.page.click('[data-test="continue"]');
    await this.page.click('[data-test="finish"]');
  }

  async getCompleteHeader() {
    return this.page.textContent('[data-test="complete-header"]');
  }
  
  async clickBackHome() {
    await this.page.click('[data-test="back-to-products"]');
  }
}