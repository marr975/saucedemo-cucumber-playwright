import { Given, Then, When } from '@cucumber/cucumber'
import { page } from '../support/hooks'
import { clickCheckout } from '../support/tasks/cart-page-tasks'
import {
  clickContinue,
  enterUserInformation
} from '../support/tasks/your-information-page-tasks'
import { clickFinish } from '../support/tasks/checkout-overview-page-tasks'
import { isOrderComplete } from '../support/questions/checkout-complete-page-questions'

Given('the user opens the checkout', async function () {
  await clickCheckout({ page })
})

Given('the user enters their information', async function () {
  await enterUserInformation({
    page,
    firstName: 'Test',
    lastName: 'Test',
    postcode: '12345'
  })
  await clickContinue({ page })
})

When('the user finishes the transaction', async function () {
  await clickFinish({ page })
})

Then('customer order should be confirmed', async function () {
  await isOrderComplete({ page })
})
