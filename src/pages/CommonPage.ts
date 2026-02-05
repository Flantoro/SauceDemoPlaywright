import {Page, expect, type Locator} from "@playwright/test";

export class CommonPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto("");
    }
}
