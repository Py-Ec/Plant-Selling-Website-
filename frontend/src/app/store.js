import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice';
import cartReducer from '../features/cart/cartSlice';
import productsReducer from '../features/products/productSlice';
import addressReducer from '../features/address/addressSlice';
import nurseryReducer from '../features/nursery/nurserySlice';
import orderReducer from '../features/order/orderSlice';
import checkoutReducer from '../features/checkout/checkoutSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        products: productsReducer,
        address: addressReducer,
        nursery: nurseryReducer,
        checkout: checkoutReducer,
        order: orderReducer,
    },
});