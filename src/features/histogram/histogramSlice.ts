import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchInformation } from '../../helpers/api';

export interface ICities {
  confirmed: number;
  confirmed_diff: number;
  date: string;
  deaths: number;
  deaths_diff: number;
  fips: number;
  last_update: string;
  lat: string;
  long: string;
  name: string;
}

export interface IRegion {
  cities: ICities[];
  iso: string;
  lat: string;
  long: string;
  name: string;
  province: string;
}

export interface IState {
  active: number;
  active_diff: number;
  confirmed: number;
  confirmed_diff: number;
  date: string;
  deaths: number;
  deaths_diff: number;
  fatality_rate: number;
  last_update: string;
  recovered: number;
  recovered_diff: number;
  region: IRegion;
}
export interface IHistogramState {
  isLoading: Boolean;
  error: Boolean;
  data: IState[];
  labels: [];
  positiveCases: [];
  deaths: [];
  selectedState: string;
}

const initialState: IHistogramState = {
  isLoading: true,
  error: false,
  data: [],
  labels: [],
  positiveCases: [],
  deaths: [],
  selectedState: 'All States',
};

export const getData = createAsyncThunk(
  'histogram/getData',
  async (query: string) => {
    const response = await fetchInformation(query);
    return response.data;
  }
);

export const histogram = createSlice({
  name: 'histogram',
  initialState,
  reducers: {
    getLabels: (state, action) => {
      if (state.selectedState !== 'All States') {
        const findState = action.payload.find(
          (item: any) => item.region.province === state.selectedState
        );
        state.labels = findState.region.cities.map((city: any) => city.name);
      } else {
        state.labels = action.payload.map((item: any) => item.region.province);
      }
    },
    getPositiveCases: (state, action) => {
      if (state.selectedState !== 'All States') {
        const findState = action.payload.find(
          (item: any) => item.region.province === state.selectedState
        );
        state.positiveCases = findState.region.cities.map(
          (city: any) => city.confirmed
        );
      } else {
        state.positiveCases = action.payload.map((item: any) => item.confirmed);
      }
    },
    getDeaths: (state, action) => {
      if (state.selectedState !== 'All States') {
        const findState = action.payload.find(
          (item: any) => item.region.province === state.selectedState
        );
        state.deaths = findState.region.cities.map((city: any) => city.deaths);
      } else {
        state.deaths = action.payload.map((item: any) => item.deaths);
      }
    },
    setStateDropdown: (state, action) => {
      state.selectedState = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: false,
        data: action.payload,
      };
    });
    builder.addCase(getData.rejected, (state) => {
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    });
  },
});

export const componentState = (state: RootState) => state.histogram;

export const { getDeaths, getLabels, getPositiveCases, setStateDropdown } =
  histogram.actions;

export default histogram.reducer;
