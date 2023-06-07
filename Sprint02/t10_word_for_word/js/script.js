function findDuplic(arr) {
  let first = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
          first.push(arr[i]);
      }
  }
  let second = [];
  for (let i = 0; i < first.length; i++) {
      let current = first[i];
      if (!~second.indexOf(current)) {
          second.push(current);
      }
  }
  return second;
}

function addWords(obj, data) {
  let joinArray = Object.values(obj);
  joinArray = joinArray.join(" ") + " " + data;
  joinArray = joinArray.split(" ");
  joinArray = findDuplic(joinArray);
  obj.words = joinArray.join(" ");
  return obj;
}

function removeWords(obj, wrds) {
  let strin = Object.values(obj).join(' ');
  let wordsOfStr = wrds.trim();
  let wordsOfObject = strin.split(' ');
  let removeWords = wordsOfStr.split(' ');

  for (let i = 0; i < removeWords.length; i++) {
    let index = wordsOfObject.indexOf(removeWords[i]);
    if (index >= 0) {
      wordsOfObject.splice(index, 1);
    }
  }

  obj.words = wordsOfObject.join(' ');
  return wordsOfObject;
}

function changeWords(obj, oldWrds, newWrds) {
  let str = Object.values(obj).join(' ');
  let oldWords = oldWrds.trim();
  let wordsToAdd = newWrds.trim();
  let wordsArr = str.split(' ');
  let oldWordsArr = oldWords.split(' ');
  let newWordsArr = wordsToAdd.split(' ');
  for (let i = 0; i < oldWordsArr.length; i++) {
    let index = wordsArr.indexOf(oldWordsArr[i]);
    if (index > -1) {
      wordsArr.splice(index, 1);
    }
  }
  wordsArr = wordsArr.concat(newWordsArr);

  obj.words = wordsArr.join(' ');
  return wordsArr;
}
