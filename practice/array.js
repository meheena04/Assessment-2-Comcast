
const fruits=[ 
    {name:"coconut", color:"white", cal: "169"},
    {name:"apple", color:"white", cal: "180"},
    {name:"banana", color:"white", cal: "79"},
    {name:"strawberry", color:"white", cal: "100"},
]
arr=fruits.slice(1,3);
console.log(arr);
arr.pop();
console.log(arr);
console.log(fruits);

fruits.forEach(fruit=>console.log(fruit.name));

fruitnames=fruits.map(fruit=> fruit.name);
console.log(fruitnames);

lowcal=fruits.filter(fruit=> fruit.cal<=130);
console.log(lowcal);

//map function
const grades=[88, 75, 92, 96, 85];
let bonusgrades=grades.map((grade)=>{
    grade=grade+5;
    if (grade>100){
        return 100;
    }
    else{
        return grade;
    }
})
console.log(bonusgrades);

//filter function
let achievers=bonusgrades.filter((grade)=>grade>90);
console.log(achievers);

//reduce array.reduce(accumulator, currval, index, array, intialval)  ---->last 3 optional 
const classtotal=bonusgrades.reduce((total,grade)=>total+grade);
console.log(classtotal);
//flatmap() map()+flat() ---> [1,2,3]<===[[1],[2],[3]]


//2 functions applied to same array of objects
arr=fruits.map(fruit=>Number(fruit.cal)).filter(cal=>cal>100);

function add(x=1, y=2){
    return x+y;
}
s=add(4,5);
console.log(s);

var arr=[['hi']];
var arr1=arr.slice(0);
arr1[0].push('heena');
console.log(arr1, arr)

//currying
let name=
    fn=>
        ln=>
        
            fn + ln + 'hello';
//console.log(name('heena')('mehjabeen'));

let heena=name('heena');
console.log(heena('mehjabeen'));
