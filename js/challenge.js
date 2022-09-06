document.addEventListener("DOMContentLoaded",()=>{
    let count = 0;
    let paused = false;
    let intervalID;
    function startCount(){
        count++;
        h1 = document.getElementById("counter");
        h1.textContent = count;
    };
    intervalID = setInterval(startCount, 1000);
    const pause = document.getElementById("pause");
    pause.addEventListener("click", () =>{
        if(paused == false){
            clearInterval(intervalID);
            buttonsArray.forEach(button => disableButton(button));
            replacePause();
        }
        if(paused){
            intervalID = setInterval(startCount, 1000);
            replacePause();
            buttonsArray.forEach(button => enableButton(button));

        }
        paused = !paused;
        
    });
    const buttons = document.getElementsByTagName("button");
    let buttonsArray = [];
    for (let i = 0; i < buttons.length; i++) {
        if(buttons[i].id !=="pause"){
            buttonsArray.push(buttons[i]);
        }
    }
    function disableButton(buttons) {
        buttons.setAttribute("disabled", true);
        
    };
    function enableButton(buttons) {
        buttons.removeAttribute("disabled");
    }
    function replacePause(){
        if(!paused){
            pause.textContent = "resume";
        }
        if(paused){
            pause.textContent = "pause";
        }
        }
    });

