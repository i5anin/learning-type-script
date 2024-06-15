function entity<T>(args: T): T {
    return args
}

// Примеры вызова функции

// Вызов функции `entity<number>(1)`.
// Аргумент типа `number` передается в функцию.
// Функция возвращает аргумент того же типа, т.е. число 1.
const result1 = entity<number>(1)
console.log(result1) // Вывод: 1

// Вызов функции `entity<string>('1')`.
// Аргумент типа `string` передается в функцию.
// Функция возвращает аргумент того же типа, т.е. строку '1'.
const result2 = entity<string>('1')
console.log(result2) // Вывод: '1'

const entity2 = <T>(args: T): T => {
    return args
}

console.log(result1)
console.log(result2)

class Channel<T> {
    private name: T

    constructor(name: T) {
        this.name = name
    }

    getName(): T {
        return this.name
    }
}

// Класс `Channel` является обобщённым, параметризованным типом.
// Он имеет типовой параметр `T`, который может быть заменён на конкретный тип при создании экземпляра класса.

// Создание экземпляра класса `Channel` с типовым параметром `T`.
// Параметр `name` в конструкторе принимает значение типа `T`.
// Метод `getName` возвращает значение типа `T`.

new Channel<string>('RED Group')
new Channel<number>(7)

interface IPair<K, V> {
    key: K
    value: V
}

const pair1: IPair<string, number> = {
    key: '1',
    value: 7,
}

const pair2: IPair<string, string> = {
    key: '1',
    value: '1',
}
// @ts-ignore
function getNameLength<T extends TypeLength>(entity: T): number {
    return entity.length
}
getNameLength('wrefgw')
getNameLength([0, 1, 2])
