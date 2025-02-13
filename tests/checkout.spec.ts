import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";

test.describe("CheckoutPage", () => {
  test("Completar o checkout com sucesso", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
    await loginPage.validateLoginWithSuccess();

    await inventoryPage.addItemToCart(1);
    await inventoryPage.addItemToCart(2);

    await inventoryPage.goToCart();

    const cartItemsCount = await cartPage.getCartItemsCount();
    expect(cartItemsCount).toBe(2);

    await cartPage.checkout();

    await checkoutPage.fillInformation("Paulo", "Coelho", "12345");
    await checkoutPage.completeCheckout();

    const completeHeader = await checkoutPage.getCompleteHeader();
    expect(completeHeader).toBe("Thank you for your order!");
  });

  test("Completar o checkout e voltar para home clicando no botão Back Home", async ({page,}) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
    await loginPage.validateLoginWithSuccess();

    await inventoryPage.addItemToCart(1);
    await inventoryPage.addItemToCart(2);

    await inventoryPage.goToCart();

    const cartItemsCount = await cartPage.getCartItemsCount();
    expect(cartItemsCount).toBe(2);

    await cartPage.checkout();

    await checkoutPage.fillInformation("Case", "Teste", "12345");
    await checkoutPage.completeCheckout();

    const completeHeader = await checkoutPage.getCompleteHeader();
    expect(completeHeader).toBe("Thank you for your order!");

    // Clicar no botão "Back Home"
    await checkoutPage.clickBackHome();

    // Verificar se a URL é a da página inicial
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });
});
