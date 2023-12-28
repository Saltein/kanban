let columnNumber = 2;
let listTasksId = 1;


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
    block.classList.add("add");
    
    block.id = "bl_" + blockNumber;
    blockNumber++;
    container.appendChild(block);
    addEvL_toBlocks();
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
};
// SIDE BAR SIDE BAR SIDE BAR SIDE BAR SIDE BAR SIDE BAR SIDE BAR



function addEmptyTask(e){
    console.log(e);
    listTasksId = e.parentNode.id;
    console.log("blockoftasts ----------- " + listTasksId);
    const container = document.getElementById(listTasksId);
    const block = document.createElement("div");
    block.classList.add("block");
    block.id = "bl_" + blockNumber;
    block.classList.add("add");
    

    container.appendChild(block);
    addEvL_toBlocks();
    blockNumber++;
}

function addEvL_toBlocks(){
    var blocks = document.querySelectorAll(".block");
    blocks.forEach(function(e){
        e.addEventListener("click", addTask)
    });
}


// добавление задачи
function addTask(bl){
    var clickedBlockId = bl.target.id;
    const block = document.getElementById(clickedBlockId);
    

    if(block.classList.contains("add")){
        block.classList.remove("add")
        
        
        
        
        listTasksId = block.parentNode.id; // id контейнера с задачками

        let tn = "name" + listTasksId.replace(/\D/g, '');
        const taskName_parent = document.getElementById(tn);
        if (taskName_parent.value === ""){
            taskName = "Новое задание";
        }else{
            taskName = taskName_parent.value;
        }
        

        let td = "discription" + listTasksId.replace(/\D/g, '');
        const taskDisc_parent = document.getElementById(td);
        if (taskDisc_parent.value === ""){
            taskDisc = "описание";
        }else{
            taskDisc = taskDisc_parent.value;
        }
        
        
        if (block.querySelectorAll("h1").length === 0 && clickedBlockId.startsWith("bl_")){
            
            const taskN = document.createElement("h1");
            taskN.textContent = taskName;
                
            taskN.id = "taskN_" + clickedBlockId.replace(/\D/g, '');//тут шаманю
        
            block.appendChild(taskN);
            taskName_parent.value = "";

            const taskD = document.createElement("p1");
            taskD.textContent = taskDisc;

                
            taskD.id = "taskD_" + clickedBlockId.replace(/\D/g, '');//тут шаманю

            block.appendChild(taskD);
            addEmptyTask(block);
            taskDisc_parent.value = "";
        }
    }
    
    //
    if(!block.classList.contains("add")){
        block.classList.add("task")
    }
    
    if (block.classList.contains("task")){
        block.addEventListener("mousedown", function(event) {
            event.preventDefault(); // Предотвращаем выделение текста и других действий по умолчанию
            deleteBlock(block);
        })
    }    
}

let isBlockPickedUp = false;
let mouseX;
let mouseY;
let x;
let y;
var elementUnderCursor;

var flyingTask;

function deleteBlock(block){
    var parent = block.parentNode;
    let name = block.querySelector("#taskN_" + (block.id.replace(/\D/g, '')));

    let disc = block.querySelector("#taskD_" + (block.id.replace(/\D/g, '')));

    if (block && parent){
        isBlockPickedUp = true;
        console.log("isBlockPickedUp", name, disc)

        parent.removeChild(block);
    }
    flyingTask = document.createElement("div");

    flyingTask.classList.add("block");
    flyingTask.classList.add("flyingTask");
    flyingTask.id = block.id;

    father = document.getElementById("main1");
    father.appendChild(flyingTask);

    if (name) {
        flyingTask.appendChild(name);
    }else{
        alert()
    }
    if (disc) flyingTask.appendChild(disc);
}

let isOnB_O_T = false;
let lastElementUnderCursor = document.getElementById("blockOfTasks1");

document.addEventListener("mousemove", (e) =>{
    if (isBlockPickedUp){
        mouseX = e.pageX;
        mouseY = e.pageY;
        
        flyingTask.style.top = `${mouseY}px`;
        flyingTask.style.left = `${mouseX}px`;

        flyingTask.style.opacity = 1;

        const x = e.clientX;
        const y = e.clientY;

        elementUnderCursor = document.elementFromPoint(x, y);
        

        if (elementUnderCursor.classList.contains("b_o_t")){
            isOnB_O_T = true;
            lastElementUnderCursor = elementUnderCursor;

        }else{
            isOnB_O_T = false;
        }
    }
    
})
document.addEventListener("mouseup", () =>{
    if (flyingTask){
        isBlockPickedUp = false;
        console.log("isBlockPickedUp", isBlockPickedUp);
        var cloneBlock = flyingTask;
        if (cloneBlock.classList.contains("flyingTask")){
            cloneBlock.classList.remove("flyingTask");
        }
        cloneBlock.classList.add("task")
        if (isOnB_O_T){
            elementUnderCursor.appendChild(cloneBlock);
            flyingTask.style.position = "relative";
            flyingTask.style.top = 0;
            flyingTask.style.left = 0;
            elementUnderCursor.appendChild(lastElementUnderCursor.querySelector(".add"));
        }else{
            lastElementUnderCursor.appendChild(cloneBlock);
            flyingTask.style.position = "relative";
            flyingTask.style.top = 0;
            flyingTask.style.left = 0;
            lastElementUnderCursor.appendChild(lastElementUnderCursor.querySelector(".add"));
        }
    }

})