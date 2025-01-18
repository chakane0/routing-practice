// this is the reducer function which will manage state transitions for us based on dispatched actions
export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                items: [...state.items, action.payload],
            };

        case "REMOVE_ITEM":
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
            };

        case "UPDATE_QUANTITY":
            return {
                ...state,
                items: state.items.map(item => 
                    item.id === action.payload.id ? {...item, quantity: action.payload.quantity} : item
                ),
            };
        
        default:
            return state;
    }
}

export const initialState = {
    items: [],
};