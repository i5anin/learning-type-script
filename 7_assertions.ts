const inputElement = document.querySelector('input') // Получаем ссылку на элемент input на веб-странице

const value1 = (inputElement as HTMLInputElement).value // Приводим inputElement к типу HTMLInputElement и получаем значение свойства "value"

const value2 = (<HTMLInputElement>inputElement).value // Альтернативный синтаксис приведения типа, также получаем значение свойства "value"

const getLength = (text: string | null) => {
    // Определяем функцию getLength с параметром text типа string или null
    return text!.length // Используем оператор "!" для утверждения, что значение text не равно null, и возвращаем длину текста
}

getLength('wenger') // Вызываем функцию getLength, передавая ей строку 'wenger'
getLength(null) // Вызываем функцию getLength, передавая ей значение null
