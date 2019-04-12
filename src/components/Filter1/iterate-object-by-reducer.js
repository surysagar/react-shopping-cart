const user = {
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
        name: 'Jack',
        address: {
            line1: 'westwish st',
            line2: 'washmasher',
            city: 'wallas',
            state: 'WX'
        }
    }
}

const getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) => // 'obj' = state of object will always change when iterate object
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}

// pass in your object structure as array elements
const name = getNestedObject(user, ['personalInfo', 'name']);

// to access nested array, just pass in array index as an element the path array.
const city = getNestedObject(user, ['personalInfo', 'addresses', 0, 'city']);