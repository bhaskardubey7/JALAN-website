// Handling quantity increase and decrease
document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const inputField = this.parentElement.querySelector('.qty-input');
        let currentValue = parseInt(inputField.value);
        
        if (this.classList.contains('increase')) {
            currentValue++;
        } else if (this.classList.contains('decrease') && currentValue > 1) {
            currentValue--;
        }
        
        inputField.value = currentValue;
        updateTotal();
    });
});

// Update total price based on quantity changes
function updateTotal() {
    const items = document.querySelectorAll('.item');
    let total = 0;

    items.forEach(item => {
        const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
        const quantity = parseInt(item.querySelector('.qty-input').value);
        total += price * quantity;
    });

    document.querySelector('.total span').textContent = `$${total.toFixed(2)}`;
}

// Initialize total calculation on load
updateTotal();
