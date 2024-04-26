const { commonPrefixSums } = require('./index');

describe('Test task 1', () => {
  test('Case base: on \'abcabcd\' expected answer is 10', () => {
	expect(commonPrefixSums(["abcabcd"])).toStrictEqual([10])
  })
  
  test('Case 0: on \'ababaa\' expected answer is 11', () => {
	expect(commonPrefixSums(["ababaa"])).toStrictEqual([11])
  })
  
  test('Case 1: on \'aa\' expected answer is 3', () => {
	expect(commonPrefixSums(["aa"])).toStrictEqual([3])
  })
})