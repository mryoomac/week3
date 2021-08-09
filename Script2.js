const readline = require('readline');

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
    app()
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


function app() {

    const prompt = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    var fs = require('fs')
    const data1 = fs.readFileSync('./1.txt',
        { encoding: 'utf8', flag: 'r' });
    const data2 = fs.readFileSync('./2.txt',
        { encoding: 'utf8', flag: 'r' });
    const data3 = fs.readFileSync('./3.txt',
        { encoding: 'utf8', flag: 'r' });

    const split = [
        data1.replaceAll('\n', '').split('\r'),
        data2.replaceAll('\n', '').split('\r'),
        data3.replaceAll('\n', '').split('\r'),
    ]
    
    let fileToSum = {
        1: 0,
        2: 0,
        3: 0,
    }

    let nr = 1


    split.forEach(b => {
        b.forEach(a => {
            fileToSum[nr]+= Number(a);
        })
        nr += 1;
    })

    var sumOf3 = fileToSum[1] + fileToSum[2] + fileToSum[3]

    console.log(`Summary of 3 files:`);
    console.log(sumOf3);
    

    console.log(`Summary per file:`);
    console.log(fileToSum);

}