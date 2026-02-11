let radi;
const pi=3.14;
let circum;
document.getElementById('submit').onclick=function(){
    radi=document.getElementById("radius").value;
    circum=2*pi*radi;
    console.log(radi)
    console.log(circum)
    document.getElementById('cir').textContent=circum;
}