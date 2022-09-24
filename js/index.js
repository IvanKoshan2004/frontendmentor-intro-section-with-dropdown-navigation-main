(function(){
    let openMenuButtonElement = document.querySelector(".nav-container__menu-icon");
    let closeMenuButtonElement = document.querySelector(".nav-container__exit-icon");
    let menuElement = document.querySelector(".nav-container__items-container");
    let menuViewBlockerElement = document.querySelector(".menu-view-blocker");
    let navBarExpandElements = document.querySelectorAll(".nav-container__items-label");
    let bodyElement = document.querySelector("body");
    //event listeners
    openMenuButtonElement.addEventListener("click", openMenu);
    closeMenuButtonElement.addEventListener("click", closeMenu);
    navBarExpandElements.forEach(element => {
        element.addEventListener("click", activateNavBarLinks);
    });

    window.addEventListener("resize", windowResizeEvent);

    
    //debug

    // let allElements = document.body.querySelectorAll('*');
    // let debugCounter = 0;
    // allElements.forEach(element => {
    //     element.addEventListener("click", debugClick);
    // });
    // function debugClick(event) {
    //     console.log(++debugCounter + " Inflicted by ");
    //     console.log(event.currentTarget);
    // }

    //functions
    function openMenu() {
        menuElement.classList.add("active");
        menuViewBlockerElement.classList.add("active");
        bodyElement.classList.add("unscrollable");      
    }

    function closeMenu() {
        menuElement.classList.remove("active");
        menuViewBlockerElement.classList.remove("active");            
        bodyElement.classList.remove("unscrollable");      
    }

    function activateNavBarLinks(event){
        let parent = event.currentTarget.parentElement;
        let list = parent.querySelector(".nav-dropdown");
        let arrow = parent.querySelector(".nav-container__items-label-arrow");
        let isActive = list.classList.contains("active");
        if (isActive) {
            list.classList.remove("active");
            arrow.classList.remove("active");
        }
        else {
            list.classList.add("active");
            arrow.classList.add("active");
        }
    }   
    function windowResizeEvent(event){
        if (window.innerWidth > 768) {
            let menuActive = menuElement.classList.contains("active");
            if (menuActive) {
                closeMenu();
            }
        }
    }
})();

