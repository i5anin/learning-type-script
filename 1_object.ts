// Определение пользовательского типа TypeUser
// @ts-ignore
type TypeUser = {
    name: string // Свойство name типа string
    age: number // Свойство age типа number
    email: string // Добавили свойство email
};

// Определение пользовательского типа TypeAddress
type TypeAddress = {
    city: string // Свойство city типа string
    country: string // Свойство country типа string
};

// Создание переменной user с типом TypeUser
// @ts-ignore
const user: TypeUser = {
    age: 24, // Значение свойства age равно 24
    name: 'Max', // Значение свойства name равно 'Max'
    email: 'max@example.com', // Добавили email
}

// Создание переменной address с типом TypeAddress
const address: TypeAddress = {
    city: 'SPB', // Значение свойства city равно 'SPB'
    country: 'Russia', // Значение свойства country равно 'Russia'
}

// Создание переменной common с типом TypeUser & TypeAddress
let common: TypeUser & TypeAddress

// Присваивание переменной common значения, полученного путем объединения свойств user и address
common = { ...user, ...address }

console.log(common)