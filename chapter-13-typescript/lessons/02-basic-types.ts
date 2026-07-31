// String — text values
let username: string = 'Fatimah';
// username = 123;  ❌ Error: must be string

// Number — any number (whole or decimal)
let age: number = 26;
let price: number = 29.99;

// Boolean — true or false
let isLoggedIn: boolean = true;
let isNew: boolean = false;

// Array — list of items
let hobbies: string[] = ['Reading', 'Coding'];
let scores: number[] = [56, 0, 120, 4];

// Any — can be anything (avoid when possible)
let anything: any = 'hello';
anything = 34;
anything = true;

// ==========================================
// FUNCTION TYPES
// ==========================================

// Function with typed parameters and return
function add(a: number, b: number): number {
    return a + b;
}
// add("5", 10);  ❌ Error: "5" is string, not number

// Function with no return value
function logMessage(message: string): void {
    console.log(message);
}
// void = "this function returns nothing"