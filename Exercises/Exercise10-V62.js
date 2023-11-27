const adjectives = [
    "Crazy",
    "Amazing",
    "Fire"
]
const shop_name = [
    "Engine",
    "Foods",
   "Garments"
]
const other_words = [
    "Bros",
    "Limited",
    "Hub"
]
function random_words_picker() {
    const option1 = Math.floor(Math.random() * 3);
    const option2 = Math.floor(Math.random() * 3);
    const option3 = Math.floor(Math.random() * 3);
    console.log(adjectives[option1],shop_name[option2],other_words[option3])
}
random_words_picker()