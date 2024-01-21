// script.js
document.addEventListener("DOMContentLoaded", function() {
  var circle = document.querySelector("circle");

  // Обработчик события клика
  circle.addEventListener("click", function() {
    // Получаем текущий радиус
    var currentRadius = parseFloat(circle.getAttribute("r"));

    // Вычисляем новый радиус увеличенный на 10%
    var newRadius = currentRadius * 1.1;

    // Устанавливаем новый радиус
    circle.setAttribute("r", newRadius);
  });
});
