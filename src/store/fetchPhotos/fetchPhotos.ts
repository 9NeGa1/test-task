import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MiniPhoto } from '../../components/card-item'
import { Photo } from '../../components/card-list.tsx';


const initialState = {
    AllPhotos: [] as Photo[],
    likedPhotos: [] as MiniPhoto[],
    likeMode: false
}

export const fetchPhotos = createSlice({
  name: 'fetchPhotos',
  initialState,
  reducers: {
    toggleLike(state, action: PayloadAction<MiniPhoto>) {
      const existingPhoto = state.likedPhotos.find(photo => photo.id === action.payload.id);
      if (existingPhoto) {
        state.likedPhotos = state.likedPhotos.filter(photo => photo.id !== action.payload.id);
      } else {
        state.likedPhotos.push(action.payload);
      }
    },
    addAllPhotos(state, action: PayloadAction<Photo[]>) {
      state.AllPhotos = action.payload
    },
    toggleLikeMode(state) {
      state.likeMode = !state.likeMode
      console.log(state.likeMode)
    },
    deletePhoto(state, action: PayloadAction<MiniPhoto>) {
      state.AllPhotos = state.AllPhotos.filter(photo => photo.id !== action.payload.id)
      state.likedPhotos = state.likedPhotos.filter(photo => photo.id !== action.payload.id)
    }
  }
});

export const {toggleLike, addAllPhotos, toggleLikeMode, deletePhoto} = fetchPhotos.actions

export default fetchPhotos.reducer