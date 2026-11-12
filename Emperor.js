"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emperor = void 0;
const Difficulty_1 = require("@civ-clone/core-difficulty/Difficulty");
// Level 4: a ruleset registers the levels it offers in the game's `availableDifficulties`, and its rules read `level()`.
class Emperor extends Difficulty_1.default {
    static level() {
        return 4;
    }
}
exports.Emperor = Emperor;
exports.default = Emperor;
//# sourceMappingURL=Emperor.js.map