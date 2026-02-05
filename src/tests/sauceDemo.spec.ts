import { expect} from "@playwright/test";
import test from "../fixtures/baseTest";
import { data } from "../data/data";

test("Purchase path", async ({ page, loginPage, inventoryPage, cartPage, checkoutPage }) => {
  await test.step("Login as a standart user", async () => {
    await loginPage.goto();
    await loginPage.standartUserLogin();
    await inventoryPage.checkPageIsOpened(page);
  });

  await test.step("Add items to the shopping cart and open shopping cart", async () => {
    await inventoryPage.addBackpackToCart();
    await inventoryPage.clickOnTheCart();

    await cartPage.checkCartIsOpened(page);
    await cartPage.clickContinueShopButton();

    await inventoryPage.checkPageIsOpened(page);
    await inventoryPage.addBikeLightToCart();
    await inventoryPage.clickOnTheCart();
  });

  await test.step("Checkout with a valid credentials", async () => {
    await cartPage.clickCheckoutButton();

    await checkoutPage.fillCheckoutForm(
      data.firstName,
      data.lastName,
      data.zipCode
    );
    await checkoutPage.clickContinueButton();
    await checkoutPage.clickFinishButton();

    await checkoutPage.checkOrderCompleted(page);
  });
});

test("Attempt for locked user login should not be successful", async ({
  page, loginPage
}) => {
  await test.step("Login as a locked user", async () => {
    await loginPage.goto();
    await loginPage.lockedUserLogin();
    expect(page.url()).not.toContain(data.inventoryUrl);
  });
});