// const axios = require("axios");

// const encodedParams = new URLSearchParams();
// encodedParams.append("country", "Germany");

// const options = {
//   method: 'POST',
//   url: 'https://investing4.p.rapidapi.com/stocks/get-list-stocks',
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//     'X-RapidAPI-Key': 'dfce8e4128mshb090f0a1e77719ep11dbd9jsn4a62d5153066',
//     'X-RapidAPI-Host': 'investing4.p.rapidapi.com'
//   },
//   data: encodedParams
// };


// addNewPost: builder.mutation({
//     query: (payload) => ({
//       url: '/posts',
//       method: 'POST',
//       body: payload,
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     }),
//     invalidatesTags: ['Post'],
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const countries= ['UK', 'US', 'DE', 'FR', 'SG', 'HK', 'IT', 'CA', 'AU']
const stockApiHeaders = {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'dfce8e4128mshb090f0a1e77719ep11dbd9jsn4a62d5153066',
    'X-RapidAPI-Host': 'investing4.p.rapidapi.com'
}

const baseUrl = 'https://investing4.p.rapidapi.com';
const getEncodedParams = (country) => {
    const encodedParams = new URLSearchParams();
    country = country
        .replace('US', 'United States')
        .replace('GB', 'United Kingdom')
        .replace('FR', 'France')
        .replace('DE', 'Germany')
        .replace('IT', 'Italy')
        .replace('HK', 'Hong Kong')
        .replace('SG', 'Singapore')
        .replace('CA', 'Canada')
        .replace('SG', 'Singapore')
        .replace('AU', 'Australia');

    encodedParams.append("country", country);
    return encodedParams;
}

// const encodedParams = new URLSearchParams();
// encodedParams.append("country", "Germany");
// console.log("----> " + encodedParams)

export const stocksApi = createApi({
    reducerPath: 'stocksApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    // tagTypes: ['Stock'],
    endpoints: (builder) => ({
        retrieveStocksForGivenCountry: builder.query({
            query: (country) => ({
                url: '/stocks/get-list-stocks',
                method: 'POST',
                headers: stockApiHeaders,
                body: getEncodedParams(country),
            })
        }),
    })
});

export const {
    useRetrieveStocksForGivenCountryQuery
} = stocksApi;
