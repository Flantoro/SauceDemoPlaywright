import { expect, type Locator, type Page } from "@playwright/test";
import data from "../data/data";
import { CommonPage } from "./CommonPage";

export class CartPage extends CommonPage {
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;
  readonly yourCartTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.checkoutButton = page.locator("[data-test='checkout']");
    this.continueShoppingButton = page.locator(
      "[data-test='continue-shopping']"
    );
    this.yourCartTitle = page.locator("[class='title']");
  }

  async checkCartIsOpened(page: Page) {
    expect(page.url()).toContain(data.cartUrl);
    expect(this.yourCartTitle).toHaveText("Your Cart");
  }

  async clickCheckoutButton() {
    await this.checkoutButton.click();
  }

  async clickContinueShopButton() {
    await this.continueShoppingButton.click();
  }
}
