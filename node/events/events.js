const EventEmmiter = require('events')

const myEvent = new EventEmmiter()

class Sales extends EventEmmiter {
    constructor () {
        super()
    }
}

const salesEmitter = new Sales()

myEvent.on('newSale', () => {
    console.log('New Sale event emitted is received')
})

myEvent.on('newSale', () => {
    console.log('Consumer Name: Jonas')
})

myEvent.on('newSale', (stock) => {
   console.log(`stock count is ${stock}`)
})

myEvent.emit('newSale', 9)

salesEmitter.on('salesChanged', () => {
    console.log('custom sales emitted')
})

salesEmitter.emit('salesChanged')

// output
// New Sale event emitted is received
// Consumer Name: Jonas
// stock count is 9
// custom sales emitted


// Creating a server
const http = require('http')

// server is an instance of event emmitter class
const server = http.createServer()

server.on('request', (req, res) => {
    console.log('Request Received')
    res.end('Request Received')
})

server.listen(3000, () => {
    console.log('listening to port 3000')
})