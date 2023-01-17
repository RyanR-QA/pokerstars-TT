import Common from "./utils/common.js";
import { Users } from "./utils/users.js";

class LoginPage extends Page {
  constructor(Page) {
    this.loginBtn = $("=Login");
    this.joinBtn = $("=Join");
    this.loginBox = $(".ReactModal__Content");
    this.usernameField = $("#userId");
    this.passwordField = $("#password");
  }

  async login() {
    await this.loginBtn.waitForExist();
    await this.loginBtn.click();
    await this.loginBox.waitForExist();
    await this.usernameField.sendKeys(Users.exampleuser1);
    await this.passwordField.sendKeys(getPassword(Users.exampleuser1));
    await this.btnSubmit.click();
  }

  open() {
    return super.open("login");
  }
}

export default new LoginPage();
