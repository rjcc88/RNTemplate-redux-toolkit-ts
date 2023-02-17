import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FetchReducerState {
  posts: any
  isLoading: boolean;
  error: string | null;
}

const initialState: FetchReducerState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const fetchReducerSlice = createSlice({
  name: 'fetchReducer',
  initialState,
  reducers: {
    fetchReducerStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchReducerSuccess: (state, action: PayloadAction<any>) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    fetchReducerFailure: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});