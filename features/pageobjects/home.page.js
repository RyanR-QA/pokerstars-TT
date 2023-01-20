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

  get secondBoostedOddsResult() {
    return $(
      ":nth-child(2) > div > ._5f15220._c2e4e6d > span > span > span > strong"
    );
  }

  get secondOddsResult() {
    return $(
      ":nth-child(2) > ._3c5e501 > :nth-child(3) > span > span > span > strong"
    );
  }

  get secondOddsText() {
    return $(":nth-child(2) > div > ._628c1ca > span");
  }

  get secondBoostedOddsText() {
    return $(":nth-child(2) > div > ._5349d4d");
  }

  get betSlipTitle() {
    return $("._c1eb137");
  }

  get clearBetsBtn() {
    return $("[aria-label='Clear Bets']");
  }

  get betSlipEmpty() {
    return $("._87254ca");
  }

  get secondHorseRace() {
    return $("._9bd8994 > div > nav > div > ul > :nth-child(2) > ._1e9948a");
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

  /**
   * Clicks to the 'accept cookies' button at the start of the test run
   */
  async CookieAccept() {
    await this.cookieAccept.waitForExist();
    await this.cookieAccept.click();
  }

  open() {
    return super.open("home");
  }
}

export default new HomePage();
