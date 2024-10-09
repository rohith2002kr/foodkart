let order = [];
let total = 0;

function addToOrder(item, price) {
    order.push({ name: item, price: price });
    total += price;
    updateOrderSummary();
}

function updateOrderSummary() {
    const orderList = document.getElementById("orderList");
    orderList.innerHTML = ''; // Clear the current list

    order.forEach(orderItem => {
        const li = document.createElement('li');
        li.textContent = `${orderItem.name} - $${orderItem.price}`;
        orderList.appendChild(li);
    });

    document.getElementById("totalAmount").textContent = total;
}

function placeOrder() {
    if (order.length === 0) {
        alert("Your order is empty!");
        return;
    }

    // Display order details (or you can implement further processing)
    alert("Order placed successfully!");

    // Clear the order
    order = [];
    total = 0;
    updateOrderSummary();
}
