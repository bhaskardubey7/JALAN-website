    // Example for the Add to Cart button action
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});

// Example for the Buy Now button action
document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', () => {
        alert('Proceeding to checkout...');
    });
});
