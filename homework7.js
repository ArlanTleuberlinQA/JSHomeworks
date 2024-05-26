function myIsNan(arg){
let argint = Number(arg)
return argint!==argint
}


console.log(myIsNan(NaN)); // true
console.log(myIsNan(undefined)); // true
console.log(myIsNan({})); // true

console.log(myIsNan(true)); // false
console.log(myIsNan(null)); // false
console.log(myIsNan(37)); // false

// Strings
console.log(myIsNan("37")); // false: "37" is converted to the number 37 which is not NaN
console.log(myIsNan("37.37")); // false: "37.37" is converted to the number 37.37 which is not NaN
console.log(myIsNan("37,5")); // true
console.log(myIsNan("123ABC")); // true: Number("123ABC") is NaN
console.log(myIsNan("")); // false: the empty string is converted to 0 which is not NaN
console.log(myIsNan(" ")); // false: a string with spaces is converted to 0 which is not NaN

// Dates
console.log(myIsNan(new Date())); // false; Date objects can be converted to a number (timestamp)
console.log(myIsNan(new Date().toString())); // true; the string representation of a Date object cannot be parsed as a number

// Arrays
console.log(myIsNan([])); // false; the primitive representation is "", which coverts to the number 0
console.log(myIsNan([1])); // false; the primitive representation is "1"
console.log(myIsNan([1, 2])); // true; the primitive representation is "1,2", which cannot be parsed as number