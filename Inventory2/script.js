let inventory = [];

function displayItems() {
    const itemsList = document.getElementById('items-list');
    itemsList.innerHTML = '';
    inventory.forEach(item => {
        itemsList.innerHTML += `
            <div class="item">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Price: $${item.price}</p>
            </div>
        `;
    });
}

function generateReport() {
    const totalValue = inventory.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    const reportElement = document.getElementById('report');
    reportElement.innerHTML = `Total inventory value: $${totalValue}`;
}

document.getElementById('add-item-btn').addEventListener('click', () => {
    document.getElementById('add-item-form').style.display = 'block';
});

document.getElementById('save-item-btn').addEventListener('click', () => {
    const name = document.getElementById('item-name').value;
    const description = document.getElementById('item-description').value;
    const quantity = parseInt(document.getElementById('item-quantity').value);
    const price = parseFloat(document.getElementById('item-price').value);

    inventory.push({ id: inventory.length + 1, name, description, quantity, price });

    displayItems();
    generateReport();

    document.getElementById('item-name').value = '';
    document.getElementById('item-description').value = '';
    document.getElementById('item-quantity').value = '';
    document.getElementById('item-price').value = '';

    document.getElementById('add-item-form').style.display = 'none';
});

displayItems();
generateReport();
