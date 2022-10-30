vowels = ["a", "e", "i", "o", "u"];

function removeVowels(str) {
  let newString = [...str];
  return newString.filter((value) => {
      if (!vowels.includes(value)) {
          return value
      }
  })
}
console.log(removeVowels("amazing"));
console.log(removeVowels('fun'));
console.log(removeVowels('silly'));