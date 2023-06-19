// Функция-декоратор `LogClass` принимает один аргумент - конструктор класса.
// В данном случае, при применении декоратора `LogClass` к классу `Plane`,
// будет выполнена функция `console.log`, которая выведет имя конструктора класса (`Plane.name`).
function LogClass(constructor: Function) {
    console.log(constructor.name)
}

// Функция-декоратор `LogMethod` принимает три аргумента:
// - `target` - объект, к которому применяется декоратор (в данном случае - класс `Plane`);
// - `key` - имя метода, к которому применяется декоратор (в данном случае - "getId");
// - `descriptor` - дескриптор свойства метода.
// В данном случае, при применении декоратора `LogMethod` к методу `getId` класса `Plane`,
// будет выполнена функция `console.log`, которая выведет имя метода (`key`).
function LogMethod(
    target: Object,
    key: string,
    descriptor: PropertyDescriptor
) {
    console.log(key)
}

// Применение декоратора `LogClass` к классу `Plane`.
// При создании объекта класса `Plane`, будет выполнена функция `console.log`,
// которая выведет имя конструктора класса (`Plane.name`).
@LogClass
class Plane {
    private id: number

    constructor(id: number) {
        this.id = id
    }

    // Применение декоратора `LogMethod` к методу `getId` класса `Plane`.
    // При вызове метода `getId`, будет выполнена функция `console.log`,
    // которая выведет имя метода ("getId").
    @LogMethod
    getId() {
        return this.id
    }
}
