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
// SIDE BAR SIDE BAR SIDE BAR SIDE BAR SIDE BAR SIDE BAR SIDE 