document.addEventListener('DOMContentLoaded', function () {
    const hiThereElement = document.querySelector('.hithere');
    const textToType = "Hey there!";
    const typingSpeed = 300;
    function typeText() {
        let charIndex = 0;
        hiThereElement.textContent = ''; 
        const intervalId = setInterval(function () {
            hiThereElement.textContent += textToType[charIndex];
            charIndex++;
            if (charIndex === textToType.length) {
                clearInterval(intervalId);
            }
        }, typingSpeed);
    }
    setTimeout(typeText, 500); 
});

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');

    const animationDuration = 500;
    function animateButtonWidth(button) {
        let startTime;

        function animate(time) {
            if (!startTime) startTime = time;

            const progress = time - startTime;
            const percentage = Math.min(progress / animationDuration, 1);
            const widthPercentage = percentage * 100;

            button.style.background = `linear-gradient(to right, white ${widthPercentage}%, pink ${widthPercentage}%)`;

            if (percentage < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }
    buttons.forEach(function (button) {
        button.addEventListener('mouseover', function () {
            animateButtonWidth(button);
        });

        button.addEventListener('mouseout', function () {
            button.style.background = 'pink'; 
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const projectBoxes = document.querySelectorAll('.projects-box');
    projectBoxes.forEach(function (box) {
        box.addEventListener('mouseover', function () {
            box.style.transform = 'scale(1.05)';
            box.style.transition = 'transform 0.3s ease';
        });
        box.addEventListener('mouseout', function () {
            box.style.transform = 'scale(1)';
            box.style.transition = 'transform 0.3s ease';
        });
    });
});










