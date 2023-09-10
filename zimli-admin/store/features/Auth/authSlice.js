// import ApiSlice from "@/store/api/ApiSlice";

// export const attributesApiSlice = ApiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getAccessToken: builder.query({
//       query: () => {
//         return {
//           url: `/refreshToken`,
//         };
//       },
//       providesTags: ["Token"],
//     }),
//     createAttributes: builder.mutation({
//       query: (attributeDetails) => ({
//         url: "/attribute",
//         method: "POST",
//         body: attributeDetails,
//       }),
//       invalidatesTags: ["Attributes"],
//     }),
//   }),
// });

// export const { useGetAllAttributesQuery, useCreateAttributesMutation } =
//   attributesApiSlice;
