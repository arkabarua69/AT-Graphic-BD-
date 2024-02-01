let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar")

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 3000 ,
    delay: 500,
    reset: true
});

sr.reveal('.herotext',{delay:200, origin:'top'});
sr.reveal('.mylogo',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'})
sr.reveal('.scroll',{delay:500, origin: 'right'})
