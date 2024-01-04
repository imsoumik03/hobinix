import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import {
    ALBUMBYID,
    ALBUM_UPLOAD,
    TOGGLE_PLAY,
    NEXT_SONG,
    PREVIOUS_SONG,
    TARGET_SONG,
    TEST_SONGS,
    TRENDING_ALBUMS,
    NEW_RELEASES,
    LIKE_ALBUM,
    LIKE_SONG,
    SAVE_ALBUM,
    SAVE_SONG,
} from '../constants/musicConstants';
import { toast } from 'react-toastify';

export const togglePlay = createAction(TOGGLE_PLAY);

export const testSongs = createAction(TEST_SONGS);

export const targetSong = createAction(TARGET_SONG);

export const prevSong = createAction(PREVIOUS_SONG);

export const nextSong = createAction(NEXT_SONG);

export const albumUpload = createAsyncThunk(
    ALBUM_UPLOAD,
    async (formData, { rejectWithValue }) => {
        try {
            const res = await axios.post('/api/music/albums', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return res.data;
        } catch (e) {
            toast.error(e.response.data.message)
            return rejectWithValue(e.response.data);
        }
    }
);

export const getTrendingAlbums = createAsyncThunk(
    TRENDING_ALBUMS,
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get('/api/music/albums/trendings');
            return res.data;
        } catch (e) {
            toast.error(e.response.data.message)
            return rejectWithValue(e.response.data);
        }
    }
);

export const getNewReleases = createAsyncThunk(
    NEW_RELEASES,
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get('/api/music/albums/new_releases');
            return res.data;
        } catch (e) {
            toast.error(e.response.data.message)
            return rejectWithValue(e.response.data);
        }
    }
);

export const getAlbumById = createAsyncThunk(
    ALBUMBYID,
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios.get(`/api/music/albums/${id}`);
            console.log(res);
            return res.data;
        } catch (e) {
            toast.error(e.response.data.message)
            return rejectWithValue(e.response.data);
        }
    }
);

export const likeAlbum = createAsyncThunk(
    LIKE_ALBUM,
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios.get(`/api/music/albums/like/${id}`);
            console.log(res);
            return res.data;
        } catch (e) {
            toast.error(e.response.data.message)
            return rejectWithValue(e.response.data);
        }
    }
)
export const likeSong = createAsyncThunk(
    LIKE_SONG,
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios.get(`/api/music/songs/like/${id}`);
            console.log(res);
            return res.data;
        } catch (e) {
            toast.error(e.response.data.message)
            return rejectWithValue(e.response.data);
        }
    }
)
export const saveAlbum = createAsyncThunk(
    SAVE_ALBUM,
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios.get(`/api/music/albums/save/${id}`);
            console.log(res);
            return res.data;
        } catch (e) {
            toast.error(e.response.data.message)
            return rejectWithValue(e.response.data);
        }
    }
)
export const saveSong = createAsyncThunk(
    SAVE_SONG,
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios.get(`/api/music/songs/save/${id}`);
            console.log(res);
            return res.data;
        } catch (e) {
            toast.error(e.response.data.message)
            return rejectWithValue(e.response.data);
        }
    }
)