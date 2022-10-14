import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl, fetchApi } from "../../utils/fetchApi";

export const propertiesForRent = createAsyncThunk(
  "property/fetchProducts",
  async (filterOption) => {
    if(!filterOption){
      try {
        const response = await fetchApi(
          `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=25`
        );
        return response?.hits;
      } catch (error) {
        console.log(error);
      }
    }
    else{
      const {locationExternalIDs,rentFrequency,minPrice,maxPrice,roomsMin,bathsMin,sort,categoryExternalID} = filterOption;
      try {
        const response = await fetchApi(
          `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=for-rent&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}`
        );
        return response?.hits;
      } catch (error) {
        console.log(error);
      }
    }
    
  }
);

const initialState = {
  property: [],
  isLoading: false,
  isError: false,
  message: "",
};

export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(propertiesForRent.fulfilled, (state, action) => {
        state.property = action.payload;
        state.isLoading = false;
      })
      .addCase(propertiesForRent.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(propertiesForRent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default propertySlice.reducer;
