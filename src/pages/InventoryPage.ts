import { expect, type Locator, type Page } from "@playwright/test";
import data from "../data/data";
import { CommonPage } from "./CommonPage";

export class InventoryPage extends CommonPage {
  readonly addBackpack: Locator;
  readonly addBikeLight: Locator;
  readonly addTshirt: Locator;
  readonly addFleeceJacket: Locator;
  readonly addOnesie: Locator;
  readonly addRedTshirt: Locator;
  readonly cartButton: Locator;

  constructor(page: Page) {
    super(page);
    this.addBackpack = page.locator(
      "[data-test='add-to-cart-sauce-labs-backpack']"
    );
    this.addBikeLight = page.locator(
      "[data-test='add-to-cart-sauce-labs-bike-light']"
    );
    this.addTshirt = page.locator(
      "[data-test='add-to-cart-sauce-labs-bolt-t-shirt']"
    );
    this.addFleeceJacket = page.locator(
      "[data-test='add-to-cart-sauce-labs-fleece-jacket']"
    );
    this.addOnesie = page.locator(
      "[data-test='add-to-cart-sauce-labs-onesie']"
    );
    this.addRedTshirt = page.locator(
      "[data-test='add-to-cart-test.allthethings()-t-shirt-(red)']"
    );
    this.cartButton = page.locator("[class='shopping_cart_link']");
  }

  async checkPageIsOpened(page : Page) {
    expect(page.url()).toContain(data.inventoryUrl);
    expect(page.locator("[class='title']")).toHaveText("Products");
  }

  async addBackpackToCart() {
    await this.addBackpack.click();
  }

  async addBikeLightToCart() {
    await this.addBikeLight.click();
  }

  async addTsirtToCart() {
    await this.addTshirt.click();
  }

  async addFleeceJacketToCart() {
    await this.addFleeceJacket.click();
  }

  async addOnesieToCart() {
    await this.addOnesie.click();
  }

  async addRedTshirtToCart() {
    await this.addRedTshirt.click();
  }

  async clickOnTheCart() {
    await this.cartButton.click();
  }
}
