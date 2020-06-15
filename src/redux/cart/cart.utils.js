export const addItemToCart = (cartItems, caartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === caartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === caartItemToAdd.id 
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        );
    }

    return [...cartItems, { ...caartItemToAdd, quantity: 1 }]
};