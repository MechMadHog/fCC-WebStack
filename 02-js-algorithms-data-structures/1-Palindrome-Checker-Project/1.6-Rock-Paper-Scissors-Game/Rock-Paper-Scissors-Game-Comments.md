# Rock-Paper-Scissors --- Comments

**Project:** Rock-Paper-Scissors\
**Goal:** Build a simple best-of-5 (first to 3) click-to-play game with
a visible score, round results, and a reset flow.

## What I built

-   Three buttons for the player: Rock, Paper, Scissors.
-   A computer pick generated at random each round.
-   Live score display for player and computer, plus a round result
    message.
-   Win condition at 3 points, with a winner banner.
-   Reset button that appears when the match ends.

## What I learned

-   Writing small, single-purpose functions keeps things readable:
    -   `getRandomComputerResult()` chooses from an array using
        `Math.random()` and `Math.floor()`.
    -   `hasPlayerWonTheRound(player, computer)` centralizes the win
        logic in one place.
    -   `showResults(userOption)` updates state and the UI for each
        click.
    -   `resetGame()` clears state and restores the UI.
-   Managing game state with simple variables (`playerScore`,
    `computerScore`) is enough for this scope.
-   DOM work basics:
    -   Selecting elements with `getElementById` and `querySelector`.
    -   Updating text with `.innerText`.
    -   Toggling visibility by switching `style.display` between `block`
        and `none`.
-   Cleaner strings with template literals for result messages.
-   Flow control:
    -   Early return of round messages.
    -   A single win condition check right after updating scores.
-   Event handling:
    -   `addEventListener("click", ...)` on each option button to pass
        the player's choice.
    -   One listener on the reset button to restore everything.

## Reasoning and structure

-   Keeping the win logic in `hasPlayerWonTheRound` avoids duplicating
    conditions.
-   A dedicated `showResults` acts like the controller for one turn, so
    the click handlers stay tiny.
-   UI state lives in CSS when possible, and JS only flips a couple of
    display properties.

## Edge cases I considered

-   Tie rounds show a specific message and do not change the score.
-   The match stops at 3 for either side and hides the option buttons to
    prevent extra clicks.
-   Reset clears scores, messages, and re-enables the options.

## Possible improvements later

-   Best-of selector (first to 1, 3, 5).
-   Keyboard controls (R, P, S).
-   Simple animations or a short delay before showing results.
-   A running history list for previous rounds.
-   Accessibility polish: focus states, ARIA live regions for messages.

## Quick playtest checklist

-   Click each option and confirm the round message matches the outcome.
-   Force a tie a few times and verify scores do not change.
-   Play until 3 points and confirm the winner banner shows, options
    hide, and reset appears.
-   Click reset and confirm scores and messages are cleared and options
    return.

## Tags

`#JavaScript` `#DOM` `#GameDev` `#BeginnerProjects` `#FreeCodeCamp`
