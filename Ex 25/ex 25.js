
let numbers =[1,2,3,4,5,6]
let numbers2 =[7,8,9,10]

function combine(){
console.log(...numbers, ...numbers2)
};
 combine();

function restA(...numb){
    return numb.reduce((total,num)=> total * num , 1);

}
    console.log(restA(2,100));
