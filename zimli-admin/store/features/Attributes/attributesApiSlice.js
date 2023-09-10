import ApiSlice from "@/store/api/ApiSlice";

export const attributesApiSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllAttributes: builder.query({
     query: (queries) => {
        let queryString = "";
        for (const key in queries) {
          if (queries[key]) {
            queryString = `${queryString}${queryString ? "&" : "?"}${key}=${
              queries[key]
            }`;
          }
        }
        return {
          url: `/attribute/${queryString}`,
        };
      },
      // providesTags: ["Attributes"],
    }),

    createAttributes: builder.mutation({
      query: (attributeDetails) => ({
        url: "/attribute",
        method: "POST",
        body: attributeDetails,
      }),
      invalidatesTags: ["Attributes"],
    }),
  }),
});

export const { useGetAllAttributesQuery, useCreateAttributesMutation } =
  attributesApiSlice;
