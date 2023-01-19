import common from "./utils/common.js";
import { Users } from "./utils/users.js";

class HomePage extends common {
  get cookieAccept() {
    return $("#onetrust-accept-btn-handler");
  }

  get reactModal() {
    return $(".ReactModal__Content");
  }
  get usernameField() {
    return $("#userId");
  }

  get passwordField() {
    return $("#password");
  }

  get loginErrorText() {
    return $("._7764ed8");
  }

  /**
   * Selectors for home page buttons are set up in this way so that if IDs are introduced, there is minimal effort needed to
   * change the selectors we already have. It's best to always have a centralized point where maintainence can be made, instead
   * of hunting down selectors across multiple scripts.
   *
   * Also, it allows a non-technical user to run a Gherkin step using only the text shown on the website, rather a more technical
   * selector var name.
   */
  buttons = {
    login: $("._e637394._0a2fdd9"),
    join: $("._18f4de1._0a2fdd9"),
    home: $('[data-testid="sports-icon"][href="/sports/"]'),
    submit: $("._18f4de1._f7a0730"),
    "australian open 2023": $("a=Australian Open 2023"),
    football: $("a=Football"),
    "horse racing": $("a=Horse Racing"),
    tennis: $("a=Tennis"),
    basketball: $("a=Basketball"),
    "american football": $("a=American Football"),
    cricket: $("a=Cricket"),
    snooker: $("a=Snooker"),
    darts: $("a=Darts"),
    "motor sport": $("a=Motor Sport"),
    "world grand prix": $("a=World Grand Prix"),
    golf: $("a=Golf"),
    "mixed martial arts": $("a=Mixed Martial Arts"),
    "rugby union": $("a=Rugby Union"),
    "rugby league": $("a=Rugby League"),
  };

  async login() {
    await this.buttons["login"].waitForExist();
    await this.buttons["login"].click();
    await this.loginBox.waitForExist();
    await this.usernameField.sendKeys(Users.exampleuser1);
    await this.passwordField.sendKeys(
      await common.getPassword(Users.exampleuser1)
    );
    await this.btnSubmit.click();
  }

  open() {
    return super.open("home");
  }
}

export default new HomePage();
