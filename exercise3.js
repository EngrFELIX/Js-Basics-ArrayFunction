const printFirstAndLast = (array) => {
    let result = array.map((element) => {
      console.log(element[0] + element[element.length - 1]);
    });
  }
  console.log(printFirstAndLast(['awesome', 'example', 'of', 'forEach']));