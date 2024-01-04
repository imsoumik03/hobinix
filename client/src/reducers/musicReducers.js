import { createSlice } from '@reduxjs/toolkit';
import {
    albumUpload,
    getAlbumById,
    getTrendingAlbums,
    togglePlay,
    nextSong,
    prevSong,
    targetSong,
    testSongs,
    getNewReleases,
    likeAlbum,
    likeSong,
    saveAlbum,
    saveSong,
} from '../actions/musicActions';

const musicSlice = createSlice({
    name: 'music',
    initialState: {
        isPlaying: false,
        newReleases: null,
        trendingAlbums: null,
        album: null,
        songs: [],
        songIndex: 0,
        currentSong: null,
        loading: false,
        error: null,
    },
    extraReducers: {
        [togglePlay]: (state, action) => {
            if (action.payload) state.isPlaying = action.payload;
            else state.isPlaying = !state.isPlaying;
        },

        [testSongs]: (state, action) => {
            console.log(action.payload, 444444444);
            state.songs = action.payload;
        },

        [targetSong]: (state, action) => {
            state.songIndex = action.payload;
            state.currentSong = state.songs[state.songIndex];
            state.isPlaying = true;
        },

        [prevSong]: state => {
            if (state.songIndex === 0) state.songIndex = state.songs.length - 1;
            else state.songIndex = state.songIndex - 1;
            state.currentSong = state.songs[state.songIndex];
            state.isPlaying = true;
        },

        [nextSong]: state => {
            if (state.songIndex === state.songs.length - 1) state.songIndex = 0;
            else state.songIndex = state.songIndex + 1;
            state.currentSong = state.songs[state.songIndex];
            state.isPlaying = true;
        },

        // [albumUpload.pending]: state =>{
        //     state.loading = true
        // },
        [albumUpload.fulfilled]: (state, action) => {
            state.loading = false;
            state.album = action.payload.data.album;
            state.songs = action.payload.data.album.songs;
            state.songIndex = 0;
        },
        [albumUpload.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // [getNewReleases.loading]: (state, action) =>{
        //     state.loading = true
        // },
        [getNewReleases.fulfilled]: (state, action) => {
            state.loading = false;
            state.newReleases = action.payload.data.albums;
        },
        [getNewReleases.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // [getTrendingAlbums.loading]: state =>{
        //     state.loading = true
        // },
        [getTrendingAlbums.fulfilled]: (state, action) => {
            state.loading = false;
            state.trendingAlbums = action.payload.data.albums;
        },
        [getTrendingAlbums.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        [getAlbumById.loading]: state => {
            state.loading = true;
        },
        [getAlbumById.fulfilled]: (state, action) => {
            state.loading = false;
            state.album = action.payload.data.album;
        },
        [getAlbumById.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        [likeAlbum.fulfilled]: (state, action) => {
            state.album = action.payload.data.album
        },
        [likeAlbum.rejected]: (state, action) => {
            state.error = action.payload
        },

        [likeSong.fulfilled]: (state, action) => {
            state.songs[state.songIndex] = action.payload.data.song
        },
        [likeSong.rejected]: (state, action) => {
            state.error = action.payload
        },
        
        [saveAlbum.fulfilled]: (state, action) => {
            state.album = action.payload.data.album
        },
        [saveAlbum.rejected]: (state, action) => {
            state.error = action.payload
        },
        
        [saveSong.fulfilled]: (state, action) => {
            state.songs[state.songIndex] = action.payload.data.song
        },
        [saveSong.rejected]: (state, action) => {
            state.error = action.payload
        },
    },
});

export const musicReducer = musicSlice.reducer;
