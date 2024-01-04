import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { authReducer, userReducer } from './reducers/userReducers';
import { postReducer } from './reducers/postReducers';
import { musicReducer } from './reducers/musicReducers';

export default configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
    reducer: {
        authUser: authReducer,
        user: userReducer,
        posts: postReducer,
        music: musicReducer,
    },
});
