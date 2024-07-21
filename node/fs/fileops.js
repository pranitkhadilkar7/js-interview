const fs = require('fs')

// Blocking code to read and write to the file
const content = fs.readFileSync(`${__dirname}/input.txt`, 'utf-8')
fs.writeFileSync(`${__dirname}/output.txt`, content)

console.log(content)

// Non-blocking, asynchronous way
fs.readFile(`${__dirname}/input.txt`, 'utf-8', (err, data) => {
    console.log('Non-blocking, asynchronous way', data)
    fs.writeFile(`${__dirname}/output.txt`, data,(err) => {
        console.log('read and write complete')
    })
})

console.log('Just a console log')
