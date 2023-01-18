import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";

const pages = {
  home: HomePage,
};

Given(/^the (\w+) page is displayed$/, async (page) => {
  await pages[page].open();
});

And(/^the user clicks on "(\w+)"$/, async (button) => {
  await HomePage.buttons[button].waitForExist();
  await HomePage.buttons[button].click();
});

And(/^the user clicks on "(\w+)" inside the dialog box$/, async (button) => {
  await HomePage.buttons[button].waitForExist();
  await HomePage.buttons[button].click();
});

And(/^the "(\w+)" dialog box is displayed$/, async (header) => {
  await modalPage.isModalDisplayed(header);
});

When(/^the user types in an invalid username and password$/, async () => {
  await HomePage.usernameField.sendKeys(Users.exampleuser1);
  await HomePage.passwordField.sendKeys(getPassword(Users.exampleuser1));
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
