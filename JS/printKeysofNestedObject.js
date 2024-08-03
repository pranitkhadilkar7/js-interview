function printKeysOfNestedObject (obj, prefix = '') {

    for (let key in obj) {
        prefix ? console.log(prefix + ' ' + key) : console.log(key)
        const value = obj[key]
        if (typeof value === 'object' && value !== null) {
            printKeysOfNestedObject(value, prefix ? `${prefix} ${key}` : key)
        }
    }
}

const obj = {
    name: 'Pranit',
    age: 29,
    school: {
        name: 'HLV',
        type: 'coed',
        address: {
            city: 'Warora',
            pin: '442907'
        }
    }
}

printKeysOfNestedObject(obj)