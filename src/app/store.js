import {configureStore} from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';
import {stocksApi} from '../services/stocksApi';
import {stocksDetailsApi} from '../services/stockDetailsApi'
export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        [stocksApi.reducerPath]: stocksApi.reducer,
        [stocksDetailsApi.reducerPath]: stocksDetailsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
        .concat(cryptoApi.middleware)
        .concat(cryptoNewsApi.middleware)
        .concat(stocksApi.middleware)
        .concat(stocksDetailsApi.middleware),
});