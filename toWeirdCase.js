function toWeirdCase(string){
   //split the given string by empty spaces
   return string.split(' ').map(function (word) {
   //return word by letter and index without a space 
   return word.split('').map(function(letter,index){
    // if the index of the letter is even, change it to uppercase, if not to lowecase
    return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase();
    // join the same way we split earlier 
   }).join('');
       
   }).join(' ');
  }

  toWeirdCase('Weird string case')


  //diff method i found in codewars


  function toWeirdCaseCharacter(chr, index)
{
  return index % 2 ? chr.toLowerCase() : chr.toUpperCase();
}

function toWeirdCaseWord(word){
  return word.split("").map(toWeirdCaseCharacter).join("");
}

function toWeirdCase(string){
  return string.split(" ").map(toWeirdCaseWord).join(" ");
}
