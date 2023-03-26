import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./bannerSlice";
import  quanLyFimSlice  from "./quanLyPhimSlice";
import quanLyRapSlice from "./quanLyRapSlice";



const store = configureStore({
    reducer: {
        bannerSlice,
        quanLyFimSlice,
        quanLyRapSlice
    }
})

export default store