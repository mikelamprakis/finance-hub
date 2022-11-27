// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary',
//   params: {symbol: 'BP', region: 'GB'},
//   headers: {
//     'X-RapidAPI-Key': 'dfce8e4128mshb090f0a1e77719ep11dbd9jsn4a62d5153066',
//     'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
//   }
// };
// https://rapidapi.com/apidojo/api/yahoo-finance1


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const stockDetailsApiHeaders = {
    'X-RapidAPI-Key': 'dfce8e4128mshb090f0a1e77719ep11dbd9jsn4a62d5153066',
    'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
}

const baseUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: stockDetailsApiHeaders});


export const stocksDetailsApi = createApi({
    reducerPath: 'stocksDetailsApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    // tagTypes: ['Stock'],
    endpoints: (builder) => ({
        getStockDetails: builder.query({
            query: (symbol, countryCode) =>  createRequest(`/stock/v2/get-summary?symbol=${symbol}&region=${countryCode}`)
        }),
    })
});


export const {
    useGetStockDetailsQuery
} = stocksDetailsApi;
