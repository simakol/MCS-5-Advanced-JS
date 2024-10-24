/*
 * Типи для змінних та аргументів
 *
 * Any
 * Unknown
 * Tuple
 * Enum
 * Union Type
 * Intersection Type
 * Literal Type
 */

//* Any - будь-який тип без перевірки
// let someValue: any = ' hello ';

// console.log(someValue.trim());

//* Unknown - більш безпечна альтернатива any з перевіркою типу перед використанням
// let someValue: unknown = ' Hello World! ';

// if (typeof someValue === 'string') {
//   console.log(someValue.trim());
// }

/*
? Реалізуйте функцію isPlainObject(value), яка перевіряє, чи є передане значення об'єктом.
*/

// function isPlainObject(value) {
// }

// console.log(isPlainObject(null));
// console.log(isPlainObject(1)); // false
// console.log(isPlainObject('hello')); // false
// console.log(isPlainObject({})); // true
// console.log(isPlainObject({ username: 'mango' })); // true

//* Tuple або Кортеж - це масив фіксованої довжини, в якому елементи можуть бути різних типів. Типи елементів визначаються в порядку їхнього розташування.

// const date: [number, number, number] = [12, 10, 2000];

// const coordinates: [number, number] = [10, 20];

/*
? Створіть тип Point, який описує кортеж, що складається з трьох координат: x, y, z.
?
? Реалізуйте функцію isTheSamePoint(firstPoint, secondPoint), яка перевіряє дві точки на їхнє однакове розташування.
? Дві точки збігаються, якщо збігаються всі їхні координати:
*/

// type Point =

// const p1: Point = [1, 3, 4];
// const p2: Point = [1, 3, 4];
// const p3: Point = [0, 8, 4];

// function isTheSamePoint() {

// }

// console.log(isTheSamePoint(p1, p2)); // true
// console.log(isTheSamePoint(p1, p3)); // false
// console.log(isTheSamePoint(p2, p3)); // false

//* Enum - Перелічення дозволяє визначити набір іменованих констант. Це зручно для групування значень, які логічно пов'язані.

// enum CardinalDirection {
//   North,
//   South,
//   East,
//   West,
// }

// console.log(CardinalDirection);

// {
//   North: 0,
//   South: 1,
//   East: 2,
//   West: 3,
//   0: 'North',
//   1: 'South',
//   2: 'East',
//   3: 'West'
// }

/*
? Реалізуйте enum ModalStatus із двома значеннями: Opened та Closed
?
? Реалізуйте функцію buildModal(text, status). Вона повертає об'єкт, що описує модальне вікно.
? Параметри функції:
? - text (текст, який має бути всередині вікна після ініціалізації);
? - status (статус, з яким потрібно створити об'єкт вікна).
?
? Функція повертає об'єкт із двома полями: text (тут зберігається переданий текст) та status (тут зберігається переданий статус)
*/

// function buildModal() {

// }

// console.log(buildModal('Some text for modal', ModalStatus.Closed));

//* Union Type - Тип об'єднання дозволяє змінній приймати значення більше ніж одного типу. Це означає, що змінна може мати значення кількох різних типів.

// let numOrStr: number | string;

// numOrStr = 10;
// numOrStr = 'Hello';

/*
? Реалізуйте функцію lastIndex(str, char), яка повертає індекс останнього входження символу в рядок або null,
? якщо такого символу немає. Метод lastIndexOf();
*/

// const result1 = lastIndex('test', 't');
// const result2 = lastIndex('test', 'p');

// console.log(result1); // 3
// console.log(result2); // null

//* Intersection Type - Тип перетворення дозволяє комбінувати кілька типів в один. Це означає, що змінна повинна задовольняти всім зазначеним типам.

/*
? Реалізуйте тип Admin, який є перетином типів AdminPermission та User.
? Реалізуйте функцію addAdmin(user), яка приймає значення з типом User і повертає значення з типом Admin.
? Як значення властивості permission повинно бути значення Permission.READ.
*/

// enum Permission {
//   READ,
//   WRITE,
//   DELETE,
// }

// type User = {
//   login: string;
// };

// type AdminPermission = {
//   permission: Permission;
// };

// type Admin =

// const user: User = { login: 'login1' };

// function addAdmin(user: User) {

// }

// const admin: Admin = addAdmin(user);

// console.log(admin);

//* Literal Type - Літеральні типи дозволяють визначити конкретні значення, які може приймати змінна. Це корисно для створення більш точних типів.

/*
? Опишіть літеральний тип для змінної orderStatus, яка може містити тільки такі значення:
? 'Created', 'Paid', 'Shipped', 'Delivered';
*/

// let orderStatus: 'Created' | 'Paid' | 'Shipped' | 'Delivered' = 'Created';

// orderStatus = 'Shipped';
