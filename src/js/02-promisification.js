/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

//! without promises
// const makeOrder = (dish, onSuccess, onError) => {
//   const passed = Math.random() > 0.5;

//   setTimeout(() => {
//     if (passed) {
//       onSuccess(`✅ Ваше замовлення: ${dish}`);
//     }

//     onError("❌ Упс, у нас закінчилися продукти");
//   }, 1000);
// };

// makeOrder(
//   "пиріжок",
//   (result) => {
//     console.log("onMakeOrderSuccess");
//     console.log(result);
//   },
//   (error) => {
//     console.log("onMakeOrderError");
//     console.log(error);
//   }
// );

//* with promises

/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

//! without promises
// const prepareDish = (dish, onSuccess, onError) => {
//   const passed = Math.random() > 0.5;

//   if (passed) {
//     onSuccess(`✅ Ваше замовлення: ${dish}`);
//   }

//   onError("❌ Упс, у нас закінчилися продукти");
// };

// prepareDish(
//   "пиріжок",
//   (result) => {
//     console.log("onMakeOrderSuccess");
//     console.log(result);
//   },
//   (error) => {
//     console.log("onMakeOrderError");
//     console.log(error);
//   }
// );

//* with promises

// Promise.resolve і Promise.reject - створюють проміс на ходу та відразу переведуть його у стан Fullfilled або Rejected відповідно. В цих статичних методах немає фукнції executor, в якості аргументів вони приймають відразу дані, які далі будуть оброблюватись в then або в catch
