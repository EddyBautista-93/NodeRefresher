function titleCase(title, minorWords) {
var titleCased = [];
  var words = title.toLowerCase().split(" ");
  if (minorWords) {
  	var minorWordsArr = minorWords.toLowerCase().split(" ");
  } 

  for (var num=0; num<words.length; num++) {
  	var currentWord = words[num];
  	if (minorWords == undefined) {
  		titleCased.push(currentWord[0].toUpperCase() + currentWord.slice(1));
  	} else {
	    if (!minorWordsArr.includes(currentWord) || num === 0) {
	      titleCased.push(currentWord[0].toUpperCase() + currentWord.slice(1));
	    } else {
	      titleCased.push(currentWord);
	    }
  	}
  }
  return titleCased.join(" ");
}

function removeFirstWord(minor){

    console.log(minor);
    var removedWord = minor.split('').slice(1).join('').toLowerCase();
    console.log(removedWord);
}

function caps(str){
    return str[0].toUpperCase() + str.slice(1);
}


console.log(titleCase('a clash of KINGS', 'a an the of'));
console.log(titleCase('the quick brown fox'));
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));




// best solution on codewars
// function titleCase(title, minorWords) {
//     var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
//     return title.toLowerCase().split(' ').map(function(v, i) {
//       if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
//         v = v.split('');
//         v[0] = v[0].toUpperCase();
//         v = v.join('');
//       }
//       return v;
//     }).join(' ');
//   }
  