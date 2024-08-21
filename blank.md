---
layout: default
title: Моя Картина
permalink: blank
creation_date: '2024-08-21T09:52:00Z'
starting_price: 0.01
exclude: false
type: work
shortname: BELAN
---

# Моя Картина

![Фото картины](blank-bifold-white-card-standing-wooden-desk-outdoor-with-floral-shadow-blurred-nature-background.jpg)

<p>Описание моей картины: Это произведение искусства было создано с особой техникой и вдохновением.</p>

<!-- Элемент, где будет отображаться стоимость -->
<p><strong>Текущая стоимость:</strong> <span id="price"></span></p>

<!-- Элемент для передачи данных в JavaScript через data-* атрибуты -->
<div id="art-data"
     data-creation-date="{{ page.creation_date }}"
     data-starting-price="{{ page.starting_price }}">
</div>

<script>
  // Получение данных из data-* атрибутов
  const artData = document.getElementById('art-data');
  const startingPrice = parseFloat(artData.getAttribute('data-starting-price'));
  const creationDate = new Date(artData.getAttribute('data-creation-date'));

  // Обновление цены каждую секунду
  function updatePrice() {
    const now = new Date();
    const secondsElapsed = Math.floor((now - creationDate) / 1000);
    const currentPrice = startingPrice + (secondsElapsed * 0.01);
    document.getElementById('price').innerText = `$${currentPrice.toFixed(2)}`;
  }

  // Обновляем цену при загрузке страницы
  updatePrice();

  // И продолжаем обновлять каждые 1000 миллисекунд (1 секунда)
  setInterval(updatePrice, 1000);
</script>
