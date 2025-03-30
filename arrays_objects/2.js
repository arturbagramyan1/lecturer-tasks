// Write a JavaScript program to display the reading status (i.e. display book name, author name, and reading status) of the following books. (5)

let library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];


function displayReadingStatus(library) {
    library.forEach(book => {
        console.log(`Title: ${book.title}, Author: ${book.author}, Reading Status: ${book.readingStatus}`);
    });
}
displayReadingStatus(library);


