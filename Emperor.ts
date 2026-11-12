import Difficulty from '@civ-clone/core-difficulty/Difficulty';

// Level 4: a ruleset registers the levels it offers in the game's `availableDifficulties`, and its rules read `level()`.
export class Emperor extends Difficulty {
  static level(): number {
    return 4;
  }
}

export default Emperor;
