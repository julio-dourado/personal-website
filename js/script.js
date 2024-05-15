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


document.getElementById("download-cv-btn").addEventListener("click", function() {
    var link = document.createElement("a");
    link.href = "./../cv/cv.pdf";
    link.download = "julio-dourado-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
