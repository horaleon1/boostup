import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchInformation } from '../../helpers/api';

export interface totalData {
  confirmed: number;
  deaths: number;
  active_diff: number;
  fatality_rate: number;
}

export interface CountryForSidebarState {
  data: totalData;
  isLoading: Boolean;
  error: Boolean;
}

const initialState: CountryForSidebarState = {
  data: {
    confirmed: 0,
    deaths: 0,
    active_diff: 0,
    fatality_rate: 0,
  },
  isLoading: true,
  error: false,
};

export const getTotalData = createAsyncThunk(
  'countryForSidebar/getTotalData',
  async (query: string) => {
    const response = await fetchInformation(query);
    return response.data;
  }
);

export const countryForSidebar = createSlice({
  name: 'countryForSidebar',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTotalData.pending, (state, action) => {
        state.isLoading = true;
        state.error = false;
    });
    builder.addCase(getTotalData.fulfilled, (state, action) => {
      state.isLoading = false;
        state.error = false;
        state.data = action.payload;
    });
    builder.addCase(getTotalData.rejected, (state, action) => {
      state.isLoading = false;
        state.error = true;
    });
  },
});

export const state = (state: RootState) => state.countryForSidebar;

export default countryForSidebar.reducer;
