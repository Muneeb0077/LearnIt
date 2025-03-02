import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { authApi } from '@/features/api/authApi';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

const initializeApp =async () => {//initialize the app by loading the user on every refresh
    await store.dispatch(authApi.endpoints.loadUser.initiate({},{forceRefetch:true}));
}

initializeApp();