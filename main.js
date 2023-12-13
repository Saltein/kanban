let columnNumber = 2;
function addNewColumn(){
    if (columnNumber < 11){
        const container = document.getElementById("main1");
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
        discTA.id = "discription1" + columnNumber;
        discTA.placeholder = "Описание";

        name.textContent = "новый абоберт";

                    
        container.appendChild(column);
        column.appendChild(name);
        column.appendChild(block);
        column.appendChild(txtblock);
        txtblock.appendChild(nameTA);
        txtblock.appendChild(discTA);
                
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