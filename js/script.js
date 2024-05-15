document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const optionMenu = document.getElementById('option-menu');

    menuBtn.addEventListener('click', function() {
        if (optionMenu.style.display === 'none' || optionMenu.style.display === '') {
            optionMenu.style.display = 'block';
        } else {
            optionMenu.style.display = 'none';
        }
    });
});
