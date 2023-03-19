let equipe = document.querySelector('.equipe');
let meeting = document.querySelector('.meeting');

equipe.addEventListener("mouseover", function() {
    equipe.setAttribute('src', 'img/photo-accueil-header-equipe-cabinet-gsexpertise-hover.png')
});

equipe.addEventListener("mouseout", function() {
    equipe.setAttribute('src', 'img/photo-accueil-header-equipe-cabinet-gsexpertise.png')
});

meeting.addEventListener("mouseover", function() {
    meeting.setAttribute('src', 'img/photo-accueil-cabinet-meeting-hover.png')
});

meeting.addEventListener("mouseout", function() {
    meeting.setAttribute('src', 'img/photo-accueil-cabinet-meeting.png')
});


if(screen.width <= 640) {

    function $(cible){
        return document.querySelectorAll(cible)[0];
    }
    
    let img = document.querySelector(".img-burger");
    let div = document.querySelector("#menu");
    
    
    function menuOuvre(evt) { 
    
        div.style.right = "10%";
        div.style.display = "flex";
        evt.stopPropagation();
    }
    
    function menuFerme() {
        div.style.right = "-200px"
        div.style.display = "none";
    }
    
    function stop(evt) {
        evt.stopPropagation();
    }

    img.addEventListener("click", menuOuvre, false);
    window.addEventListener("click", menuFerme, false);
    img.addEventListener("click", stop, false)
}