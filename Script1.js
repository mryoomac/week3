const readline = require('readline');

function app(){

    const prompt = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });


    prompt.question('Write first number:\n', (number1) => {
        prompt.question('Write secound number :\n', (number2) => {
            prompt.question('Choose operation (+, -, *, /, %):\n', (char) => {

                console.log('\nResult: ' + Calculator(number1, number2, char) + '\n') 

                prompt.question('Continue?', (click) => {

                    prompt.close()
                    app()
                })
                
            })
        })
    })
}
 
app()

function Calculator(z, x, c) {
        var a = Number(z)
        var b = Number(x)
        var operation = c
    if (!a || !b || !operation) return `Error: No number or sign specified.`;
    if (isNaN(a) || isNaN(b)) return `Error: The specified character is not a digit.`;
    if (!['+', '-', '*', '/', '%'].some(t => t.includes(operation))) return `Error: Wrong operation type.`;
        switch (operation) {
            case `+`:
                return a + b;
            case `-`:
                return a - b;
            case `*`:
                return a * b;
            case `/`:                
                return a / b;
            case `%`:                
                return a % b;
            case `default`:
                return `Option not implemented.`;
        }
    }


