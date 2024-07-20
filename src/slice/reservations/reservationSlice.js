import { createSlice } from "@reduxjs/toolkit";

const reservationSlice = createSlice({
    name: "RESERVATION_SLICE",
    initialState: {
        isModalReservationOpen: false,
    },
    reducers: {
        setShowModalReservation: (state, action) => {
            state.isModalReservationOpen = action.payload;
        }
    }
    });

export const {setShowModalReservation} = reservationSlice.actions;
export default reservationSlice;