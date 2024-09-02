// Function to get cart items from localStorage
function getCartItems() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// Function to save cart items to localStorage
function saveCartItems(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to add item to the cart
function addToCart(product) {
    const cart = getCartItems();
    cart.push(product);
    saveCartItems(cart);
    alert('Product added to cart!');
}

// Event listener for the "Add to Cart" button
document.getElementById('add-to-cart').addEventListener('click', function() {
    const product = {
        id: '002',
        name: 'MEN\'S SHALWAR KAMEEZ',
        price: 3500,
        image: 'image/image 3.png',
        quantity: 1
    };
    addToCart(product);
});
