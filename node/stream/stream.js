const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req, res) => {
    // File reading without using stream
    // fs.readFile(`${__dirname}/test-file.tsx`, 'utf-8', (err, data) => {
    //     if (err) console.log(err)
    //     res.end(data)
    // })

    // File reading with stream. But it has back pressure problem. data is received so fast that it create pressure while writing to a response stream
    // const readableStream = fs.createReadStream(`${__dirname}/test-file.tsx`)
    // readableStream.on('data', chunk => {
    //     res.write(chunk)
    // })
    // readableStream.on('end', () => {
    //     res.end()
    // })
    // readableStream.on('error', (err) => {
    //     console.log(err)
    //     res.statusCode = 500
    //     res.end('File not found!!')
    // })

    // Used solution without back pressure
    const readableStream = fs.createReadStream(`${__dirname}/test-file.tsx`)
    readableStream.pipe(res)
})

server.listen(3000, () => {
    console.log('listening to port 3000')
})