import { Page } from "@playwright/test";
import { CheckoutOverviewPage } from "../page-objects/checkout-overview-page";

export async function clickFinish({ page }: { page: Page; }): Promise<void> {
  const checkoutOverviewPage = new CheckoutOverviewPage(page)
  checkoutOverviewPage.finish.click()
}

export async function clickCancel({ page }: { page: Page; }): Promise<void> {
  const checkoutOverviewPage = new CheckoutOverviewPage(page)
  checkoutOverviewPage.cancel.click()
}