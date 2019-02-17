const assert = require('assert');
const characterSets = require('./charsets');
const characterSetJSON = require('./charsets.json');

const testState = {
  add(message, pass, err) {
    if (err) {
      Error.captureStackTrace(err, assert.AssertionError);
    }
    const count = this.tests.push({
      err,
      pass
    });
    console.info(`\ntest ${count}`);
    console.info(`< ${message}`);
    if (err instanceof assert.AssertionError) {
      console.info('failed ❌');
    } else {
      console.info('passed ✅');
    }
  },
  tests: [],
  get passed() {
    return this.tests.filter(test => test.pass);
  },
  get failed() {
    return this.tests.filter(test => !test.pass);
  },
  report() {
    const failed = this.failed.length;
    console.info(`\n${this.passed.length}/${this.tests.length} tests passed\n`);
    if (failed > 0) {
      const err = new assert.AssertionError({
        message: `${failed} tests failed.`
      });
      err.stack = this.failed.map(failed => failed.err.stack).join('\n\n');
      throw err;
    }
  }
};

const test = (message, method, ...params) => {
  try {
    method.apply(null, [...params, message]);
  } catch(err) {
    testState.add(message, false, err);
  }
  testState.add(message, true);
};

const areArraysSame = (arrayA, arrayB) => {
  let sameness = true;
  arrayA.forEach(a => {
    sameness = !!~arrayB.indexOf(a);
  });
  return sameness;
};

test(
  'Character set array should have the same values as the raw JSON',
  assert.strictEqual,
  areArraysSame(characterSets.toArray(), characterSetJSON),
  true
);

test(
  'Lowercase character set array should not have the same values as the raw JSON',
  assert.notStrictEqual,
  areArraysSame(characterSets.normalize(), characterSetJSON),
  true
);

test(
  'Lowercase character set array should have the same values as the lowercase JSON',
  assert.strictEqual,
  areArraysSame(characterSets.normalize(), characterSetJSON.map(charset => charset.toLowerCase())),
  true
);

test(
  '"utf-8" character set should be included',
  assert.strictEqual,
  characterSets.includes('utf-8'),
  true
);

test(
  '"UTF-8" character set should be included',
  assert.strictEqual,
  characterSets.includes('UTF-8'),
  true
);

test(
  '"pikachu" character set should not be included',
  assert.strictEqual,
  characterSets.includes('pikachu'),
  false
);

testState.report();

