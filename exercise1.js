const extractKey = (anArrayOfObject, nameOfKey)  => {
    let result = anArrayOfObject.map((element) => {
      return element[nameOfKey];
    });
    return result;
  }
  
    const answer = extractKey(
      [
        { name: 'Elie', isInstructor: true },
        { name: 'Tim', isInstructor: true },
        { name: 'Matt', isInstructor: true },
      ],
      'name'
    );
console.log(answer)