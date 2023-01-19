Feature: Pokerstars Sports Homepage

  Scenario: Verify betslip can be cleared by clicking the "Clear Bets" button
    Given the home page is displayed
    And the betslip is populated with at least one bet
    When the clicks on the "Clear Bets" button
    Then the betslip should immediately be cleared of all current bets and stakes