import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    PHOTO_POST,
    DANCE_POST,
    GET_ALL_PHOTOS,
    GET_ALL_DANCES,
    LIKE_POST,
    SAVE_POST,
} from '../constants/postConstants';
import { toast } from 'react-toastify';

export const photoPost = createAsyncThunk(
    PHOTO_POST,
    async (postData, { rejectWithValue }) => {
        try {
            const res = await axios.post('/api/gallery', postData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            toast.success(res.data.data.message)
            return res.data;
        } catch (e) {
            toast.error(e.response.data.message)
            return rejectWithValue(e.response.data);
        }
    }
);

export const dancePost = createAsyncThunk(
    DANCE_POST,
    async (postData, { rejectWithValue }) => {
        try {
            const res = await axios.post('/api/dance', postData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            toast.success(res.data.data.message)
            return res.data;
        } catch (e) {
            toast.error(e.response.data.message)
            return rejectWithValue(e.response.data);
        }
    }
);

export const getAllPhotos = createAsyncThunk(
    GET_ALL_PHOTOS,
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get('/api/gallery');
            toast.success(res.data.data.message)
            return res.data;
        } catch (e) {
            toast.error(e.response.data.message)
            return rejectWithValue(e.response.data);
        }
    }
);

export const getAllDances = createAsyncThunk(
    GET_ALL_DANCES,
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get('/api/dance');
            toast.success(res.data.data.message)
            return res.data;
        } catch (e) {
            toast.error(e.response.data.message)
            return rejectWithValue(e.response.data);
        }
    }
);

export const likePost = createAsyncThunk(
    LIKE_POST,
    async ({ id, category }, { rejectWithValue }) => {
        try {
            const res = await axios.get(`/api/${category}/${id}/like`);
            toast.success(res.data.data.message)
            return res.data;
        } catch (e) {
            toast.error(e.response.data.message)
            return rejectWithValue(e.response.data);
        }
    }
);

export const savePost = createAsyncThunk(
    SAVE_POST,
    async ({ id, category }, { rejectWithValue }) => {
        try {
            const res = await axios.get(`/api/${category}/${id}/save`);
            toast.success(res.data.data.message)
            return res.data;
        } catch (e) {
            toast.error(e.response.data.message)
            return rejectWithValue(e.response.data);
        }
    }
);
