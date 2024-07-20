import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";

export const fetchRental = createAsyncThunk(
    "fetchRental", async (payload, thunkAPI) => {
        try {

            // get api
            // const response = await axios.get('http://localhost:8081/rentals');
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
                        endDate: "2024-07-22",
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
            message.error(error.message || "Failed to post new reservation");
            return thunkAPI.rejectWithValue(error.response?.data || "Error posting new reservation");
        }
    }
)

export const postNewReservation = createAsyncThunk(
    "reservation/postNewReservation",
    async (payload, thunkAPI) => {
        try {
            // get api
            // const response = await axios.post("http://localhost:8081/rentals", payload);
            // return response.data;

        } catch (error) {
            message.error(error.message || "Failed to post new reservation");
            return thunkAPI.rejectWithValue(error.response?.data || "Error posting new reservation");
        }
    }
);

export const deleteReservation = createAsyncThunk(
    "reservation/deleteReservation",
    async (id, thunkAPI) => {
        try {
            // get api
            // const response = await axios.delete(`http://localhost:8081/rentals/${id}`);
        } catch (error) {
            message.error(error.message || "Failed to post new reservation");
            return thunkAPI.rejectWithValue(error.response?.data || "Error posting new reservation");
        }
    }
);

export const getDetailReservation = createAsyncThunk(
    "reservation/getDetailReservation",
    async (id, thunkAPI) => {
        try {
            // get api
            // const response = await axios.get(`http://localhost:8081/rentals/${id}`);
            return (
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
                }
            )
        } catch (error) {
            message.error(error.message || "Failed to post new reservation");
            return thunkAPI.rejectWithValue(error.response?.data || "Error posting new reservation");
        }
    }
);

export const editReservation = createAsyncThunk(
    "reservation/editReservation",
    async ({id, payload}, thunkAPI) => {
        try {
            // get api
            // const response = await axios.put(`http://localhost:8081/rentals/${id}`, payload);
            // return response.data;
        } catch (error) {
            message.error(error.message || "Failed to post new reservation");
            return thunkAPI.rejectWithValue(error.response?.data || "Error posting new reservation");
        }
    }
);



const reservationSlice = createSlice({
    name: "RESERVATION_SLICE",
    initialState: {
        isModalReservationOpen: false,
        listReservation: null,
        isModalReservationEditOpen: false,
    },
    reducers: {
        setShowModalReservation: (state, action) => {
            state.isModalReservationOpen = action.payload;
        },
        setShowModalReservationEdit: (state, action) => {
            state.isModalReservationEditOpen = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRental.fulfilled, (state, action) => {
                state.listReservation = action.payload;
            })
            builder
            .addCase(getDetailReservation.fulfilled, (state, action) => {
                state.detailCarById = action.payload;
            })
    },
});

export const { setShowModalReservation, setShowModalReservationEdit } = reservationSlice.actions;
export default reservationSlice;