document.addEventListener("DOMContentLoaded", function() {
    const matrixText = document.getElementById("matrixText");

    function generateRandomCharacter() {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()=+[]{};:\"/?";
        const randomIndex = Math.floor(Math.random() * characters.length);
        return characters.charAt(randomIndex);
    }

    function generateRandomString(length) {
        let result = "";
        for (let i = 0; i < length; i++) {
            result += generateRandomCharacter();
        }
        return result;
    }

    function updateMatrixText() {
        matrixText.textContent = generateRandomString(10000);
    }
  
    function animateMatrix() {
        updateMatrixText();
        setTimeout(animateMatrix, 1000); // Adjust the speed of typing here
    }

    animateMatrix();
});