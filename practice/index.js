/*
console.log("hello")
let per={
    name: "heena",
    age: 21
}
console.log(per.name)
console.log(per['age'])
//u can use bracket selection when the prop is not really valid
let ss='name'
console.log(per[ss])
*/

//arrays
/*
let colors=['red','blue'];
console.log(colors);
//add new at end
colors[2]='green';
console.log(colors);
//assign new 
colors[1]='purple';
console.log(colors);
//can have diff types of datatypes for elements
colors[3]=1;
console.log(colors);
//array functions
//add ele at end
colors.push('banana');
//remove last ele
colors.pop();
//add at beginning
colors.unshift('mango');
console.log(colors);
//remove beginning
colors.shift();
console.log(colors);
//print num of ele
console.log(colors.length); //can assign too instead of adding
//print index of certain num
console.log(colors.indexOf(1)); //will return -1 if no element like that
*/
//printing variables
let age=21;
let name='heena';
//use ` instead of ' " (template literal)
console.log(`my name is ${name} my age is ${age}`);