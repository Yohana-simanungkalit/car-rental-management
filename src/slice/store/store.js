import { configureStore } from "@reduxjs/toolkit";
import carSlice from "../cars/carSlice";
import reservationSlice from "../reservations/reservationSlice";

const MainStore = configureStore({
    reducer: {
        [carSlice.name] : carSlice.reducer,
        [reservationSlice.name] : reservationSlice.reducer,
    }
})

export default MainStore;