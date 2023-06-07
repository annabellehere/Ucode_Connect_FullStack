function checkBrackets(str) {
  if (!str) {
    return -1;
  }

  if (!/\(|\)/.test(str)) {
    return -1;
  }

  let count = 0;
  let balance = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      balance++;
    } else if (str[i] === ')') {
      if (balance > 0) {
        balance--;
      } else {
        count++;
      }
    }
  }

  return String(count + balance);
}