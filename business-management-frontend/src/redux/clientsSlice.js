// src/redux/clientsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async actions to fetch data from the API
export const fetchClients = createAsyncThunk('clients/fetchClients', async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/clients');
    return response.data;
});

const clientsSlice = createSlice({
    name: 'clients',
    initialState: {
        clients: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchClients.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchClients.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.clients = action.payload;
            })
            .addCase(fetchClients.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default clientsSlice.reducer;
