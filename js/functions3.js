document.addEventListener("DOMContentLoaded", function () {
    const interestsHeading = document.querySelector('.heading');
    const interestsText = "My Interests";
    let interestsIndex = 0;
    interestsHeading.textContent = "";

    function typeWriter() {
        if (interestsIndex < interestsText.length) {
            interestsHeading.textContent += interestsText.charAt(interestsIndex);
            interestsIndex++;
            setTimeout(typeWriter, 100); 
        }
    }
    typeWriter();
});