import { expect, type Locator, type Page } from "@playwright/test";
import Credentials from "../helpers/Credentials.json";

export class loginPage {
  readonly page: Page;
  readonly usernameInputField: Locator;
  readonly passwordInputField: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInputField = page.locator("[data-test='username']");
    this.passwordInputField = page.locator("[data-test='password']");
    this.loginButton = page.locator("[id='login-button']");
  }

  async goto() {
    await this.page.goto("");
  }

  async standartUserLogin() {
    await this.usernameInputField.fill(Credentials.standartUserLogin);
    await this.passwordInputField.fill(Credentials.password);
    await this.loginButton.click();
  }

  async lockedUserLogin() {
    await this.usernameInputField.fill(Credentials.lockedUserLogin);
    await this.passwordInputField.fill(Credentials.password);
    await this.loginButton.click();
  }
}
