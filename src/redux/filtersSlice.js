import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  filter: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setFilterValue({payload}) {
      return payload
    },
  },
});

export const { setFilterValue } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;