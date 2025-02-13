import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async getCartItemsCount() {
    const cartItems = await this.page.$$('.cart_item');
    return cartItems.length;
  }

  async checkout() {
    await this.page.click('[data-test="checkout"]');
  }
}