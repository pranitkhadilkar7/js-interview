const fs = require('fs')
const superagent = require('superagent')

// callback hell example.
// fs.readFile(`${__dirname}/breed.txt`, 'utf-8', (err, breed) => {
//     if (err) {
//         console.log('File name is incorrect!')
//         return
//     }
//     superagent(`https://dog.ceo/api/breed/${breed}/images/random`).end((err, res) => {
//         if (err) {
//             console.log('Invalid breed!!')
//             return
//         }
//         fs.writeFile(`${__dirname}/breed-link.txt`, res.body.message, (err) => {
//             if (err) {
//                 console.log('Error writing to the file')
//                 return
//             }
//         })
//     })
// })

// avoiding callback hell using promises
function readFilePromise(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject('File not found!')
                return
            }
            resolve(data)
        })
    })
}

function writeFilePromise(filePath, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, (err) => {
            if (err) {
                reject('File not found!')
                return
            }
            resolve('Link added successfully!')
        })
    })
}

readFilePromise(`${__dirname}/breed.txt`).then(breed => {
    return superagent.get(`https://dog.ceo/api/breed/${breed}/images/random`)
}).then(res => {
    return writeFilePromise(`${__dirname}/breed-link.txt`, res.body.message)
}).then(msg => {
    console.log(msg)
}).catch(err => {
    console.log(err)
})