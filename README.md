# Stop Calling Yourself — Calling Your Own Functions

[![Tests](https://github.com/RickRieger/stop-calling-yourself-stop-calling-yourself/actions/workflows/tests.yml/badge.svg)](https://github.com/RickRieger/stop-calling-yourself-stop-calling-yourself/actions/workflows/tests.yml)

A JavaScript exercise from the **Code Immersives** web development bootcamp in New York City (February 2021). Unlike the earlier exercises, this one came **with no tests**. The task was to write six small functions and **call them yourself** to check the results, using the [Quokka](https://quokkajs.com/) editor plugin or `console.log`. This repo is my fork of the assignment. My solution is in [`main.js`](main.js).

**Skills practiced:** writing and naming functions, calling your own functions to check them, string joining, subtraction order, and `Math.sqrt`.

**Built with:** JavaScript (Node.js). The 2026 cleanup added Jest tests; the badge above shows whether they pass on GitHub.

---

## Contents

- [My solution](#my-solution)
- [See it run](#see-it-run)
- [Run the tests](#run-the-tests)
- [What went wrong in 2021, and why it matters](#what-went-wrong-in-2021-and-why-it-matters)
- [Cleanup log (November 2026)](#cleanup-log-november-2026)
- [Original assignment (from the instructor)](#original-assignment-from-the-instructor)

---

## My solution

Written on **2021-02-18** (commit *"too easy"*). *(Shown as it is after the 2026 cleanup; see the log below for the two bugs that were fixed.)*

```js
function addThreeQuestionMarks(string) {
  return string + '???';                 // 'hello' → 'hello???'
}

function joinWithSpace(first, second) {
  return first + ' ' + second;           // ('oh', 'hi') → 'oh hi'
}

function subtractThreeNums(a, b, c) {
  return a - b - c;                      // (100, 80, 25) → -5
}

function subtractThreeNumsReverse(a, b, c) {
  return c - b - a;                      // (10, 1, 2) → 2 - 1 - 10 = -9
}

function tripleString(string) {
  return string + string + string;       // 'is the best' → 'is the bestis the bestis the best'
}

function squareRoot(num) {
  return Math.sqrt(num);                 // 16 → 4
}
```

| Task | Notes |
|---|---|
| Three question marks | Join `'???'` onto the end. |
| Join with a space | `first + ' ' + second`. The space has to be a *real* space; see [What went wrong](#what-went-wrong-in-2021-and-why-it-matters). |
| Subtract three numbers | Subtraction runs left to right: `100 - 80 - 25` = `20 - 25` = `-5`. |
| Subtract in reverse | Same numbers, opposite order: `c - b - a`. For `(2, 1, 10)` that's `10 - 1 - 2 = 7`. |
| Triple a string | `string + string + string`. Modern JavaScript also has `string.repeat(3)`. |
| Square root | The built-in `Math.sqrt()`; the assignment hinted it would need research. |

## See it run

```bash
git clone https://github.com/RickRieger/stop-calling-yourself-stop-calling-yourself.git
cd stop-calling-yourself-stop-calling-yourself
node main.js        # or: npm start
```

This prints every example from the assignment, plus a few of my own:

```
Task 1: add three question marks
hello???
what even???
Are you serious???

Task 2: join with a space
oh hi
well hello back
...
Task 6: square root
4
2
3
6
```

## Run the tests

```bash
npm ci
npm run test:ci   # runs all tests once and exits
npm test          # watch mode: re-runs on every save
```

Expected result: `Tests: 7 passed, 7 total`. [`main.test.js`](main.test.js) checks every example from the assignment's task list. [`.github/workflows/tests.yml`](.github/workflows/tests.yml) runs the tests on GitHub after every push, and the badge at the top shows the result.

## What went wrong in 2021, and why it matters

My 2021 commit was called *"too easy"*, and the logic was easy. But two of the six functions didn't produce what the assignment asked for, and checking by eye didn't catch either one:

1. **Task 1 added `'!!!'` instead of `'???'`.** I only tried it with my own input (`'Are you serious'`) instead of the assignment's examples (`'hello'` → `'hello???'`), so I never compared it against the expected answer.
2. **Task 2's "space" was a non-breaking space**, an invisible look-alike character (code 160 instead of 32), probably pasted from a web page. On screen `'oh hi'` looked right, but it wasn't equal to `'oh hi'` with a real space. No amount of looking at Quokka's output would have shown that.

**Lesson:** this is why automated tests exist. A test that says `expect(joinWithSpace('oh', 'hi')).toBe('oh hi')` catches both problems instantly. The new tests fail 3 of 7 on the original code and pass on the fixed version.

---

## Cleanup log (November 2026)

All changes below were made on **2026-11-23** on the branch `cleanup-and-tests`, checked by running `node main.js` and the tests, and merged into `master`. Each is its own commit.

### 1. Task 1: three question marks, not exclamation points

**Why:** the task is *"add three question marks to the string"*, but the function added `'!!!'`.

```js
// Before
function whatTheHeck(arbitraryString){
return arbitraryString + '!!!';
}

// After (renamed in item 3)
function addThreeQuestionMarks(string) {
  return string + '???';
}
```

### 2. Task 2: a regular space instead of a non-breaking space

**Why:** the space between the words was a non-breaking space (Unicode U+00A0, character code **160**) instead of a normal space (code **32**). The two look identical, but `'oh' + nbsp + 'hi'` is not equal to `'oh hi'`. I confirmed it by checking the middle character's code: 160 before the fix, 32 after.

```js
// Before (in the original file, the character between these quotes was U+00A0;
// it's shown here as a normal space because the two look the same)
return word + ' ' + wordUp;

// After (a regular space, code 32)
return first + ' ' + second;
```

### 3. Renamed the functions so their names say what they do

**Why:** the assignment asks to *"try to name them well"*. A name like `whatTheHeck` doesn't tell a reader what the function does.

| Before | After |
|---|---|
| `whatTheHeck` | `addThreeQuestionMarks` |
| `whiteSpace(word, wordUp)` | `joinWithSpace(first, second)` |
| `subThreeNumsReverse` | `subtractThreeNumsReverse` (matches `subtractThreeNums`) |
| `tripleAstring` | `tripleString` |

### 4. `node main.js` now prints every example, and the functions are exported

**Why:** results were "shown" with bare lines like `answer;`, which only display inside the Quokka plugin; `node main.js` printed nothing at all. Several tasks were also tried only with my own inputs, which is how bugs 1 and 2 got through.

```js
// Before
let answer = whatTheHeck('Are you serious');
answer;

// After
if (require.main === module) {
  console.log(addThreeQuestionMarks('hello'));           // 'hello???'
  console.log(addThreeQuestionMarks('what even'));       // 'what even???'
  console.log(addThreeQuestionMarks('Are you serious')); // my own example
  // ...every example for every task
}

module.exports = { addThreeQuestionMarks, joinWithSpace, /* ... */ };
```

`require.main === module` is only true when the file is run directly with `node main.js`, so the tests can import the functions without triggering all the printing.

### 5. Added tests and automatic test runs on GitHub

**Why:** the assignment had no tests, so there was no reliable way to know the functions were right (see item 1 and 2). I added:
- [`main.test.js`](main.test.js): every example from the task list, plus a check that `joinWithSpace` uses a real space.
- `package.json` with Jest 29 and three commands: `npm start` (print the examples), `npm test` (watch mode) and `npm run test:ci` (run once).
- A GitHub Actions workflow that runs the tests after every push.

### 6. Added this README section

The instructor's original instructions are below, unchanged.

---

## Original assignment (from the instructor)

*The text below is the assignment README as written by the Code Immersives instructor, unchanged.*

### Calling Your Own Functions

### Setup

CREATE YOUR OWN `main.js` file and work within there.

For each of the following tasks:

1. Write the function.
2. Use Quokka to "print out" the results (i.e., make the results appear next to your code).
3. Repeat steps 1 and 2 for EACH of the example inputs given for EACH function in the tasks section below. (See the example below for how you might print out each result.)

Quokka should print out those return values for you ( the strings with the three question marks, in this example). Note that ALL example inputs are being tested, not just one!

For example, for the first task, if you called your function questionHard (don't call it that, that's a terrible name), your screenshot would look like the following code:

```javascript
let result1 = questionHard('hello')
let result2 = questionHard('what even')
result1   'hello???'
result2   'what even???'
```

If you really don't like Quokka, you can, alternately:

1. Write the function.
2. `console.log` the result of calling the function (in the example above, you'd `console.log` `result1` and `result2`) and run `node main.js` in your terminal to see the results printed out there.
3. Repeat steps 1 and 2 for EACH of the example inputs given for EACH function in the tasks section below. (See the example below for how you might print out each result.)

Note that you can call the functions whatever you want! Try to name them well? Take 30 seconds to think about reasonable names for them.

### Tasks

- add three question marks to the string
  - 'hello' -> 'hello???'
  - 'what even' -> 'what even???'
- add two strings with a space in the middle
  - 'oh', 'hi' -> 'oh hi'
  - 'well', 'hello back' -> 'well hello back'
- subtract three numbers
  - 10, 1, 2 -> 7
  - 8, 3, 5 -> 0
  - 100, 80, 25 -> -5
- subtract three numbers in reverse order
  - 10, 1, 2 -> -9
  - 2, 1, 10 -> 7
- triple a string
  - 'codeimmersives' -> 'codeimmersivescodeimmersivescodeimmersives'
  - 'is the best' -> 'is the bestis the bestis the best'
- return the square root of a number (you'll probably need research!)
  - 16 -> 4
  - 4 -> 2
  - 9 -> 3
