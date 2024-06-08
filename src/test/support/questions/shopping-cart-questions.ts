import { Page, expect } from "@playwright/test";

/**
 * A function to check if an item is in the cart
 * @param param0 { page: Page; itemName: string; }
 */
export async function isItemInCart({ page, itemName }: { page: Page; itemName: string; }): Promise<void> {
  expect(page.getByText(itemName)).toBeVisible()
}