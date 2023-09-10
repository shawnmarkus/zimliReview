import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// console.log(process.env.BASE_URL);

// const customFetchBaseQuery = fetchBaseQuery({
//   //   baseUrl: process.env.BASE_URL, // add the base url
//   baseUrl: "https://y3zfcc1y02.execute-api.ap-south-1.amazonaws.com/dev",
//   prepareHeaders: (headers, { getState, type }) => {
//     // const token = getState().auth.accessToken;

//     token && headers.set("authorization", `Bearer ${token}`);
//     return headers;
//   },
// });

const baseQuery = fetchBaseQuery({
  baseUrl: "https://y3zfcc1y02.execute-api.ap-south-1.amazonaws.com/dev",
  // baseUrl: "",
  prepareHeaders: (headers, { getState }) => {
    // const token = getState().auth.accessToken;
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGY4NGZiMDdjZmJjNTQ4NjlhYjM4NjYiLCJyb2xlcyI6WyJ1c2VyIl0sInBob25lIjoiOTY0ODMzNjk0OCIsImlhdCI6MTY5NDI3NzIxNSwiZXhwIjoxNjk0MjgwODE1fQ.o27DZzk0gVso4iJ_kWMR6O17lEY-QO3esQ_rjJ7J1eE";
    token && headers.set("authorization", `Bearer ${token}`);
    return headers;
  },
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  //   if (result?.error?.status === 401) {
  //     api.dispatch(logoutHandler());
  //   }

  return result;
};

const ApiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  tagTypes: [
    "Categories",
    "Catalogues",
    "User",
    "SubCategories",
    "Attributes",
    "Auth",
  ],
  endpoints: (builder) => ({}),
});

export default ApiSlice;
