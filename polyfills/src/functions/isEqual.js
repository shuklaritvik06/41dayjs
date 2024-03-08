function isEqual(a, b) {
  const isNegativeZero = value => value === 0 && (1 / value === -Infinity);
  const areEqual = (x, y) => (Object.is(x, y) || (isNegativeZero(x) && isNegativeZero(y)));

  let correctedKeys = [];
  let results = true;

  for (const key of Object.keys(a)) {
    const elementA = a[key];
    const elementB = b[key];

    if (!areEqual(elementA, elementB)) {
      results = false;
      break;
    }

    correctedKeys.push(key);
  }

  return { correctedKeys, results };
}

const { correctedKeys, results } = isEqual(
  { a: undefined, b: 2, c: NaN, d: -0, e: { nested: 'value' } },
  { b: 2, c: NaN, d: 0, e: { nested: 'value' } }
);

console.log({ correctedKeys, results });
