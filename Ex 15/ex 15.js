const people = [
  { name: "Alice", age: 25, city: "Wonderland" },
  { name: "Bob", age: 30, city: "Builderland" },
  { name: "Charlie", age: 35, city: "Chocolate Factory" }
];

for (const key of people) {
    for ( k in key){
            console.log(k +" : " + key[k] );

    }
                console.log("---------");

}

// const fruits = ["apple", "banana", "cherry"];
// for (const fruit of fruits) {
//     console.log("I like " + fruit);
// }
// // Output: I like apple, I like banana, I like cherry

// const person = { name: "Alice", age: 25, city: "Wonderland" };
// for (const key in person) {
//     console.log(key + ": " + person[key]);
// }
// // Output: name: Alice, age: 25, city: Wonderland
