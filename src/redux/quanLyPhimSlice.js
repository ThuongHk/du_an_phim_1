import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { quanLyFimServices } from '../services/quanLyPhimServices';

const initialState = {
    arrFim: [
        {
            "maPhim": 11078,
            "tenPhim": "Avatar: Dòng chảy của nước 4",
            "biDanh": "avatar-dong-chay-cua-nuoc-4",
            "trailer": "https://www.youtube.com/watch?v=gq2xKJXYZ80",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/avatar-dong-chay-cua-nuoc_gp01.jpg",
            "moTa": "avartar 2 dong chay nuoc",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2023-03-10T11:09:24.35",
            "danhGia": 8,
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          }
    ],
   
}

const quanLyFimSlice = createSlice({
  name: 'quanLyFimSlice',
  initialState,
  reducers: {
    getListFim: (state, action) =>{
      console.log(action)
        state.arrFim = action.payload
    },
    changePhimDC: (state, action) =>{
      state.arrFim = state.arrFim.filter(item => item.dangChieu === action.payload)
    },
    changePhimSC: (state, action) =>{
      state.arrFim = state.arrFim.filter(item => item.sapChieu === action.payload)
    }
  }
});

export const {getListFim, changePhimDC, changePhimSC} = quanLyFimSlice.actions

export default quanLyFimSlice.reducer

export const layDanhSachFim = () =>{
  return async dispatch => { 
     try{
     const result = await quanLyFimServices.layDanhSachFim();
    
      dispatch(getListFim(result.data.content))
    }catch(err) {
        console.log(err);
    }
}}
