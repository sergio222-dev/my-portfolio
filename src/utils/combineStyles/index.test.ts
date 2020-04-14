import { combineStyles } from './index';

it('should not crash', () => {
  const style = combineStyles({ root: 'clase1', pedro: 'clase4' }, { root: 'clase2' }, {}, undefined);
  const resultExpected = { root: 'clase1 clase2', pedro: 'clase4' };
  expect(style).toStrictEqual(resultExpected);
});
