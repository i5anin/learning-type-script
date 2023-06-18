enum EnumRoles {
    ADMIN = 0, // Роль "ADMIN" имеет значение 0
    GUEST = 1, // Роль "GUEST" имеет значение 1
    USER = 2, // Роль "USER" имеет значение 2
}

const enum EnumColors {
    black, // Цвет "black" имеет значение 0
    pink, // Цвет "pink" имеет значение 1
    green, // Цвет "green" имеет значение 2
}

interface IUser {
    role: EnumRoles // Свойство "role" типа EnumRoles (роль пользователя)
    color: EnumColors // Свойство "color" типа EnumColors (цвет пользователя)
}
const user: IUser = {
    role: EnumRoles.ADMIN, // Присваиваем значению свойства "role" роль "ADMIN"
    color: EnumColors.black, // Присваиваем значению свойства "color" цвет "black"
}

console.log(EnumRoles[EnumRoles.ADMIN]) // Выводим на консоль имя роли, соответствующее значению EnumRoles.ADMIN
