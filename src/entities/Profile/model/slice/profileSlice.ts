import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  data: undefined,
  error: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

  },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;

export default profileSlice.reducer;
