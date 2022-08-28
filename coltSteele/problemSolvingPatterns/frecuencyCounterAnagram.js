// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// MY SOLUTION
const createMap = (map, l) => {
  !map.has(l) ? map.set(l, 1) : map.set(l, map.get(l) + 1);
  return map;
};
const checkAnagram = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  let s1FC = new Map();
  let s2FC = new Map();
  for (let i = 0; i < s1.length; i++) {
    s1FC = createMap(s1FC, s1[i]);
    s2FC = createMap(s2FC, s2[i]);
  }
  for (let l of s1FC) {
    if (s1FC.get(l[0]) !== s2FC.get(l[0])) return false;
  }
  return true;
};

// console.log({s: checkAnagram("",""),r:true})
// console.log({s: checkAnagram("aaz","zza"),r:false})
// console.log({s: checkAnagram("anagram","nagaram"),r:true})
// console.log({s: checkAnagram("rat","car"),r:false})
// console.log({s: checkAnagram("awesome","awesom"),r:false})

// COLT'S SOLUTION
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm');
