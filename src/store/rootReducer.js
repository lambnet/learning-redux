import { combineReducers } from "redux"
import productReducer from "./product"
import cartReducer from "./cart"

export default combineReducers({
  product: productReducer,
  carts: cartReducer,
})

