import { Given, Then, When } from '@cucumber/cucumber'
import { page } from '../support/hooks'
import { userLogin } from '../support/tasks/login-page-tasks'
import { openSauceDemo } from '../support/tasks/open-sauce-demo'
import { addProductToCart } from '../support/tasks/products-page-tasks'
import { openCart } from '../support/tasks/common-page-object-tasks'
import { isItemInCart } from '../support/questions/shopping-cart-questions'

Given('a {string} has opened the Product page', async function (user: string) {
  await openSauceDemo({ page })
  await userLogin({
    page,
    username: user.toLowerCase().replaceAll(' ', '_'),
    password: process.env.PASSWORD as string
  })
})

Given(
  'the user clicks the {string} Add to Cart button',
  async function (product: string) {
    await addProductToCart({ page, product: product })
  }
)

When('the user opens the cart', async function () {
  await openCart({ page })
})

Then('the {string} should be added to the cart', async function (item: string) {
  // Write code here that turns the phrase above into concrete actions
  // await getNumberOfItemsInTheCart({ page }).then((count) => {
  //   expect(count).toEqual('1')
  // })
  await isItemInCart({ page, itemName: item })
})
