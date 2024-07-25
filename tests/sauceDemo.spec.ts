import { test, expect, chromium } from "@playwright/test";
import { loginPage } from "../page-objects/loginPage";
import { inventoryPage } from "../page-objects/inventoryPage";
import { cartPage } from "../page-objects/cartPage";
import { checkoutPage } from "../page-objects/checkoutPage";
import Credentials from "../helpers/Credentials.json";

let login: loginPage;
let inventory: inventoryPage;
let cart: cartPage;
let checkout: checkoutPage;

test.beforeEach(async ({ page }) => {
  login = new loginPage(page);
  inventory = new inventoryPage(page);
  cart = new cartPage(page);
  checkout = new checkoutPage(page);
});

test("Purchase path", async ({ page }) => {
  await test.step("Login as a standart user", async () => {
    await login.goto();
    await login.standartUserLogin();
    await inventory.checkIfThePageIsOpened(page);
  });

  await test.step("Add items to the shopping cart and open shopping cart", async () => {
    await inventory.addBackpackToCart();
    await inventory.clickOnTheCart();

    await cart.checkIfCartIsOpened(page);
    await cart.clickOnTheContinueShopButton();

    await inventory.checkIfThePageIsOpened(page);
    await inventory.addBikeLightToCart();
    await inventory.clickOnTheCart();
  });

  await test.step("Checkout with a valid credentials", async () => {
    await cart.clickOnTheCheckoutButton();

    await checkout.fillCheckputFormFileds(
      Credentials.firstName,
      Credentials.lastName,
      Credentials.zipCode
    );
    await checkout.clickOnContinueButton();
    await checkout.clickOnTheFinishButton();

    await checkout.checkIfOrderCompleted(page);
  });
});

test("Attempt for locked user login should not be successful", async ({
  page,
}) => {
  await test.step("Login as a locked user", async () => {
    await login.goto();
    await login.lockedUserLogin();
    expect(page.url()).toEqual(Credentials.inventoryUrl);
  });
});
