/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */

export default class Common {
  async getPassword(username) {
    switch (username) {
      case process.env.USERNAME1:
        return process.env.PASSWORD1;

      case process.env.USERNAME2:
        return process.env.PASSWORD2;

      case process.env.USERNAME3:
        return process.env.PASSWORD3;

      default:
        return new Error("ERROR - User not selected!");
    }
  }

  async init() {
    browser.maximizeWindow();
  }

  async isModalDisplayed(header) {
    await $(".ReactModal__Content > header").waitForExist();
    await expect($(".ReactModal__Content > header")).toHaveText(header);
  }

  open(path) {
    return browser.url(`${process.env.BASEURL}${path}`);
  }
}
