import { Page } from "@playwright/test";
import { CommonPageObjects } from "../page-objects/common-page-objects";

/**
 * A function to log out of the Sauce Labs Demo site
 * @param param0 { page: Page; }
 */
export async function logout({ page }: { page: Page; }): Promise<void> {
  const commonPageObjects = new CommonPageObjects(page)
  await commonPageObjects.menu.click()
  await commonPageObjects.logout.click()
}

/**
 * A function to reset the state of the Sauce Demo web app
 * @param param0 { page: Page; }
 */
export async function resetAppState({ page }: { page: Page; }): Promise<void> {
  const commonPageObjects = new CommonPageObjects(page)
  await commonPageObjects.menu.click()
  await commonPageObjects.resetAppState.click()
}

/**
 * A function to open the shoppiong cart
 * @param param0 { page: Page; }
 */
export async function openCart({ page }: { page: Page; }): Promise<void> {
  const commonPageObjects = new CommonPageObjects(page)
  await commonPageObjects.cart.click()
}