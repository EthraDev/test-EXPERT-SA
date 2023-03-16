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