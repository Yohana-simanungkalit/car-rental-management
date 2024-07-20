import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

export const fetchRental = createAsyncThunk(
    "fetchRental", async (payload, thunkAPI) => {
        try {

            // get api
            // const response = await getApietchRental;
            // return response;

            return (
                [
                    {
                        id: 1,
                        car: {
                            id: 2,
                            model: "Sigra",
                            brand: "Toyota",
                            color: "Red",
                            year: "2018",
                            registrationNumber: "W4512KM",
                            price: 250000,
                        },
                        startDate: "2024-07-21",
                        endDate: "2024-07-21",
                        nik: "1283947592012348",
                        renterName: "Jhon Doe",
                        renterContact: "085123427829",
                        renterEmail: "Jhon.doe@gmail.com",
                        totalPrice: 1000000,
                    },
                    {
                        id: 2,
                        car: {
                            id: 1,
                            model: "All New Avanza",
                            brand: "Toyota",
                            color: "Silver",
                            year: "2019",
                            registrationNumber: "L11542VN",
                            price: 300000,
                        },
                        startDate: "2024-07-22",
                        endDate: "2024-07-24",
                        nik: "7283248192812345",
                        renterName: "Marsha Doradero",
                        renterContact: "085132458889",
                        renterEmail: "Marsha.dora@gmail.com",
                        totalPrice: 900000,
                    },
                ]
            )
        } catch (error) {
            message.error(error);
        }
    }
)

const reservationSlice = createSlice({
    name: "RESERVATION_SLICE",
    initialState: {
        isModalReservationOpen: false,
        listReservation: null,
    },
    reducers: {
        setShowModalReservation: (state, action) => {
            state.isModalReservationOpen = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRental.fulfilled, (state, action) => {
                state.listReservation = action.payload;
            })
    },
});

export const { setShowModalReservation } = reservationSlice.actions;
export default reservationSlice;