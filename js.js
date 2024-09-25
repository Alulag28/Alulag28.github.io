// Это объявление переменной, мы ищем кнопку по тегу
const button = document.querySelector('button');

// Массив из 10 цитат
const facts = [
  'Chickens can sleep with their eyes open.',
  'Rabbits cannot vomit.',
  'Bees can dance to communicate information.',
  'Sloths have three fingers on each hand.',
  'Starfish can regenerate lost body parts.',
  'Some species of sharks have existed longer than dinosaurs.',
  'Elephants can jump, but they rarely do so.',
  'Platypuses lay eggs despite being mammals.',
  'Koalas sleep up to 20 hours a day.',
  'Ostriches can run at speeds up to 70 km/h.'
];

// Тут на кнопку навешиваем обработчик, который ждёт клика и тогда запустит логику
button.addEventListener('click', function() {
  // Выбираем случайную цитату из массива
  const randomfacts = facts[Math.floor(Math.random() * facts.length)];
  alert(randomfacts);
});


/* Добавляем изменение курсора при наведении */
button.style.transition = 'background-color 0.6s';

/* Добавляем изменение курсора и цвета кнопки при наведении */
button.addEventListener('mouseover', function() {
  button.style.cursor = 'pointer';
  button.style.backgroundColor = '#FFFFFF'; // Меняем цвет на белый
});

button.addEventListener('mouseout', function() {
  button.style.cursor = 'default';
  button.style.backgroundColor = ''; // Возвращаем исходный цвет
});