// Tests added during the 2026 cleanup. The original assignment had no tests;
// results were checked by eye in Quokka. Every example input/output below is
// taken from the assignment's task list (see README).
const {
  addThreeQuestionMarks,
  joinWithSpace,
  subtractThreeNums,
  subtractThreeNumsReverse,
  tripleString,
  squareRoot,
} = require('./main');

describe('addThreeQuestionMarks', () => {
  it('adds three question marks to the end', () => {
    expect(addThreeQuestionMarks('hello')).toBe('hello???');
    expect(addThreeQuestionMarks('what even')).toBe('what even???');
  });
});

describe('joinWithSpace', () => {
  it('joins two strings with a space in the middle', () => {
    expect(joinWithSpace('oh', 'hi')).toBe('oh hi');
    expect(joinWithSpace('well', 'hello back')).toBe('well hello back');
  });

  it('uses a regular space (character code 32), not a look-alike', () => {
    expect(joinWithSpace('a', 'b').charCodeAt(1)).toBe(32);
  });
});

describe('subtractThreeNums', () => {
  it('subtracts the second and third numbers from the first', () => {
    expect(subtractThreeNums(10, 1, 2)).toBe(7);
    expect(subtractThreeNums(8, 3, 5)).toBe(0);
    expect(subtractThreeNums(100, 80, 25)).toBe(-5);
  });
});

describe('subtractThreeNumsReverse', () => {
  it('subtracts in reverse order (third - second - first)', () => {
    expect(subtractThreeNumsReverse(10, 1, 2)).toBe(-9);
    expect(subtractThreeNumsReverse(2, 1, 10)).toBe(7);
  });
});

describe('tripleString', () => {
  it('repeats the string three times', () => {
    expect(tripleString('codeimmersives')).toBe('codeimmersivescodeimmersivescodeimmersives');
    expect(tripleString('is the best')).toBe('is the bestis the bestis the best');
  });
});

describe('squareRoot', () => {
  it('returns the square root', () => {
    expect(squareRoot(16)).toBe(4);
    expect(squareRoot(4)).toBe(2);
    expect(squareRoot(9)).toBe(3);
  });
});
