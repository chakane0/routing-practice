import React, { useReducer } from 'react';
import { CartReducer, initialState } from './CartReducer'

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    // mock data for adding to the cart
    const products = [
        {id: 1, name:"Laptop", price:2300},
        {id: 2, name:"iPhone", price: 1000},
    ];

    const addItem = (product) => {
        dispatch({type:"ADD_ITEM", payload: {...product, quantity: 1}});   
    };

    const removeItem = (id) => {
        dispatch({type:"REMOVE_ITEM", payload: {id}});
    };

    const updateQuantity = (id, quantity) => {
        dispatch({type:"UPDATE_QUANTITY", payload:{id, quantity}});
    };

    return (
        <>
            <h1>Shopping Cart</h1>
            <h2>Products</h2>
            {products.map((product) => (
                <div key={product.id}>
                    <span>{product.name}</span>
                    <button onClick={() => addItem(product)}>Add to Cart</button>
                </div>
            ))}

            <h2>Cart</h2>
            {state.items.map((item) => (
                <div key={item.id}>
                    <span>
                        {item.name} - ${item.price} X {item.quantity}
                    </span>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button onClick={() => updateQuantity(item.id, item.quantity > 1 ? item.quantity - 1 : 1)}>-</button>
                </div>
            ))}
        </>
    )
}

export default ShoppingCart