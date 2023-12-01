let Busineess_Option1 = "Hi";
let Busineess_Option2 = "Hi";
let Busineess_Option3 = "Hi";
function random_words_picker() {
    const option1 = Math.floor(Math.random() * 3);
    const option2 = Math.floor(Math.random() * 3);
    const option3 = Math.floor(Math.random() * 3);
    if (option1 == 0) {
        Busineess_Option1 = "Crazy";
    } else if (option1 == 1) {
        Busineess_Option1 = "Amazing";
    } else if (option1 == 2) {
        Busineess_Option1 = "Fire";
    }

    if (option2 == 0) {
        Busineess_Option2 = "Engine";
    } else if (option2 == 1) {
        Busineess_Option2 = "Foods";
    } else if (option2 == 2) {
        Busineess_Option2 = "Garments";
    }

    if (option3 == 0) {
        Busineess_Option3 = "Bros";
    } else if (option3 == 1) {
        Busineess_Option3 = "Limited";
    } else if (option3 == 2) {
        Busineess_Option3 = "Hub";
    }
}
random_words_picker()
console.log(Busineess_Option1,Busineess_Option2,Busineess_Option3)
