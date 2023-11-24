var editableText = document.getElementById('editableText');
var back4AppAppId = 'ваш-идентификатор-приложения-back4app';
var back4AppClientKey = 'ваш-клиентский-ключ-back4app';
var back4AppClassName = 'название-класса-в-back4app';

// Загрузка данных с Back4App
function loadDataFromBack4App() {
    fetch(`https://parseapi.back4app.com/classes/${back4AppClassName}`, {
        headers: {
            'X-Parse-Application-Id': back4AppAppId,
            'X-Parse-REST-API-Key': back4AppClientKey,
        }
    })
    .then(response => response.json())
    .then(data => {
        // Используйте данные из Back4App
        editableText.innerHTML = data.results[0].content;
    })
    .catch(error => console.error('Ошибка при загрузке данных:', error));
}

// Сохранение данных на Back4App
function saveDataToBack4App() {
    var content = editableText.innerHTML;
    fetch(`https://parseapi.back4app.com/classes/${back4AppClassName}/objectId`, {
        method: 'PUT',
        headers: {
            'X-Parse-Application-Id': back4AppAppId,
            'X-Parse-REST-API-Key': back4AppClientKey,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: content }),
    })
    .then(response => response.json())
    .then(data => console.log('Данные успешно сохранены:', data))
    .catch(error => console.error('Ошибка при сохранении данных:', error));
}

// Загрузка данных при загрузке страницы
window.addEventListener('load', loadDataFromBack4App);

// Сохранение данных при внесении изменений
editableText.addEventListener('input', saveDataToBack4App);
