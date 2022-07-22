import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchListingData } from "./listingAPI";
import { ModelListResponse } from "./listingModel";
export interface ListingState {
  data: ModelListResponse;
  status: "idle" | "loading" | "failed";
}
const initialState: ListingState = {
  data: [],
  status: "idle",
};

export const fetchListingAsync = createAsyncThunk(
  "listing/fetchData",
  async () => {
    return await fetchListingData();
  }
);

export const listingSlice =  createSlice({
  name: "listing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListingAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchListingAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(fetchListingAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {} = listingSlice.actions

export default listingSlice.reducer;