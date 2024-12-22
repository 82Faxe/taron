document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    const name = document.getElementById('review-name').value;
    const text = document.getElementById('review-text').value;

    // Создаем новый элемент отзыва
    const reviewContainer = document.querySelector('.review-container');
    const reviewCard = document.createElement('div');
    reviewCard.classList.add('review-card');
    reviewCard.innerHTML = `
        <h4>- ${name}</h4>
    <p>"${text}"</p>
        
    `;

    // Добавляем новый отзыв в контейнер
    reviewContainer.appendChild(reviewCard);

    // Очищаем форму
    document.getElementById('review-form').reset();
});