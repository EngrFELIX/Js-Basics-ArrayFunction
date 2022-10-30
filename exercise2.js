const filterLetters = (anArrayOfLetters, letter) => {
    let result = anArrayOfLetters.filter((element) => {
      return element.toLowerCase() === letter.toLowerCase();
    });
    return result.length;
  }
  console.log(filterLetters(["a", "a", "b", "c", "A"], "a"));
  console.log(filterLetters(["a", "a", "b", "c", "A"], "z"));
  console.log(filterLetters(["a", "a", "b", "c", "A"], "B"));
