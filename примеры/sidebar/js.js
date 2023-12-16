const sideBar = document.getElementById("sidenav-open");
const sideOpen = document.getElementById("sidenav-button");
const sideClose = document.getElementById("sidenav-close");

sideBar.addEventListener("transitionend", () => {
    const isOpen = window.location.hash === "#sidenav-open";
    if(isOpen){
        sideClose.focus();   
    }
    else{
        sideOpen.focus();
    } 
})

sideBar.addEventListener("keyup", (e) => {
    if(e.code === "Escape"){
        window.history.back();
    }
})