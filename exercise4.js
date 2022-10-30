const valTimesIndex = (arrayOfNumbers) => {
    let result = arrayOfNumbers.map((element, index) => {
      return element * index;
    });
    return result;
  }
  console.log(valTimesIndex([1, 2, 3])); // [0,2,6]
  console.log(valTimesIndex([5, 10, 15])); // [0,10,30]