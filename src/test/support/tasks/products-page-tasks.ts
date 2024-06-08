import { Page, selectors } from "@playwright/test";

selectors.setTestIdAttribute('id')

/**
 * A function to add a product to the cart
 * @param param0 { page: Page; product: string; }
 */
export async function addProductToCart({ page, product }: { page: Page; product: string; }): Promise<void> {
  const addToCartId = `add-to-cart-${product.toLowerCase().replaceAll(' ', '-')}`
  await page.getByTestId(addToCartId).click()
}