Feature: Pokerstars Sports Homepage

  Scenario: Verify the "Popular" sidebar buttons work as intended
    Given the home page is displayed
    When the user clicks on "<popular_button>"
    Then the user should be redirected to the "<popular_button>" page
    And the page header should include "<popular_button>"

    Examples:
      | popular_button       |
      | Australian Open 2023 |
      | Football             |
      | Horse Racing         |
      | Tennis               |
      | Basketball           |
      | American Football    |
      | Cricket              |
      | Snooker              |
      | Darts                |
      | Motor Sport          |
      | World Grand Prix     |
      | Golf                 |
      | Mixed Martial Arts   |
      | Rugby Union          |
      | Rugby League         |