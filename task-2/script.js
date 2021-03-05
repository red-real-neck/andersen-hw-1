let firstValue,
    secondValue;

function start() {


    firstValue = +prompt('Введите делимое', '');
    if (firstValue) {
        secondValue = +prompt('Введите делитель', '');
    } else {
        console.log('Некорректный ввод!');
        return;
    }


    if (firstValue && secondValue) {
        console.log(`Ответ: ${firstValue + secondValue}, ${firstValue / secondValue}`)
    } else {
        console.log('Некорректный ввод!');
        return;
    }
}

start();