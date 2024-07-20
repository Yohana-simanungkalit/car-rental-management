import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: "CAR_SLICE",
    initialState: {
        isModalCarOpen: false,
        isModalCarEditOpen: false,
    },
    reducers: {
        setShowModalCar: (state, action) => {
            state.isModalCarOpen = action.payload;
        },
        setShowModalCarEdit: (state, action) => {
            state.isModalCarEditOpen = action.payload;
        }
    }
    });

export const {setShowModalCar, setShowModalCarEdit} = carSlice.actions;
export default carSlice;