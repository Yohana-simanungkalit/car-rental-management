import { configureStore } from "@reduxjs/toolkit";
import carSlice from "../cars/carSlice";

const MainStore = configureStore({
    reducer: {
        [carSlice.name] : carSlice.reducer,
    }
})

export default MainStore;