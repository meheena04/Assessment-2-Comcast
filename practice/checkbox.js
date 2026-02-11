const card=document.getElementById('card')
const paypal=document.getElementById('paypal')
const credit=document.getElementById('Credit')
const visa=document.getElementById('visa')
const sub=document.getElementById('submitter')
const res1=document.getElementById('res1')
const res2=document.getElementById('res2')
sub.onclick=function(){
    if (card.checked){
        res1.textContent=`card payment selected`;
    }
    else {
        res1.textContent=`please select card payment to proceed`;
    }
    if (paypal.checked){
        res2.textContent=`Paypal chosen`;
    }
    else if (credit.checked){
        res2.textContent=`credit chosen`;
    }
    else if (visa.checked){
        res2.textContent=`visa chosen`;
    }
    else{
        res2.textContent=`please select payment method`
    }
}