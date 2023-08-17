// Selecting HTML elements
const btnE1 = document.querySelector(".btn");
const numberE1 = document.querySelector(".number");
const letterE1 = document.querySelector(".letter");
const characterE1 = document.querySelector(".character");
const resultE1 = document.querySelector(".result");



// Arrays of characters and letters
const characters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*'];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Adding click event listener to the button
btnE1.addEventListener("click", () => {
    let password = [];

    // Generating random numbers
    for (let i = 0; i < numberE1.value; i++) {
        let randomNum = Math.floor(Math.random() * 10);
        password.push(randomNum);
    }

    // Generating random letters
    for (let i = 0; i < letterE1.value; i++) {
        let randomLetterIndex = Math.floor(Math.random() * letters.length);
        password.push(letters[randomLetterIndex]);
    }

    // Generating random characters
    for (let i = 0; i < characterE1.value; i++) {
        let randomCharacterIndex = Math.floor(Math.random() * characters.length);
        password.push(characters[randomCharacterIndex]);
    }

    // Shuffling the password array and joining it into a string
    let shuffle_list = shuffleArray(password);
    let string_list = shuffle_list.join("");
    
    // Displaying the generated password
    resultE1.innerText = string_list;
});




function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}