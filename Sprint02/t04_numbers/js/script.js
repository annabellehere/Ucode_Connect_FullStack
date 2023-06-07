const start = +prompt('Enter the start number of the range:', '1');
const end = +prompt('Enter the end number of the range:', '100');

printNumberDescriptions(start, end);

function printNumberDescriptions(start, end) {
  for (let number = start; number <= end; number++) {
    let description = '';

    if (number % 2 === 0) {
      description += 'even';
    }

    if (number % 3 === 0) {
      if (number % 2 === 0) {
        description += ', ';
      }
      description += 'a multiple of 3';
    }

    if (number % 10 === 0) {
      if (number % 2 === 0 || number % 3 === 0) {
        description += ', ';
      }
      description += 'a multiple of 10';
    }

    if (description !== '') {
      console.log(number + ' is ' + description);
    }
    else {
      console.log(number + ' -');
    }
  }
}


