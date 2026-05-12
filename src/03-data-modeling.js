/* In JavaScript, the two most fundamental building blocks  for data modeling are: 
OBJECTS ({}) -> Used to represent a SINGLE thing with named properties (characteristics)
Example: One specific book = {title: "Dune", author: "Frank Herbert", pages: 412}
ARRAYS ([]) -> Used to represent a LIST of things, kept in a specific order.
Example: A library shelf = an array of multiple book objects. */
console.log('=== 3. Objects and arrays as data modeling ===\n');

// ---- 1) One object = one thing -----
const book1 = {
    title: 'Clean code',
    author: 'Robert C. Martin',
    pages: 464,
    available: true
};
console.log('1) One object = one thing');
console.log(` ${book1.title} by ${book1.author} (${book1.pages} pages)`);

//  ---- 2) An array of objects = a list of things ----
const library = [
    {title: 'Clean code', author: 'Robert C. Martin', pages: 464, available: true},
    {title: 'The Pragmatic Programmer', author: 'Andrew Hunt and David Thomas', pages: 352, available: false},
    {title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', pages: 176, available: true}
];

console.log(`\n2) the library has ${library.length} books`);

// ---- 3) Looping with forEach ----
console.log('\n3) all titles:');
library.forEach(book => {
    console.log(` - ${book.title}`);
});

// ---- 4) Filter: Creates a NEW array with only the items that return 'true' ----
const available = library.filter(book => book.available);
console.log(`\n4) books currently available: ${available.length}`);
available.forEach(book => {
    console.log(` - ${book.title}`);
});

// 5) map: Creates a NEW array by transforming every single item ----
const titles = library.map(book => book.title);
console.log('\n5) just the titles:');
console.log(` ${titles.join(', ')}`);

// ---- 6) find: get the FIRST item that matches ----
const longBook = library.find(book => book.pages > 400);
console.log('\n6) first book with more than 400 pages:');
console.log(` ${longBook.title}`);

// ---- 7) reduce: combine all items into one value ----
const totalPages = library.reduce((sum, book) => sum + book.pages, 0);
console.log(`\n7) total pages across all books: ${totalPages}`);

// ---- 8) Nested data: object inside object, array inside object ----
const studentRecord = {
    id: 'S-101',
    name: 'Layla',
    address: {
        street: '12 University Rd',
        city: 'Beirut',
        country: 'Lebanon',
    },
    grades: [85, 92, 78, 90],
};

console.log('\n8) nested data:');
console.log(` name: ${studentRecord.name}`);
console.log(` city: ${studentRecord.address.city}`);
console.log(` grades: ${studentRecord.grades.join(', ')}`);

const sum = studentRecord.grades.reduce((a, b) => a + b, 0);
const average = sum / studentRecord.grades.length;
console.log(` average: ${average}`);

console.log('\nDone.\n');
