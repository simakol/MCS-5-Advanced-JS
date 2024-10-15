/*
 * Обробка помилок з try...catch
 *
 * - Синтаксис
 * - Які помилки ловить
 * - ❌ помилки парсингу (parsing errors)
 * - ✅ помилки виконання (runtime errors)
 * - Ловить лише помилки в синхронному коді
 * - Як зловити помилку в асинхронному коді
 */

/*
try {
 тіло блоку трай, тут описується код, який потенційно може викинути помилку (наприклад, проміс, або ручний виклик оператору throw)
} catch (err){
    тіло блоку кетч, приймає обʼєкт помилки err, і оброблює помилку яка виникла в блоці try
}
*/
