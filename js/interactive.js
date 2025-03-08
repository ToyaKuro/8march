const poems = [
    "Мама, ты — свет в моей жизни, \nТы — мой ангел, моя защита.",
    "Спасибо за тепло и ласку, \nЗа каждую улыбку и подсказку.",
    "Ты — самая лучшая на свете, \nС 8 Марта, мама, в этот день весенний!"
];

const poemList = document.getElementById('poem-list');
const modal = document.getElementById('poem-modal');
const closeBtn = document.querySelector('.close-btn');

// Функция для генерации стиха
function generatePoem() {
    const randomIndex = Math.floor(Math.random() * poems.length);
    const poem = poems[randomIndex];

    // Добавляем стих в список
    const poemItem = document.createElement('p');
    poemItem.textContent = poem;
    poemList.appendChild(poemItem);

    // Показываем модальное окно
    modal.style.display = 'flex';
}

// Закрытие модального окна
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});