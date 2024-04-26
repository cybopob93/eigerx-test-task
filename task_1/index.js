/**
 * Counts the number of common prefix sums for each string in the given array.
 *
 * @param {string[]} input - The array of strings to process.
 * @returns {number[]} - An array containing the number of common prefix sums for each string.
 */
function commonPrefixSums(input) {
  let results = [];
  
  for (let s of input) {
	let suffix = s;
	let counter = suffix.length;
	
	do {
	  suffix = suffix.substring(1);
	  let isLong = true;
	  for (let i = 0; i < suffix.length; i++) {
		if (!isLong) break;
		if (suffix[i] === s[i]) {
		  counter++;
		} else {
		  isLong = false;
		}
	  }
	} while (suffix.length > 1);
	
	results.push(counter);
  }
  
  return results;
}

// console.log(commonPrefixSums(['abcabcd', 'ababaa', 'aa']));
module.exports = { commonPrefixSums }