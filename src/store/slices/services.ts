import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface servicesInterface {
  services: any[];
}

const initialState: servicesInterface = {
    services: [],
    
};

export const servicesSlice = createSlice({
    name:"services",
    initialState,
    reducers:{
        setServices: (state, action: PayloadAction<servicesInterface>) => {
            state.services = action.payload.services;
        },
    },
});

export const { setServices } = servicesSlice.actions;
export default servicesSlice.reducer;