import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { validateProfileData } from '../../services/validateProfileData/validateProfileData';
import { Profile, ValidateProfileError } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (
      _,
      { rejectWithValue, extra, getState },
    ) => {
      const formData = getProfileForm(getState());
      const errors = validateProfileData(formData);

      if (errors.length) {
        return rejectWithValue(errors);
      }

      try {
        const { data } = await extra.api.put<Profile>('/profile', formData);

        if (!data) {
          throw new Error();
        }

        return data;
      } catch (e) {
        return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
      }
    },
  );
