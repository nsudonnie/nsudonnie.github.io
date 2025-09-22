const parent = document.getElementById("parent");
const container = parent.querySelector("#container");

const now = new Date();
const month = now.getMonth(); // 0 indexed (0-11)

 if (month == 8 || month == 9 || month == 10) { // autumn

    parent.style.backgroundImage = "url(https://nsudonnie.github.io/assets/leaves-falling.gif)"
    container.style.backgroundColor = "rgb(255, 214, 165)"

} else if (month == 11 || month == 0 || month == 1) { // winter

    parent.style.backgroundImage = "url()" // fill with falling snow gif
    container.style.backgroundColor = "rgb(181, 233, 255)"

} else if (month == 2 || month == 3 || month == 4) { // spring

    parent.style.backgroundImage = "url()" // fill with flower gif
    container.style.backgroundColor = "rgb(195, 255, 181)"

} else if (month == 5 || month == 6 || month == 7) { // summer

    parent.style.backgroundImage = "url()" // fill with sunshine gif
    container.style.backgroundColor = "rgb(255, 251, 181)"

}