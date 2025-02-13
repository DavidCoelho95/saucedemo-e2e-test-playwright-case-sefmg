import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addItemToCart(itemIndex: number) {
    await this.page.click(`.inventory_item:nth-child(${itemIndex}) .btn_primary`);
  }

  async goToCart() {
    await this.page.click('[data-test="shopping-cart-link"]');
  }
}