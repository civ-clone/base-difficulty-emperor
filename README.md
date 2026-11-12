# base-difficulty-emperor

The `Emperor` difficulty level: `Emperor.level()` is 4, where 0 is the easiest and each step up is harder.

A library: it registers nothing. A ruleset registers the levels it offers in the game's `availableDifficulties`, and
its rules read the level.
