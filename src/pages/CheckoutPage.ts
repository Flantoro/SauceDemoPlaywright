import { expect, type Locator, type Page } from "@playwright/test";
import data from "../data/data";
import { CommonPage } from "./CommonPage";

export class CheckoutPage extends CommonPage {
  readonly firstNameInputField: Locator;
  readonly lastNameInputField: Locator;
  readonly zipCodeInputField: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly successfulMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameInputField = page.locator("[data-test='firstName']");
    this.lastNameInputField = page.locator("[data-test='lastName']");
    this.zipCodeInputField = page.locator("[data-test='postalCode']");
    this.continueButton = page.locator("[data-test='continue']");
    this.finishButton = page.locator("[data-test='finish']");
    this.successfulMessage = page.locator("[class='complete-header']");
  }

  async fillCheckoutForm(firstName: string, lastName: string, zipCode: string) {
    await this.firstNameInputField.fill(firstName);
    await this.lastNameInputField.fill(lastName);
    await this.zipCodeInputField.fill(zipCode);
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }

  async clickFinishButton() {
    await this.finishButton.click();
  }

  async checkOrderCompleted(page: Page) {
    await expect(page.url()).toContain(data.checkoutUrl);
    await expect(this.successfulMessage).toBeVisible();
  }
}