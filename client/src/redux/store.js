import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Reducer/userSlice';
import folderSlice from './Reducer/folderSlice';


const store = configureStore({
    reducer: {
        user:userSlice,
        folder:folderSlice
    }
})


export default store;