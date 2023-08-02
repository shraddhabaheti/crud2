import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import cakeReducer  from '../features/cake/cakeSlice'
import icecreameReducer from '../features/iceCreame/iceCreameSlice'
import userReducer from '../features/user/userSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        cake :cakeReducer,
        icecreame:icecreameReducer,
        user :userReducer
    },
})