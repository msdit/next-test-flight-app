import getAirportFlightList from "@/api/getAirportFlightList";
import getAirportList from "@/api/getAirportList";
import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    airportList: [],
    airportFlights: [],
  },
  reducers: {
    updateList: (state: any, action: any) => {
      state.airportList = action.payload;
    },
    updateFlights: (state: any, action: any) => {
      state.airportFlights = action.payload;
    },
  },
});

const { updateList, updateFlights } = dataSlice.actions;

export const getList: any = () => (dispatch: any, getState: any) => {
  getAirportList.then((res) => {
    dispatch(updateList(res.result));
  });
};

export const getFlights: any = () => (dispatch: any, getState: any) => {
  getAirportFlightList.then((res) => {
    dispatch(updateFlights(res.result));
  });
};

export default dataSlice.reducer;
