import { configureStore } from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";
import propertyReducer from "../features/property/propertySlice";


export const store = configureStore({
  reducer: {
    property:propertyReducer
  },
});
