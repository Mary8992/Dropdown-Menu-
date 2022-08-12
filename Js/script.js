let profile = document.querySelector('.profile');
//let menu = document.getElementsByClassName('menu');
profile.addEventListener('click',ToggleMenu);

function ToggleMenu() {
    const togglemenu = document.querySelector('.menu');
    togglemenu.classList.toggle('active');
}