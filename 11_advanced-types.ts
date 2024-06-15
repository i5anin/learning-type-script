// Определение обобщенного типа TypeIsNumber, который проверяет, является ли тип T числовым
type TypeIsNumber<T> = T extends number ? 'yes' : 'no'

// Примеры использования обобщенного типа
type Type1 = TypeIsNumber<number> // Вывод типа: 'yes', так как тип number является числовым
type Type2 = TypeIsNumber<string> // Вывод типа: 'no', так как тип string не является числовым

// Определение типов TypeBrand, TypePrice и TypeCar
type TypeBrand = 'bmw' | 'mclaren' | 'mercedes' // Типы брендов автомобилей
type TypePrice = '$100000' | '$400000' | '$50000' // Типы цен на автомобили
type TypeCar = `${TypeBrand} ${TypePrice}` // Тип автомобиля, объединяющий бренд и цену

// Примеры использования типов
// @ts-ignore
const car1: TypeCar = `bmw $100000` // Правильное значение, соответствует типу TypeCar
// @ts-ignore
const car2: TypeCar = `mclaren $50000` // Ошибка компиляции, значение не соответствует типу TypeCar
