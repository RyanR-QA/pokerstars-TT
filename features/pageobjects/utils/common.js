/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Common {
  async getPassword(username) {
    switch (key) {
      case process.env.USERNAME1:
        return process.env.PASSWORD1;
        break;

      case process.env.USERNAME2:
        return process.env.PASSWORD2;
        break;

      case process.env.USERNAME3:
        return process.env.PASSWORD3;
        break;

      default:
        return new Error("ERROR - User not selected!");
        break;
    }
  }
}
