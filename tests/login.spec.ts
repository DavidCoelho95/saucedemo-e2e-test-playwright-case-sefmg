import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("LoginPage", () => {
  test("Login com sucesso", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
    await loginPage.validateLoginWithSuccess();
  });

  test("Falha ao fazer login com usuário bloqueado", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login("locked_out_user", "secret_sauce");

    // Verificar se a mensagem de erro é exibida
    expect(await loginPage.getErrorMessage()).toContain(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
