import { Given, When, Then } from "@wdio/cucumber-framework";
import HomePage from "../pageobjects/home.page.js";
import Common from "../pageobjects/utils/common.js";
import { Users } from "../pageobjects/utils/users.js";

const common = new Common();
/**
 * Set important pre-run intiialization settings here
 */
await common.init();

const pages = {
  home: HomePage,
};

Given(/^the ([^"]+) page is displayed$/, async (page) => {
  page = page.toLowerCase();
  console.log(page);
  await pages[page].open();
  await pages[page].cookieAccept.waitForExist();
  await pages[page].cookieAccept.click();
});

When(/^the user clicks on "([^"]+)"$/, async (button) => {
  button = button.toLowerCase();
  console.log(button);
  await pages.home.buttons[button].waitForExist();
  await pages.home.buttons[button].click();
});

When(/^the "([^"]+)" dialog box is displayed$/, async (modalPage) => {
  console.log(modalPage);

  await common.isModalDisplayed(modalPage);
});

When(/^the user types in an invalid username and password$/, async () => {
  await pages.home.usernameField.waitForExist();
  await pages.home.usernameField.setValue(Users.exampleuser1);
  await pages.home.passwordField.waitForExist();
  await pages.home.passwordField.setValue(
    await common.getPassword(Users.exampleuser1)
  );
});

When(
  /^the user clicks on the "([^"]+)" button inside the dialog box$/,
  async (button) => {
    button = button.toLowerCase();
    console.log(button);

    await pages.home.buttons[button].waitForExist();
    await pages.home.buttons[button].click();
  }
);

Then(/^invalid login errors should be displayed$/, async () => {
  await expect(pages.home.loginErrorText).toHaveText(
    "The username and password combination is not recognized. Please try again."
  );
});

Then(/^the user should be redirected to the "([^"]+)" page$/, async (page) => {
  await expect(browser).toHaveUrlContaining(page.toLowerCase());
});
