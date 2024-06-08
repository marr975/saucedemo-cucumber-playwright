import { Page } from "@playwright/test";
import { YourInformationPage } from "../page-objects/your-information-page";

export async function enterUserInformation({ page, firstName, lastName, postcode }: { page: Page; firstName: string; lastName: string; postcode: string; }): Promise<void> {
  const yourInformationPage = new YourInformationPage(page)
  await yourInformationPage.firstName.fill(firstName)
  await yourInformationPage.lastName.fill(lastName)
  await yourInformationPage.postcode.fill(postcode)
}

export async function clickCancel({ page }: { page: Page; }): Promise<void> {
  const yourInformationPage = new YourInformationPage(page)
  await yourInformationPage.cancel.click()
}

export async function clickContinue({ page }: { page: Page; }): Promise<void> {
  const yourInformationPage = new YourInformationPage(page)
  await yourInformationPage.continue.click()
}