import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  characters: [],
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters(state, action) {
      state.characters = action.payload;
    },
  },
});

export const { setCharacters } = charactersSlice.actions;

export const fetchCharacters = () => async (dispatch) => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    dispatch(setCharacters(data.results));
  } catch (error) {
    console.error('Error fetching characters:', error);
  }
};

export const selectCharacters = (state) => state.characters.characters;

export default configureStore({
  reducer: {
    characters: charactersSlice.reducer,
  },
});
