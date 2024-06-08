import { Page } from "@playwright/test";
import { LoginPage } from "../page-objects/login-page";

/**
 * A function to open the Sauce Demo website
 * @param param0 { page: Page; }
 */
export async function openSauceDemo({ page }: { page: Page; }): Promise<void> {
  await page.goto(process.env.URL as string)
  await page.waitForLoadState('load')
}