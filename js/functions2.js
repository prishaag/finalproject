document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector('.heading');
    const text = "My Projects";
    let index = 0;
    heading.textContent = "";

    function typeWriter() {
        if (index < text.length) {
            heading.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); 
        }
    }

    typeWriter();
});