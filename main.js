let columnNumber = 2;
function addNewColumn(){
    if (columnNumber < 11){
        const container = document.getElementById("main1");


        //создание элементов
        const column = document.createElement("div");
        const name = document.createElement("p");
        const block = document.createElement("div");

        const textDiv = document.createElement("div");
        const textA1 = document.createElement("textarea");
        const textA2 = document.createElement("textarea");
        

        //добавление атрибутов
        column.className = "column";
        column.id = "col" + columnNumber;

        block.id = "blockOfTasks" + columnNumber;
        block.className = "b_o_t";

        textDiv.className = "txt";
        textDiv.id = "txt" + columnNumber;

        textA1.rows = "1";
        textA1.className = "taskName";
        textA1.id = "taskName" + columnNumber;
        textA1.placeholder = "Название задачи";

        textA1.className = "taskDesc";
        textA1.id = "taskDesc" + columnNumber;
        textA1.placeholder = "Описание задачи";

        //наполнение текстом
        name.textContent = "новый абоберт";
                    

        //создание детей
        container.appendChild(column);

        column.appendChild(name);
        column.appendChild(block);
        column.appendChild(textDiv);

        textDiv.appendChild(textA1);
        textDiv.appendChild(textA2);
                

        //остальное
        columnNumber++;
        autoAddEmptyTask();
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
};

function addEmptyTask(e){
    console.log(e);
    let listTasksId = e.parentNode.id;
    console.log(listTasksId);
    const container = document.getElementById(listTasksId);
    const block = document.createElement("div");
    block.classList.add("block");
    block.id = "bl_" + blockNumber;
    blockNumber++;
    container.appendChild(block);
    addEvL_toBlocks();
}

function addEvL_toBlocks(){
    var blocks = document.querySelectorAll(".block");
    blocks.forEach(function(e){
        e.addEventListener("click", addTask);
    })
}

function addTask(bl){
    var clickedBlockId = bl.target.id;
    console.log(clickedBlockId);

    console.log("bl ----- ",clickedBlockId, bl)
    const block = document.getElementById(clickedBlockId);
    if (block.querySelectorAll("h1").length === 0 && clickedBlockId.startsWith("bl_")){
        const task = document.createElement("h1");
        task.textContent = "Название задачи";
        task.id = "task_" + blockNumber;
    
        block.appendChild(task);
        addEmptyTask(block);
    }    
}