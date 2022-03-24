import { configureStore } from "@reduxjs/toolkit";
//import reducer from "./product"
import reducer from "./rootReducer"

const store = configureStore({
  reducer
})

export default store