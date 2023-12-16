function printText(){
    var text = "Я самопечатающийся дфлытвлдфыьвдфыьвдьфыдвь";
    var delay = 100;
    var elem = document.getElementById("text");
    print_text = function(text, delay, elem){
        if(text.length > 0){
            elem.innerHTML += text[0];
            setTimeout(function(){
                print_text(text.slice(1), delay, elem)
            }, delay);
        }
    }
    print_text(text, delay, elem);
}


function printTime(){
    const timer = document.getElementById("time")
    function updateTime(){
        const now = new Date();
        timer.textContent = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
     
    }
    setInterval(updateTime, 1000);
}
