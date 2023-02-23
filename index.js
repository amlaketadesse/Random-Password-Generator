// // const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// // "/"];

// var characters = `0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ`

// let generateButton = document.getElementById("generate__button")
// let passwordOne = document.getElementById("password__box--one")
// let passwordTwo = document.getElementById("password__box--two")

// let password = '';
// let passwordLength = 5;

// function generate() {
        
//         for (let i = 0; i < passwordLength; i++) {
//             let randomNumberOne =   Math.floor ( Math.random() * characters.length );
//             let randomNumberTwo =   Math.floor ( Math.random() * characters.length );
//             password += characters.substring(randomNumberOne, randomNumberOne +1)
//             passwordOne.textContent += characters[randomNumberOne].slice(1, 2);
//             passwordTwo.textContent += characters[randomNumberTwo];
            
//     }
    
// }

let generateButton = document.getElementById("generate__button")
let passwordOne = document.getElementById("password__box--one")
let passwordTwo = document.getElementById("password__box--two")

function generate() {
   let characters = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   let passwordLength = 10;
   let password = "";
   let passwordSecond = "";
    for (let i = 0; i <= passwordLength; i++) {
            let randomNumber = Math.floor(Math.random() * characters.length);
            let randomNumberTwo = Math.floor(Math.random() * characters.length);
            password += characters.substring(randomNumber, randomNumber +1);
            passwordSecond += characters.substring(randomNumberTwo, randomNumberTwo +1);
        }
        passwordOne.textContent = password;
        passwordTwo.textContent = passwordSecond;
}
