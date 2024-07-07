document.addEventListener("DOMContentLoaded", function() {
    const typingText = document.querySelector('.typing-text');
    const texts = ["Web Development", "Software Development","Frontend development","Web Designing"];
    let textIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < texts[textIndex].length) {
            typingText.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 150);
        } else {
            setTimeout(erase, 2000);
        }
    }
    
    function erase() {
        if (charIndex > 0) {
            typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 100);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 150);
        }
    }

    setTimeout(type, 1500);
});
