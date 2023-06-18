// Определение пользовательского типа TypeChannelReturn
type TypeChannelReturn = {
    name: string // Свойство name типа string
}

// Функция getChannel, возвращающая объект типа TypeChannelReturn
function getChannel(name: string): TypeChannelReturn {
    return { name } // Возвращается объект с указанным свойством name
}

// Определение пользовательского типа TypeChannelFunction
type TypeChannelFunction = (name: string) => TypeChannelReturn

// Создание переменной getChannelName с типом TypeChannelFunction
const getChannelName: TypeChannelFunction = (name) => {
    return { name } // Возвращается объект с указанным свойством name
}

// Функция getNumbers, принимающая произвольное количество аргументов типа number и возвращающая массив чисел
const getNumbers = (...numbers: number[]) => {
    return numbers // Возвращается массив чисел
}

// Функциональные перегрузки
// Указываем сигнатуры функции до её вызова и реализации для принятия разных аргументов
function getCar(name: string): string // Сигнатура функции для одного аргумента типа string
function getCar(name: string, price: number): string // Сигнатура функции для двух аргументов: string и number
function getCar(name: string, price?: number): string {
    return price ? `Название ${name}, Цена ${price}` : `Название ${name}` // Возвращается строка с информацией о машине
}

const car1 = getCar('bmw') // Название bmw
const car2 = getCar('bmw', 100000) // Название bmw, Цена 100000
// const car3 = getCar('bmw', 100000, 'rwegf'); // Ошибка компиляции: несоответствие количества аргументов сигнатуре функции
