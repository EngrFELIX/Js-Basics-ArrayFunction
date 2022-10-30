
vowels = ["a", "e", "i", "o", "u"];

function vowelCount(str) {
    let vine = [];
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vine.push(str[i])
        }
    }
    return vine.reduce((acc, value) => {
        acc[value] = vine.filter((ind) => ind == value).length
        return acc;
    },{})
}
console.log(vowelCount("incredible"));
console.log(vowelCount('awesome'));