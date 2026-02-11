function rollDice(){
    const count=Number(document.getElementById('noofdice').value);
    const diceresult=document.getElementById('diceresult');
    const diceend=document.getElementById('diceend');
    const values=[];
    const images=[];

    for (let i=0; i<count;i++){
        const val=Math.floor(Math.random()*6)+1
        values.push(val);
        console.log(val);
        images.push(`<img src='${val}.png'>`);
    }
    diceresult.textContent=`Dice result: ${values.join(', ')}`;
    diceend.innerHTML=images.join('')
}