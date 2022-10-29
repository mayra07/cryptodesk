import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'b11a892cc0mshaaf26f99a136fbfp15e55cjsnbe221da68104',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
} 




const baseUrl = "https://coinranking1.p.rapidapi.com/"


const createRequest = (url) => ({url,headers: cryptoApiHeaders})


export const cryptoApi = createApi({

  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) =>({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),
  })
})

export const {  useGetCryptosQuery , useGetCryptoDetailsQuery , useGetCryptoHistoryQuery} = cryptoApi;




