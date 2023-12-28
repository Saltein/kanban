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





// ДОБАВЛЕНИЕ ПЛИТОК
let plateNumber = 0;
const addPlateBtn = document.getElementById("addPlate");   //кнопка добавления плиточки
const namePlate = document.getElementById("namePlate");




//логика
addPlateBtn.addEventListener("click", addNewPlate);

//функция добавления плитки
function addNewPlate(){
    const boardList = document.getElementById("boardList");
    //создание плиток
    const plate = document.createElement("div");

    //добавление id и классов
    plate.id = "plate" + plateNumber;
    plate.classList.add("boardPlate");

    //создание детей
    boardList.appendChild(plate);

    plate.addEventListener("click", () =>{
        alert("Эта функция еще не доступна");   
    })

    namePlate.style.display = "flex";
}


function createPlate(){
    const boardNameTextarea = document.getElementById("boardName");
    const plate = document.getElementById("plate" + plateNumber);

    plate.textContent = boardNameTextarea.value;


    namePlate.style.display = "none";
    boardNameTextarea.value = null;
    plateNumber += 1;
}
