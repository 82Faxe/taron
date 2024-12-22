let cart = [];

function addItem(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - ${item.price} руб.   
            <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.name}', this.value)">
            <button onclick="removeItem('${item.name}')">Удалить</button>
        `;
        cartItemsContainer.appendChild(li);
        total += item.price * item.quantity;
    });

    document.querySelector('.total').innerText = total;
}

function updateQuantity(name, quantity) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity = parseInt(quantity);
        updateCart();
    }
}

function removeItem(name) {
    cart = cart.filter(item => item.name !== name);
    updateCart();
}