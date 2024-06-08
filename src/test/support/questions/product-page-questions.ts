import { Page } from '@playwright/test'

/**
 * A function to get the number of items in the cart
 * @param param0 { page: Page }
 * @returns Promise<string | null>
 */
export async function getNumberOfItemsInTheCart({
  page
}: {
  page: Page
}): Promise<string | null> {
  return await page
    .locator('span[class="shopping_cart_badge"]')
    .textContent()
}
