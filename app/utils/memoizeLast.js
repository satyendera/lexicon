// @flow

const eqArray = (left, right) =>
  left.length === right.length && left.every((value, index) => right[index] === value);

const memoizeLast = (fn) => {
  let lastMemoized;

  const memoizedFn = (...args) => {
    if (lastMemoized && eqArray(lastMemoized.args, args)) {
      return lastMemoized.answer;
    }

    const result = fn(...args);

    lastMemoized = { args, answer: result };

    return result;
  };

  return memoizedFn;
};

export default memoizeLast;
