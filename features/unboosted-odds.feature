Feature: Pokerstars Sports Homepage

  Scenario: Verify the betslip is populated correctly when the user clicks on a boosted odds bet
    Given the home page is displayed
    When the user chooses a non-boosted bet
    Then the bet slip widget should be appropriately populated