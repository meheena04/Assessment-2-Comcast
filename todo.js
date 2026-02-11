let tasks=[];
function addTask(){
    const task1=document.getElementById('inputtasks');
    forms();
    
}

function forms(){
    const inputs=document.getElementById('inputtasks');
    inputs.innerHTML=`<input id='content'><button id="submit" onclick="store()">submit</button>`;
}

function store(){
    const tk=document.getElementById('content');
    tasks.push(tk.value);
    console.log(tk.value);
    console.log(tasks);
    document.getElementById('inputtasks').innerHTML = "";
    display();
}

function display(){
    const distk=document.getElementById('listuh');
    distk.innerHTML=` `
    for (let i=0; i<tasks.length; i++){
        distk.innerHTML+=`<li>${tasks[i]}</li>`
        
    }
}