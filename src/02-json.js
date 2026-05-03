/* 02 - JSON (JavaScript Object Notation) 
=========================================================

JSON is a universal TEXT format for sharing data.
It looks almost exactly like a JavaScript object, but it is purely a STRING.

Why do we need it?
Because you cannot send a live JavaScript object across the internet,
nor can you save it directly to a text file. You must convert it to plain text first.

We use JSON to:
- Send and receive data from web servers (APIs)
- Save configuration settings to a file 
- Share data between completely different programming languages (Python, Java, C#, etc.)

Two built-in JavaScript functions do all the heavy lifting:
 JSON.stringify(value) -> Converts a live JavaScript object into a JSON text string
 JSON.parse(text) -> Converts a JSON text string back into a live JavaScript object*/

console.log('=== 2. JSON ===\n');

// ------- 1) Object --> JSON -------- //
const student = {
    id: 101,
    name: 'Layla',
    age: 19,
    courses: ['Math', 'Programming', 'English'],
};

const text = JSON.stringify(student);
console.log('1) student as JSON (one line):');
console.log(`  ${text}`);

// ------- 2) Pretty-printing with indentation -------- 
/* The third argument is the number of spaces to indent.
Use it for logs and files that humans will read. */
const pretty = JSON.stringify(student, null, 2);
console.log('\n2) pretty-printed (easier to read):');
console.log(pretty);

// ------- 3) JSON --> Object -------- 
const json = '{"id":102, "name":"Omar", "age":20}';
const obj = JSON.parse(json);
console.log('\n3) parsing JSON back into an object:');
console.log(`  name: ${obj.name}`);
console.log(`  age: ${obj.age}`);

// ------- 4) Arrays of objects --------
const students = [
    { name: 'Layla', age: 19 },
    { name: 'Omar', age: 20 },
    { name: 'Sara', age: 18 },
];

const studentsText = JSON.stringify(students, null, 2);
console.log('\n4) an array of objects as JSON:');
console.log(studentsText);

const back = JSON.parse(studentsText);
console.log(`\n  parsed back; first name is: ${back[0].name}`);

// -------- 5) Important: JSON only stores plain DATA --------
/* JSON cannot store: functions, undefined, Date objects.
They get dropped or turned into strings. Only plain data can be represented in JSON. */
console.log('\n5) JSON only stores data (no functions, no undefined, no dates):');
const tricky = {
    name: 'Test',
    greet: () => 'hi', // This will be lost when converted.
    nothing: undefined, // This will also be lost when converted.
};
console.log('  original object:', tricky);
console.log(`  as JSON: ${JSON.stringify(tricky)}`);
console.log('  (greet and nothing disappear)');

console.log('\nDone.\n');