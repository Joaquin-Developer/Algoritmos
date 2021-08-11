
let text = "hola que tal, mi nombre es joaquín, mi edad es 19 años hace 3 años que programo!";

function normalize(word: string) {
    return word.toLowerCase().replace(",", "").replace(".", "").replace("!", "");
}

function repeatedWords(text: string) {
    let dict: {[key: string]: number} = {};
    let separatedWords = text.split(" ");

    for (let word of separatedWords) {
        if (normalize(word) in dict) {
            ++dict[normalize(word)];
        } else {
            dict[normalize(word)] = 1;
        }
    }
    console.log(dict);

}

repeatedWords(text);
