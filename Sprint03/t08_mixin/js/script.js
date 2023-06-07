let houseMixin = {
    wordReplace(word1, word2) {
        this.description = this.description.replace(word1, word2);
    },

    wordInsertAfter(word1, word2) {
        this.wordReplace(word1, word1 + ' ' + word2);
    },

    wordDelete(word) {
        this.wordReplace(word,'');
    },

    wordEncrypt() {
        let newStr = "";
        for (let i = 0; i < this.description.length; i++) {
          let c = this.description.charCodeAt(i);
          if (c >= 65 && c <= 90) {
            newStr += String.fromCharCode(((c - 65 + 13) % 26) + 65);
          } else if (c >= 97 && c <= 122) {
            newStr += String.fromCharCode(((c - 97 + 13) % 26) + 97);
          } else {
            newStr += this.description.charAt(i);
          }
        }
        this.description = newStr;
    },

    wordDecrypt() {
        let newStr = "";
        for (let i = 0; i < this.description.length; i++) {
          let c = this.description.charCodeAt(i);
          if (c >= 65 && c <= 90) {
            newStr += String.fromCharCode(((c - 65 + 13) % 26) + 65);
          } else if (c >= 97 && c <= 122) {
            newStr += String.fromCharCode(((c - 97 + 13) % 26) + 97);
          } else {
            newStr += this.description.charAt(i);
          }
        }
        this.description = newStr;
    }
}

/*const house = new HouseBuilder('88 Crescent Avenue',
    'Spacious town house with wood flooring, 2-car garage, and a back patio.',
    'J. Smith', 110, 5);

Object.assign(house, houseMixin);
console.log(house.getDaysToBuild());
// 220
console.log(house.description);
// Spacious town house with wood flooring, 2-car garage, and a back patio.
house.wordReplace("wood", "tile");
console.log(house.description);
// Spacious town house with tile flooring, 2-car garage, and a back patio.
house.wordDelete("town ");
console.log(house.description);
// Spacious house with tile flooring, 2-car garage, and a back patio.
house.wordInsertAfter("with", "marble");
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.
house.wordEncrypt();
console.log(house.description);
// Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.
house.wordDecrypt();
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.*/