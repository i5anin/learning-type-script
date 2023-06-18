// Объявление переменной array как массива строк
let array: string[]

// Присваивание массиву строк значений ['1', '2']
array = ['1', '2']

// Объявление константы numbers как только для чтения массива чисел
const numbers: ReadonlyArray<number> = [0, 1, 2, 3]

// Определение пользовательского типа TypeArray как кортежа, содержащего число, строку и значение null
type TypeArray = [number, string, null]

// Инициализация переменной newArray, которая должна соответствовать типу TypeArray
const newArray: TypeArray = [7, '2', null]
