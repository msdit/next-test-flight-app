import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./reducer/dataReducer";

export default configureStore({
  reducer: {
    data: dataReducer
  },
});
