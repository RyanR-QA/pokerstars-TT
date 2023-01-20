# Frontend Technical Test

Welcome to Flutter International (Pokerstars) technical exercise for frontend test engineers!

The site we would like you to test can be found at: https://www.pokerstarssports.uk, you will need to be browsing from a UK IP address in order to access it. Please bear in mind that the site is highly dynamic and both the content and the layout may change over time. You will not need to register an account or log in to the website to complete this test.

## Task 1

_Write 10 or more Gherkin scenarios to cover behaviour on the home page._

**Feature**: Home page

1. **Scenario**: Verify the user can log in successfully<br/>
   **Given** the home page is displayed<br/>
   **And** the user clicks on "Login"<br/>
   **And** the login dialog box is displayed<br/>
   **When** the user types in their correct username and password<br/>
   **And** the user clicks on 'Login' inside the dialog box<br/>
   **Then** the user should be logged in successfully<br/>
   <br/>
2. **Scenario**: Verify the user cannot log in with invalid details<br/>
   **Given** the home page is displayed<br/>
   **And** the user clicks on "Login"<br/>
   **And** the login dialog box is displayed<br/>
   **When** the user types in an invalid username and password<br/>
   **And** the user clicks on the 'Submit' button inside the dialog box<br/>
   **Then** invalid login errors should be displayed<br/>
   <br/>
3. **Scenario**: Verify the "Popular" sidebar buttons work as intended<br/>
   **Given** the home page is displayed<br/>
   **When** the user clicks on <popular_button><br/>
   **Then** the user should be redirected to the <popular_button> page<br/>
   **And** the page header should include <popular_button><br/>
   **And** the user should be able to see a list of available betting options<br/>
   **Examples**:<br/>
   | popular_button | <br/>
   | Australian Open 2023 |<br/>
   | Football |<br/>
   | Horse Racing |<br/>
   | Tennis |<br/>
   | Basketball |<br/>
   | American Football |<br/>
   | Cricket |<br/>
   | Snooker |<br/>
   | Darts |<br/>
   | Motor Sport |<br/>
   | World Grand Prix |<br/>
   | Golf |<br/>
   | Mixed Martial Arts |<br/>
   | Rugby Union |<br/>
   | Rugby League |<br/>
   <br/>
4. **Scenario**: Verify the betslip is populated correctly when the user clicks on a boosted odds bet<br/>
   **Given** the home page is displayed<br/>
   **When** the user chooses a boosted bet<br/>
   **Then** the bet slip widget should be appropriately populated including the boosted odds<br/>
   <br/>
5. **Scenario**: Verify the betslip is populated correctly when the user clicks on a non-boosted odds bet<br/>
   **Given** the home page is displayed<br/>
   **When** the user chooses a non-boosted bet<br/>
   **Then** the bet slip widget should be appropriately populated<br/>
   <br/>
6. **Scenario**: Verify 'Odds Boost' stakes are correct inside the betslip<br/>
   **Given** the betslip is populated with a bet with boosted odds<br/>
   **When** the user enters £2 stake for the bet<br/>
   **Then** the 'Potential Returns' should be correct and reflect the boosted odds<br/>
   <br/>
7. **Scenario**: Verify stakes are correct inside the betslip for a standard bet<br/>
   **Given** the betslip is populated with a standard bet without boosted odds<br/>
   **When** the user enters £2 stake for the bet<br/>
   **Then** the 'Potential Returns' should be correct and reflect the correct odds<br/>
   <br/>
8. **Scenario**: Verify betslip can be cleared by clicking the "Clear Bets" button<br/>
   **Given** the betslip is populated with at least one bet<br/>
   **When** the clicks on the "Clear Bets" button<br/>
   **Then** the betslip should immediately be cleared of all current bets and stakes<br/>
   <br/>
9. **Scenario**: Ensure a link to the "Responsible Gaming" page is always available to the user from the footer<br/>
   **Given** the home page is displayed<br/>
   **When** the user clicks on the 'Responsible Gaming' link inside the footer<br/>
   **Then** the user should immediately be taken to the 'Responsible Gaming' page to learn about the potential negative effects of gambling<br/>
   <br/>
10. **Scenario**: Ensure a link to the "Responsible Gaming" page is always available to the user from the header<br/>
    **Given** the home page is displayed<br/>
    **When** the user clicks on the 'Responsible Gaming' link inside the header<br/>
    **Then** the user should immediately be taken to the 'Responsible Gaming' page to learn about the potential negative effects of gambling<br/>
    <br/>

## Task 2

_Create a simple javascript framework using WebdriverIO and Cucumber to automate a selection of the scenarios you have created. You should include at least 5 scenarios._

### Instructions

1. Clone this repo to your machine.
2. Open the project folder in your preferred IDE (Visual Studio Code is recommended as it uses vscode configurations as a test runner)
3. Open a terminal and run 'npm install' on the root of the project directory
4. You will need a .env file to run the invalid login test (I use .env files to store sensitive data securely). This will be supplied to you.
5. Insert the .env file into the root of the project and **ensure the file is called ".env" and NOT "env"**
6. There are two ways you can run the test:<br/>
   a. If using Visual Studio Code; go to 'Run and Debug', choose 'Run Tests' from the dropdown then click the play button<br/>
   b. If you are not using Visual Studio Code; run the following command in your terminal: npx wdio run ./wdio.conf.js<br/>
7. The test will run until all 5 specs have been completed. The specs will be reported in the terminal, however there is also a nicer-looking Allure report. There are two ways you can show the Allure report:<br/>
   a. If using Visual Studio Code; to to 'Run and Debug', choose 'Show Results' from the dropdown then click the play button<br/>
   b. If you are not using Visual Studio Code; run the following command in your terminal: allure serve<br/>
8. The test report should now be shown in a browser window.

### Additional Information

#### &emsp;What additional libraries have you used and why have you used them?

- dotenv<br/>
  This makes it so you can use a .env file to store secrets. I have done so but for incorrect credentials.

- rimraf<br/>
  Handles the deletion of the allure-results folder which bloats extremely easy.

- allure-reporter / allure-commandline<br/>
  Provides a nicer-looking report over the spec reporter along with analytics.

#### &emsp;Why use .env to store credentials?

.envs are an easy way to store sensitive information. When running tests in a CI like Jenkins, you can host the file somewhere (like S3) and use it for your tests. It's not the MOST secure way, but it is a much better practice than hard-coding credentials.
