class Car {
    name: string
    price: number

    constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }

    /**
     * Возвращает информацию о машине.
     * @returns Строка с названием и ценой машины.
     */
    getInfo(): string {
        return `${this.name} - ${this.price}`
    }
}

class Bus extends Car {
    constructor(name: string, price: number) {
        super(name, price)
    }

    /**
     * Вызывает метод getInfo родительского класса и возвращает результат.
     * @returns Строка с информацией о машине.
     */
    test(): string {
        return this.getInfo()
    }
}

// Создание экземпляра класса Car и вызов метода getInfo()
new Car('BMW', 100000).getInfo()
