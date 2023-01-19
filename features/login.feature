Feature: Pokerstars Sports Homepage

  Scenario: As a user, I am unable to log in using invalid details

    Given the home page is displayed
    And the user clicks on "Login"
    And the "Login" dialog box is displayed
    When the user types in an invalid username and password
    And the user clicks on the "Submit" button inside the dialog box
    Then invalid login errors should be displayed
