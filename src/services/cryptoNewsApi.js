// const options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news/search',
//     params: {q: '10', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
//     headers: {
//       'X-BingApis-SDK': 'true',
//       'X-RapidAPI-Key': 'dfce8e4128mshb090f0a1e77719ep11dbd9jsn4a62d5153066',
//       'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//     }
//   };

// query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
//     })

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeaders = {
      'x-bingapis-sdk': 'true',
      'X-RapidAPI-Key': 'dfce8e4128mshb090f0a1e77719ep11dbd9jsn4a62d5153066',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoNewsApiHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;