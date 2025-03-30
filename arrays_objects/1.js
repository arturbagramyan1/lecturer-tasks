// Write a JavaScript program to list the properties of a JavaScript object. (1)
// Sample object:


let student = {
    name: 'David Rayy',
    class: "VI",
    rollno: 12
}

function listProperties(obj) {
    let properties = [];
    for (let prop in obj) {
        properties.push(prop);
    }
    return properties;
}
console.log(listProperties(student));

// Write a JavaScript program to delete the rollno property from the following object. (2)

function deleteProperty(obj, prop) {
    delete obj[prop];
    return obj;
}
console.log(deleteProperty(student, 'rollno'));

// Write a JavaScript program to get the length of a JavaScript object

function getObjectLength(obj) {
    return Object.keys(obj).length;
}
console.log(getObjectLength(student));

// Write a function that gets the object and key as arguments and checks if the key exists in the object. (4)
function checkKeyExists(obj, key) {
    return obj.hasOwnProperty(key);
}
console.log(checkKeyExists(student, 'name')); 
