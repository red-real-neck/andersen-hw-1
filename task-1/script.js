let value,
    scaleOfNotation;

function start() {
    value = +prompt('Введите число', '');
    scaleOfNotation = +prompt('Введите систему счисления', '');
    (value && scaleOfNotation) ? console.log(value.toString(scaleOfNotation)) : console.log('Некорректный ввод!');
}

start();