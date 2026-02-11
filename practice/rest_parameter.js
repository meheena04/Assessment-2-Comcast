function summ(...numbers){
    let sum=0
    for (let num of numbers){
        sum=sum+Number(num);
    }
    return sum;
}
console.log(summ(1,2,3,4,5,6));
