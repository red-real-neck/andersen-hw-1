let firstValue,
    secondValue;

function start() {


    firstValue = +prompt('Введите первое значение', '');
    if (firstValue) {
        secondValue = +prompt('Введите второе значение', '');
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