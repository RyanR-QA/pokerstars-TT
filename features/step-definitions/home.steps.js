import { Given, When, Then } from "@wdio/cucumber-framework";
import HomePage from "../pageobjects/home.page.js";
import Common from "../pageobjects/utils/common.js";
import { Users } from "../pageobjects/utils/users.js";
import { Before } from "@wdio/cucumber-framework";

const common = new Common();
let cookieAccepted = false;
/**
 * Set important pre-run intiialization settings here
 */
await common.init();

const pages = {
  home: HomePage,
};

Before(async () => {
  if (cookieAccepted == false) {
    pages.home.CookieAccept();
    cookieAccepted = true;
  }
});

Given(/^the ([^"]+) page is displayed$/, async (page) => {
  page = page.toLowerCase();
  await pages[page].open();
});

Given(/^the betslip is populated with at least one bet$/, async () => {
  await pages.home.secondBoostedOddsResult.waitForExist();
  await pages.home.secondBoostedOddsResult.click();
  await pages.home.secondOddsResult.waitForExist();
  await pages.home.secondOddsResult.click();
});

When(/^the clicks on the "Clear Bets" button$/, async () => {
  // console.log("TEXT: " + secondBoostedOddsText);
  await pages.home.clearBetsBtn.waitForExist();
  await pages.home.clearBetsBtn.click();
});

When(/^the user chooses a boosted bet$/, async () => {
  // console.log("TEXT: " + secondBoostedOddsText);
  await pages.home.secondBoostedOddsResult.waitForExist();
  await pages.home.secondBoostedOddsResult.click();
});

When(/^the user chooses a non-boosted bet$/, async () => {
  await pages.home.secondHorseRace.waitForExist();
  await pages.home.secondHorseRace.click();
  await pages.home.secondOddsResult.waitForExist();
  await pages.home.secondOddsResult.click();
});

Then(
  /^the bet slip widget should be appropriately populated including the boosted odds$/,
  async () => {
    let boostedOddsText = await pages.home.secondBoostedOddsText.getText();
    await pages.home.secondBetSlipBetText.waitForExist();
    let betSlipBetText = await pages.home.secondBetSlipBetText.getText();
    await expect(betSlipBetText).toEqual(boostedOddsText);
  }
);

When(/^the user clicks on "([^"]+)"$/, async (button) => {
  button = button.toLowerCase();
  await pages.home.buttons[button].waitForExist();
  await pages.home.buttons[button].click();
});

When(/^the "([^"]+)" dialog box is displayed$/, async (modalPage) => {
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
  let match = String(await browser.getUrl()).replace(/-/g, " ");
  await expect(match).toContain(page.toLowerCase());
});

Then(/^the page header should include "([^"]+)"$/, async (text) => {
  let header = $(`h1=${text}`);
  await expect(header).toExist();
});

Then(
  /^the betslip should immediately be cleared of all current bets and stakes$/,
  async () => {
    let betSlipText = await pages.home.betSlipEmpty.getText();
    await expect(betSlipText).toEqual("Your bet slip is empty");
  }
);

Then(/^the bet slip widget should be appropriately populated$/, async () => {
  let oddsText = await pages.home.secondOddsText.getText();
  console.log("1:" + oddsText);
  // Since we are using the horse racing odds for this example,
  // we will need to use regex to navigate the bet offer text as it contains text that doesn't show on the betslip
  let match = oddsText.match(/[a-zA-Z](.*)/);
  let extractedText = match[0];
  console.log("2:" + extractedText);

  await pages.home.secondBetSlipBetText.waitForExist();
  let betSlipBetText = await pages.home.secondBetSlipBetText.getText();
  await expect(betSlipBetText).toEqual(extractedText);
});
