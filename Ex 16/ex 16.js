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
