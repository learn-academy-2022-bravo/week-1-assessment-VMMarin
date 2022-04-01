// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
colors.push("indigo")

// a) Your answer: output 5
// b) Verify and explain: .push  adds "indigo" to the array thus changing the length of the array. Output is the new length. - amount of items in array


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: .length returns number of elements, (or characters) in this circumstance


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o

// b) Verify and explain: The letter o is index 4 [4]


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: index elements start at zero - first element counted as zero, then one, two, ++. In this array, "Ruby" is the second element (first index)


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain: returned not a function - error - need to loop through array to add uppercase to each string in array


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: number (initial thought is length of string)
// b) Verify and explain: Output is number - function executed the typeOf command on dataTypes. Number is the first data type.
//.length was not executed because iteration was not assigned?
