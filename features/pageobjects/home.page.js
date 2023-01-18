import common from "./utils/common.js";
import { Users } from "./utils/users.js";
import { open, Page } from "webdriverio";

class HomePage extends Page {
  constructor() {
    /**
     * Selectors for home page buttons are set up in this way so that if IDs are introduced, there is minimal effort needed to
     * change the selectors we already have. It's best to always have a centralized point where maintainence can be made, instead
     * of hunting down selectors across multiple scripts.
     *
     * Also, it allows a non-technical user to run a Gherkin step using only the text shown on the website, rather a more technical
     * selector var name.
     */
    this.buttons = {
      login: $("=Login"),
      join: $("=Join"),
      home: $('[data-testid="sports-icon"][href="/sports/"]'),
      submit: $('[type="submit"]'),
    };

    this.reactModal = $(".ReactModal__Content");
    // this.usernameField = $("#userId");
    // this.passwordField = $("#password");
  }

  async login() {
    await this.loginBtn.waitForExist();
    await this.loginBtn.click();
    await this.loginBox.waitForExist();
    await this.usernameField.sendKeys(Users.exampleuser1);
    await this.passwordField.sendKeys(
      await common.getPassword(Users.exampleuser1)
    );
    await this.btnSubmit.click();
  }

  open() {
    return open("home");
  }
}

export default new HomePage();
