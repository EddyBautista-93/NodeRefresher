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