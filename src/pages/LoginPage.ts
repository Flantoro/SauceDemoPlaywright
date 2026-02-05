import { expect, type Locator, type Page } from "@playwright/test";
import credentials from "../data/credentials";
import { CommonPage } from "./CommonPage";

export class LoginPage extends CommonPage {
  readonly usernameInputField: Locator;
  readonly passwordInputField: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) { 
    super(page);
    this.usernameInputField = page.locator("[data-test='username']");
    this.passwordInputField = page.locator("[data-test='password']");
    this.loginButton = page.locator("[id='login-button']");
  }

  async standartUserLogin() {
    await this.usernameInputField.fill(credentials.standartUserLogin);
    await this.passwordInputField.fill(credentials.password);
    await this.loginButton.click();
  }

  async lockedUserLogin() {
    await this.usernameInputField.fill(credentials.lockedUserLogin);
    await this.passwordInputField.fill(credentials.password);
    await this.loginButton.click();
  }
}
