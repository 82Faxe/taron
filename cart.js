document.getElementById('cart-toggle').addEventListener('click', function() {
    const cartPopup = document.querySelector('.cart-popup');
    cartPopup.classList.toggle('active'); // Переключаем класс active
    if (cartPopup.classList.contains('active')) {
        cartPopup.style.display = 'block'; // Показываем корзину
    } else {
        cartPopup.style.display = 'none'; // Скрываем корзину
    }
});

document.querySelector('.close-cart').addEventListener('click', function() {
    document.querySelector('.cart-popup').classList.remove('active');
}); 
