console.log('heena')
const num=document.getElementById('num');
let count=0;
document.getElementById('dec').onclick=function(){
    count--;
    num.textContent=count;
}
document.getElementById('inc').onclick=function(){
    count++;
    num.textContent=count;
}
document.getElementById('reset').onclick=function(){
    count=0;
    num.textContent=count;
}