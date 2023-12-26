let columnNumber = 2;
let listTasksId = 1;
var holdTimer;
var mousePosX;
var mousePosY;
var isPickedUp;


function lerp(start, end, amt){
    return (1 - amt)*start + amt*end;
}


document.addEventListener("keydown", (e) => {
    if (document.activeElement === document.getElementById("columnName") && e.code === "Enter"){
        addNewColumn();
        e.preventDefault();
    }
})



function addNewColumn(){
    if (columnNumber < 11 && !(document.getElementById("columnName").value === "")){
        const container = document.getElementById("main1");


        //создание элементов
        const column = document.createElement("div");
        const name = document.createElement("p");
        const block = document.createElement("div");
        const txtblock = document.createElement("div");
        const nameTA = document.createElement("textarea");
        const discTA = document.createElement("textarea");
            
        column.className = "column";
        column.id = "col" + columnNumber;

        block.id = "blockOfTasks" + columnNumber;
        block.className = "b_o_t";
        txtblock.id = "txt" + columnNumber;
        txtblock.className = "txt";
        nameTA.className = "Name";
        nameTA.id = "name" + columnNumber;
        nameTA.rows = "1";
        nameTA.placeholder = "Название задачи";
        discTA.className = "Discription";
        discTA.id = "discription" + columnNumber;
        discTA.placeholder = "Описание";

        //наполнение текстом
        const textTA = document.getElementById("columnName");
        name.textContent = textTA.value;
        textTA.value = null;

                    

        //создание детей
        container.appendChild(column);
        column.appendChild(name);
        column.appendChild(block);
        column.appendChild(txtblock);
        txtblock.appendChild(nameTA);
        txtblock.appendChild(discTA);
                

        //остальное
        columnNumber++;
        autoAddEmptyTask();
    }
    else if(document.getElementById("columnName").value === ""){
        alert("Название колонки не может быть пустым");
    }
    else if(columnNumber > 10){
        alert("Колонок не может быть больше 10");
    }
}

let blockNumber = 0;

document.addEventListener("DOMContentLoaded", autoAddEmptyTask()) 
function autoAddEmptyTask() {
    const container = document.querySelector("#blockOfTasks" + (columnNumber-1));
    const block = document.createElement("div");
    block.classList.add("block");
    block.id = "bl_" + blockNumber;
    blockNumber++;
    container.appendChild(block);
    addEvL_toBlocks();

    clearInterval(holdTimer);
};




// SIDE BAR SIDE BAR SIDE BAR SIDE BAR SIDE BAR SIDE BAR SIDE BAR
const sideBar = document.getElementById("sidenav");
const menuButton = document.getElementById("menuButt");
const closeSide = document.getElementById("closeSide");

var isSidebarOpen = false;

closeSide.addEventListener("click", function(){
    openSide();
})

menuButton.addEventListener("click", openSide)

function openSide() {
    
    isSidebarOpen = !isSidebarOpen;
    if (isSidebarOpen === true){
        sideBar.style.left = '0px';
        closeSide.style.display = 'flex';
        closeSide.style.backdropFilter = 'blur(5px)';
    } else{
        sideBar.style.left = "-300px"
        closeSide.style.display = 'none';
        closeSide.style.backdropFilter = 'blur(0px)';
    }
    clearInterval(holdTimer);
};




function addEmptyTask(e){
    console.log(e);
    listTasksId = e.parentNode.id;
    console.log("blockoftasts ----------- " + listTasksId);
    const container = document.getElementById(listTasksId);
    const block = document.createElement("div");
    block.classList.add("block");
    block.id = "bl_" + blockNumber;
    blockNumber++;
    container.appendChild(block);
    addEvL_toBlocks();
    clearInterval(holdTimer);
}

function addEvL_toBlocks(){
    var blocks = document.querySelectorAll(".block");
    blocks.forEach(function(e){
        e.addEventListener("click", addTask);
    })
}


var chosenBlock;

// добавление задачи
function addTask(bl){
    clearInterval(holdTimer);
    var clickedBlockId = bl.target.id;
    const block = document.getElementById(clickedBlockId);
    listTasksId = block.parentNode.id;

    let tn = "name" + listTasksId.replace(/\D/g, '');
    const taskName_parent = document.getElementById(tn);
    const taskName = taskName_parent.value;

    let td = "discription" + listTasksId.replace(/\D/g, '');
    const taskDisc_parent = document.getElementById(td);
    const taskDisc = taskDisc_parent.value;
    
    if (block.querySelectorAll("h1").length === 0 && clickedBlockId.startsWith("bl_")){
        if (taskName !== "" && taskDisc !== ""){
            const taskN = document.createElement("h1");
            taskN.textContent = taskName;
            taskN.id = "task_" + blockNumber;
   
            block.classList.add("task");
            block.appendChild(taskN);

            block.addEventListener("mousedown", () => {
                chosenBlock = block;
                chosenBlock.style.position = "absolute";
                isPickedUp = true;
                console.log("isPickedUp: " + isPickedUp + " " + chosenBlock.id);
                holdTimer = setInterval(follow, 100);
            });
            block.addEventListener("mouseup", () => {
                clearInterval(holdTimer);
                chosenBlock = NaN;
                chosenBlock.style.position = "relative";
                isPickedUp = false;
                console.log("isPickedUp: " + isPickedUp);
            });
        

            taskName_parent.value = "";

            const taskD = document.createElement("p1");
            taskD.textContent = taskDisc;
            taskD.id = "task_" + blockNumber;
    
            block.appendChild(taskD);
            addEmptyTask(block);
            taskDisc_parent.value = "";
        }
        else if (taskName === ""){
            alert("Название задачи не может быть пустым");
        }
        else if (taskDisc === ""){
            alert("Описание задачи не может быть пустым");
        }
    }
}

document.addEventListener("mousemove", function(e) {
    if (isPickedUp && chosenBlock) {
        mousePosX = Math.floor(e.pageX / 1);
        mousePosY = Math.floor(e.pageY / 1);
    }
});

function follow() {
    if (isPickedUp && chosenBlock) {
        let blockTop = parseFloat(chosenBlock.style.top) || 0;
        let blockLeft = parseFloat(chosenBlock.style.left) || 0;

        // Используйте lerp для более плавного движения
        chosenBlock.style.top = lerp(blockTop, mousePosY, 0.9) + 'px';
        chosenBlock.style.left = lerp(blockLeft, mousePosX, 0.9) + 'px';
    } 
    else {clearInterval(holdTimer);}
}