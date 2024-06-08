import { Page } from "@playwright/test";
import { LoginPage } from "../page-objects/login-page";

/**
 * A function to log into Sauce Labs Demo site using username and password
 * @param param0 { username: string; password: string; }
 */
export async function userLogin({ page, username, password }: { page: Page, username: string; password: string; }): Promise<void> {
  const loginPage = new LoginPage(page)
  await loginPage.login.isVisible()
  await loginPage.username.fill(username)
  await loginPage.password.fill(password)
  await loginPage.login.click()
}