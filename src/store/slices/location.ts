import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface locationInterface {
  address: string;
  city: string;
  state: string;
  country: string;
  cordinates: {
    latitude: number;
    longitude: number;
  };
  pinCode: string;
}

const initialState: locationInterface = {
    address: "",
    city: "",
    state: "",
    country: "",
    cordinates: {
        latitude: 0,
        longitude: 0,
    },
    pinCode: "",
    
};

export const locationSlice = createSlice({
    name:"location",
    initialState,
    reducers:{
        setLocation: (state, action: PayloadAction<locationInterface>) => {
            state.address = action.payload.address;
            state.city = action.payload.city;
            state.state = action.payload.state;
            state.country = action.payload.country;
            state.cordinates = action.payload.cordinates;
            state.pinCode = action.payload.pinCode;
        },
    },
})

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;