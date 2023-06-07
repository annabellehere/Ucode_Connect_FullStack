function concat(...args) {
  second.count = 0;
  function second() {
      let str = prompt("Enter your word: ", "");
      if (str === null) { 
        return args[0]; 
      }
      second.count++;
      return args[0].concat(" ", str);
  }
  if (arguments.length == 1) { 
    return second; 
  }
  else if (arguments.length == 2) {
    return args[0].concat(" ", args[1]); 
  }
}
