Feature: Pokerstars Sports Homepage

  Scenario Outline: As a user, I am unable to log in using invalid details

    Given the home page is displayed
    And the user clicks on "Login"
    And the login dialog box is displayed
    When the user types in an invalid username and password
    And the user clicks on 'Login' inside the dialog box
    Then errors should be displayed
