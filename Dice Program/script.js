let add_Dice_Button = document.getElementById("Add-dice-but");
let remove_Dice_Button = document.getElementById("Remove-dice-but");
let generate_Dice_Button = document.getElementById("Generate-dice-but"); 

let dice_Value_H2 = document.getElementById("dice-value-h2");

let number_of_Dices = 1;
let total_Dice_Value = 1;

let dice_Images = document.querySelectorAll(".dice-images");


generate_Dice_Button.onclick = function() {
    total_Dice_Value = 0;

    dice_Images.forEach((dice_Image) => {

        if (dice_Image.dataset.value != 0) {
            let random_Dice_Number = Math.floor(Math.random() * 6) + 1;

            ImageDataModifier(dice_Image, random_Dice_Number, random_Dice_Number, random_Dice_Number, "block");

            total_Dice_Value += random_Dice_Number;
        }
    })

    dice_Value_H2.textContent = total_Dice_Value;
}

add_Dice_Button.onclick = function() {
    if (number_of_Dices < 6) {
        number_of_Dices++;
        console.log(`There are ${number_of_Dices} dices`)

        dice_Images.forEach((dice_Image) => {
            if (dice_Image.dataset.value == 0 && dice_Image.dataset.dice == number_of_Dices) {
                ImageDataModifier(dice_Image, 1, 1, 1, "block");

                total_Dice_Value++;
            }
        })
        dice_Value_H2.textContent = total_Dice_Value;
    }
}

remove_Dice_Button.onclick = function() {
    if (number_of_Dices > 1) {
      
        dice_Images.forEach((dice_Image) => {
            if (dice_Image.dataset.dice == number_of_Dices) {
                total_Dice_Value -= dice_Image.dataset.value;
                
                ImageDataModifier(dice_Image, 0, 0, 0, "none");
            }
        })
        number_of_Dices--;
        dice_Value_H2.textContent = total_Dice_Value;
    }
}


function ImageDataModifier(image, srcNum, altNum, value, display) {
    image.src = `Assets/Dice${srcNum}.png`;
    image.alt = `Dice Number ${altNum}`;
    image.dataset.value = value;
    image.style.display = display;
}