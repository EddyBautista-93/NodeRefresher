// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. 

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function validBraces(braces){
    
    // create a tracer array to keep track of opening braces
    let tracer = [];
    // loop through the braces to push into the method if they have opening brackets 
    for (let i = 0; i < braces.length; i++) {
        // create the conditional that if it's a opening bracket we can push it in 
        if( braces[i] === "(" ||  braces[i] === "{" || braces[i] === "[" ){
            tracer.push(braces[i])
        } else {
            if(tracer.length === 0) return false;
            
            let lastValue = tracer[tracer.length-1];
            console.log( "The lastValue is " + lastValue);
            if( braces[i] === "(" ||  braces[i] === "{" || braces[i] === "[" ){
                tracer.pop();
            } else {
                break;
            }
        }
    }
    return tracer.length === 0;
  }

  console.log(validBraces( "()" )) // true
  console.log(validBraces( "[]" )) // true
  console.log(validBraces( "{}" )) // true


// cool regex one i found on stack overflow 

// const regex = /\(\)|\[\]|\{\}/;
// const validBraces = braces => regex.test(braces)
//   ? validBraces(braces.replace(regex, ''))
//   : '' === brace