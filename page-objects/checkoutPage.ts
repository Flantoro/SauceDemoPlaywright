import { expect, type Locator, type Page } from "@playwright/test";
import Credentials from "../helpers/Credentials.json";

export class checkoutPage {
  readonly page: Page;
  readonly firstNameInputField: Locator;
  readonly lastNameInputField: Locator;
  readonly zipCodeInputField: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly successfulMessage: Locator;

  constructor(page: Page) {
    this.firstNameInputField = page.locator("[data-test='firstName']");
    this.lastNameInputField = page.locator("[data-test='lastName']");
    this.zipCodeInputField = page.locator("[data-test='postalCode']");
    this.continueButton = page.locator("[data-test='continue']");
    this.finishButton = page.locator("[data-test='finish']");
    this.successfulMessage = page.locator("[class='complete-header']");
  }

  async fillCheckputFormFileds(firstName, lastName, zipCode) {
    await this.firstNameInputField.fill(firstName);
    await this.lastNameInputField.fill(lastName);
    await this.zipCodeInputField.fill(zipCode);
  }

  async clickOnContinueButton() {
    await this.continueButton.click();
  }

  async clickOnTheFinishButton() {
    await this.finishButton.click();
  }

  async checkIfOrderCompleted(page) {
    await expect(page.url()).toBe(Credentials.checkoutUrl);
    await expect(this.successfulMessage).toBeVisible();
  }
}
