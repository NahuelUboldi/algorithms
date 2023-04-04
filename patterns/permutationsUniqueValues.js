function permutationsUniqueValues(string) {
  // recursive permute function to generate all permutations
  const permute = (arr) => {
    if (arr.length == 0) return [[]]; // base case
    const firstEl = arr[0];
    const rest = arr.slice(1);
    const permsWithoutFirst = permute(rest);

    const allPermutations = [];
    permsWithoutFirst.forEach((perm) => {
      for (let i = 0; i <= perm.length; i++) {
        const permWithFirst = [...perm.slice(0, i), firstEl, ...perm.slice(i)];
        allPermutations.push(permWithFirst);
      }
    });

    // create a set object to eliminate duplicates
    const allUniquePermutations = new Set();
    allPermutations.forEach((perm) => allUniquePermutations.add(perm.join('')));

    // convert the set to an array and returns it
    return Array.from(allUniquePermutations);
  };

  const arrOfPerms = permute(string.split(''));

  return arrOfPerms;
}

const res = permutationsUniqueValues('aabb');
const exp = ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'];
console.log({ res, exp });
