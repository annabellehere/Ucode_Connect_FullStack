String.prototype.removeDuplicates = function() {
    let result = this.replace(/\s+/g, ' ').trim();
    const words = result.split(' ');
    const newstring = [];
    for (let i = 0; i < words.length; i++) {
      if (newstring.indexOf(words[i]) === -1) {
        newstring.push(words[i]);
      }
    }
    result = newstring.join(' ');
  
    return result;
};

/* let str = "Giant Spiders?   What’s next? Giant Snakes?";
console.log(str);
// Giant Spiders?   What’s next? Giant Snakes?
str = str.removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?
str = str.removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?

str = ". . . . ? . . . . . . . . . . . ";
console.log(str);
// . . . . ? . . . . . . . . . . .
str = str.removeDuplicates();
console.log(str);
// . ?
*/
  
