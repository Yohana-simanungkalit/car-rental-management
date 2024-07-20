import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";

export const fetchCars = createAsyncThunk(
    "fetchCar", async (payload, thunkAPI) => {
        try {

            // get api
            // const response = await axios.get("http://localhost:8081/cars");
            // return response.data;

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
            message.error(error.message || "Failed to post new car");
            return thunkAPI.rejectWithValue(error.response?.data || "Error posting new car");
        }
    }
)

export const postNewCar = createAsyncThunk(
    "cars/postNewCar",
    async (payload, thunkAPI) => {
        try {
            // get api
            // const response = await axios.post("http://localhost:8081/cars", payload);
            // return response.data;

        } catch (error) {
            message.error(error.message || "Failed to post new car");
            return thunkAPI.rejectWithValue(error.response?.data || "Error posting new car");
        }
    }
);

export const deleteCar = createAsyncThunk(
    "cars/deleteCar",
    async (id, thunkAPI) => {
        try {
            // get api
            // const response = await axios.delete(`http://localhost:8081/cars/${id}`);
        } catch (error) {
            message.error(error.message || "Failed to post new car");
            return thunkAPI.rejectWithValue(error.response?.data || "Error posting new car");
        }
    }
);

export const getDetailCar = createAsyncThunk(
    "cars/getDetailCar",
    async (id, thunkAPI) => {
        try {
            // get api
            // const response = await axios.get(`http://localhost:8081/cars/${id}`);
            return (
                {
                    id: 2,
                    model: "Sigra",
                    brand: "Toyota",
                    color: "Red",
                    year: "2018",
                    registrationNumber: "W4512KM",
                    price: 250000,
                }
            )
        } catch (error) {
            message.error(error.message || "Failed to post new car");
            return thunkAPI.rejectWithValue(error.response?.data || "Error posting new car");
        }
    }
);


export const editCar = createAsyncThunk(
    "cars/editCar",
    async ({id, payload}, thunkAPI) => {
        try {
            // get api
            // const response = await axios.put(`http://localhost:8081/cars/${id}`, payload);
            // return response.data;
        } catch (error) {
            message.error(error.message || "Failed to post new car");
            return thunkAPI.rejectWithValue(error.response?.data || "Error posting new car");
        }
    }
);


const carSlice = createSlice({
    name: "CAR_SLICE",
    initialState: {
        isModalCarOpen: false,
        isModalCarEditOpen: false,
        listCar: null,
        detailCarById: null,
        isDataUpdated: false,
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
        builder
            .addCase(getDetailCar.fulfilled, (state, action) => {
                state.detailCarById = action.payload;
            })
    },
});


export const { setShowModalCar, setShowModalCarEdit } = carSlice.actions;
export default carSlice;