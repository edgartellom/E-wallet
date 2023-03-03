
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = import.meta.env.VITE_APP_API

export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl}),
    tagTypes: ["Cart"],
    endpoints: (builder)=>({
        getCarts: builder.query({
            query: (userId)=>`carts/${userId}`,
            providesTags: ["Cart"],
        }),
        createCart: builder.mutation({
            query: (newCart)=>({
                url:'/carts',
                method:'POST',
                body: newCart,
            }),
            invalidatesTags:["Cart"]
        }),
        updateCart: builder.mutation({
            query:(updatedCart)=>({
                url:'/carts',
                method:'PUT',
                body: updatedCart,
            }),
            invalidatesTags:["Cart"]
        })
    })
})

export const {
    useGetCartsQuery,
    useCreateCartMutation,
    useUpdateCartMutation,
} = cartApi;