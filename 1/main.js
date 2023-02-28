// 1.1. Преобразование строки к нижнему регистру, но первая буква большая.
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// 1.2. Преобразование строки с целью правильно расстановки пробелов.
function stripSpacesMarks(string){
    return string.replaceAll(/ * /g, ' ')
        .replaceAll(/ (?=[.,!:?])/g, '')
        .replaceAll(/(?<=[.,!:?])(?! )/g, ' ')
        .replace(/ $/, '')
}

// 1.3. Посдчитывающие кол-во слов в строке.
function numberOfWords(string){
    return stripSpacesMarks(string).split(' ').length
}

// 1.4. Подсчитывающий, уникальные слова.
function numberOfUniqueWords(string){
    let wordsArray = stripSpacesMarks(string)
        .replaceAll(/[.,!:?]/g, '')
        .toLowerCase()
        .split(' ');

    let uniqueWords = {};

    for (let element in wordsArray) {
        let elementValue = wordsArray[element];

        if (elementValue in uniqueWords) {
            uniqueWords[elementValue]++
        } else {
            uniqueWords[elementValue] = 1
        }

    }

    return uniqueWords

}


// Примеры работы функций
let string = 'пРиВеТ  , пРекрАСный ,чарУЮщий   мИр    .';
let string2 = 'Текст, в котором слово текст несколько раз встречается и слово тоже. Текст, текст, текст!';

console.log(capitalize(string));
console.log(stripSpacesMarks(string));
// console.log(capitalize(stripSpacesMarks(string)));
console.log(numberOfWords(string));
console.log(numberOfUniqueWords(string2));