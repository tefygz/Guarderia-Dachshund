/* Menu */
((d)=>{
    const $btnMenu =d.querySelector(".menu-btn"),
        $menu = d.querySelector(".menu");
    
    $btnMenu.addEventListener("click", (e)=>{
     $btnMenu.firstElementChild.classList.toggle("none");
     $btnMenu.lastElementChild.classList.toggle("none");
     $menu.classList.toggle("is-active");
    });
    /* rutina: que detecte que si hago click se cierre el menu. delegacion de eventos, delegando el click a unelemento superior en este caso el document */
    d.addEventListener("click", e=>{
        if(!e.target.matches(".menu a")) return false;
    
        /* evaluar cual es elemento q detona el click, target el objeto q origina el ebento, mathces se le pasa un selector valido */
        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
    });
    })(document);
