import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./reducer/dataReducer";
import commentsReducer from './reducer/commentsReducer'

export default configureStore({
  reducer: {
    data: dataReducer,
    comment: commentsReducer
  },
});
