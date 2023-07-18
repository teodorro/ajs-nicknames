import Validator from '../validator';

test('should work', () => {
  const result = (new Validator()).validateUsername('adsf');

  expect(result).toBe(true);
});

test('false on special symbol', () => {
  const result = (new Validator()).validateUsername('ads!f');

  expect(result).toBe(false);
});

test('false on many numbers', () => {
  const result = (new Validator()).validateUsername('ads12345f');

  expect(result).toBe(false);
});

test('false on start with numbers', () => {
  const result = (new Validator()).validateUsername('12bhf');

  expect(result).toBe(false);
});

test('false on start with minus', () => {
  const result = (new Validator()).validateUsername('-b2hf');

  expect(result).toBe(false);
});

test('false on end with numbers', () => {
  const result = (new Validator()).validateUsername('bhf12');

  expect(result).toBe(false);
});

test('false on end with minus', () => {
  const result = (new Validator()).validateUsername('b2hf-');

  expect(result).toBe(false);
});

