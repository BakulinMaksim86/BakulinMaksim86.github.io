// получаем доступ к HTML элементам
const display = document.getElementById(`display`)
const clearButton = document.getElementById(`clear`)
const equalsButton = document.getElementById(`equals`)

// Получить массив из кнопок
const buttons = document.querySelectorAll(`.btn`)

buttons.forEach((button) => {
    button.addEventListener(`click`, () => {
        const value = button.innerHTML
        display.value += value
    })
})


clearButton.addEventListener(`click`, () => {
    display.value = ``
})


// Вычисление значения
equalsButton.addEventListener(`click`, () => {
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = `Ошибка ${error.message}`
    }
})