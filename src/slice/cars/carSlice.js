import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

export const fetchCars = createAsyncThunk(
    "fetchCar", async (payload, thunkAPI) => {
        try {

            // get api
            // const response = await getApietchCar;
            // return response;

            return (
                [
                    {
                        id: 1,
                        model: "Avanza",
                        brand: "Toyota",
                        color: "Silver",
                        year: "2019",
                        registrationNumber: "L11542VN",
                        price: 300000,
                    },
                    {
                        id: 2,
                        model: "Sigra",
                        brand: "Toyota",
                        color: "Red",
                        year: "2018",
                        registrationNumber: "W4512KM",
                        price: 250000,
                    },
                    {
                        id: 3,
                        model: "Sirion",
                        brand: "Daihatsu",
                        color: "Black",
                        year: "2019",
                        registrationNumber: "L5425TK",
                        price: 250000,
                    },
                ]
            )
        } catch (error) {
            message.error(error);
        }
    }
)

const carSlice = createSlice({
    name: "CAR_SLICE",
    initialState: {
        isModalCarOpen: false,
        isModalCarEditOpen: false,
        listCar: null,
    },
    reducers: {
        setShowModalCar: (state, action) => {
            state.isModalCarOpen = action.payload;
        },
        setShowModalCarEdit: (state, action) => {
            state.isModalCarEditOpen = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCars.fulfilled, (state, action) => {
                state.listCar = action.payload;
            })
    },
});


export const { setShowModalCar, setShowModalCarEdit } = carSlice.actions;
export default carSlice;