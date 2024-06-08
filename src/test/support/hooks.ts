import { After, Before, BeforeAll, setDefaultTimeout, Status } from '@cucumber/cucumber'
import {
  Browser,
  BrowserContext,
  LaunchOptions,
  Page,
  chromium
} from '@playwright/test'
import { toBoolean } from './utilities/to-boolean'
import { getEnv } from './env/env'
import { DateTime } from 'luxon'
import { logout } from './tasks/common-page-object-tasks'

setDefaultTimeout(60000)

let browser: Browser
let context: BrowserContext
export let page: Page

const headless: boolean = toBoolean({ value: process.env.HEADLESS as string })
let browserArgs: Array<string>

browserArgs = headless
  ? ['--ignore-certificate-errors', '--disable-gpu']
  : ['--ignore-certificate-errors']

const options: LaunchOptions = {
  headless: headless,
  args: browserArgs
}

BeforeAll(() => {
  getEnv()
})

Before(async () => {
  browser = await chromium.launch(options)
  context = await browser.newContext()
  await context.tracing.start({ screenshots: true, snapshots: true })
  page = await context.newPage()
})

After(async function ({ pickle, result }) {
  try {
    let img: Buffer

    if (result?.status == Status.FAILED) {
      img = await page.screenshot({
        path: `./results/screenshots/${pickle.name.replaceAll(
          ' ',
          '_'
        )}_${DateTime.now().toFormat('yyyy-MM-dd_hh-mm-ss')}.png`,
        fullPage: true
      })
      this.attach(img, 'image/png')
      await context.tracing.stop({
        path: `./results/traces/${pickle.name.replaceAll(
          ' ',
          '_'
        )}_${DateTime.now().toFormat('yyyy-MM-dd_hh-mm-ss')}-trace.zip`
      })
    } else {
      await context.tracing.stop()
    }
  } catch (error) {
    console.error(error)
  } finally {
    await logout({ page })
    await page.close()
    await context.close()
    await browser.close()
  }
})
