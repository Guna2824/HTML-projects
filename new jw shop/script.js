document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navItem = document.querySelector('.toggleNav');

    menuIcon.addEventListener('click', function() {
        navItem.classList.toggle('active');
    });
});
// let navItem = document.querySelector('navitem');
// let menuIcon =document.getElementById('menu-icon');
// menuIcon.addEventListener("click",function(){
//     navItem.classList.toggle('active');

// });


