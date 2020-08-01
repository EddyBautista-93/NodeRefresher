const questions = [
    "What is your name?",
    "What would you be rather doing?",
    "What is your favorite programming language?"

];

const ask = (i = 0) => {
    process.stdout.write(`\n\n\n  ${questions[i]}`);
    process.stdout.write(` > `);

};


ask();
//intl a empty array 
const answers = [];


// waiting for a data event 
// push the console response to the answer string and if it is les then it will take the answers length as a var and pass it to the ask method 
process.stdin.on('data', data => {
    answers.push(data.toString().trim());
    if(answers.length < questions.length){
        ask(answers.length);
    // } else{
        process.exit();    
    }
    
});
