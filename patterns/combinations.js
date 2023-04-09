// does not matter the order of the elements
// recursion solution
// Time: O(2^n)
// Space: O(n^2)

function combinations(elements) {
  if (elements.length === 0) return [[]]; // base case
  const firstEl = elements[0];
  const rest = elements.slice(1);
  const combsWithoutFirst = combinations(rest); // recursive case

  const combsWithFirst = [];
  combsWithoutFirst.forEach((comb) => {
    const combWithFirst = [...comb, firstEl];
    combsWithFirst.push(combWithFirst);
  });
  return [...combsWithoutFirst, ...combsWithFirst];
}

const res = combinations(['a', 'b', 'c']);
const exp = [
  [],
  ['a'],
  ['b'],
  ['c'],
  ['a', 'b'],
  ['b', 'c'],
  ['a', 'c'],
  ['a', 'b', 'c'],
];

console.log({ res, exp });
