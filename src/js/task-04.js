// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const a = document.querySelectorAll('button');
const b = document.querySelector('span');
let counterValue = 0;
console.dir(a);

a[0].addEventListener('click', onClick1);

function onClick1() {
    counterValue += -1;
    b.textContent = counterValue;
}

a[1].addEventListener('click', onClick2);

function onClick2() {
    counterValue += 1;
    b.textContent = counterValue;
}
