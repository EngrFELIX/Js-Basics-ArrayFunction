const addKeyAndValue = (anArray, aKey, aValue) => {
    let emptyArray = [];
    anArray.reduce((acc, initialValue) => {
      initialValue[aKey] = aValue;
      emptyArray.push(initialValue);
    }, {});
    return emptyArray;
  }
  console.log(
    addKeyAndValue(
      [{ name: 'Joshua' }, { name: 'Mark' }, { name: 'Arthur' }],
      'isInstructor',
      true
    )
  );  