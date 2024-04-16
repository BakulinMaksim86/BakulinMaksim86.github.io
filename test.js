// Получаем доступ к HTML элементу
const valueOne = document.getElementById(`valueOne`)
const valueTwo = document.getElementById(`valeuTwo`)
const button = document.querySelector(`.btn`)
const result = document.querySelector(`result`)

// Добавляем прослушку события нажатия на кнопку
button.addEventListener(`click`, () => {
    // Знак плюса перед строковым типом сделает перевод в числовой тип  
    const intValue1 = +valueOne.value
    const intValue2 = +valueTwo.value

    // innerHTML - Внутреннее содержимое HTML элемента
    result.innerHTML = `Результат: ${intValue1 * intValue2}`
})
