const sub=document.getElementById('sub');
const out=document.getElementById('out');
let dayno;
sub.onclick=function(){
    dayno=Number(document.getElementById('dayno').value);
    test.textContent=`${dayno}`;
    switch (dayno){
        case 1:
            out.textContent=`Mon`;
            break;
        case 2:
            out.textContent=`Tues`;
            break;
        case 3:
            out.textContent=`Wed`;
            break;
        case 4:
            out.textContent=`thur`;
            break;
        case 5:
            out.textContent=`Fri`;
            break;
        case 6:
            out.textContent=`Sat`;
            break;
        case 7:
            out.textContent=`Sun`;
            break; 
        default:
            out.textContent='Please enter valid day number'
    }
}