import { combineReducers } from "redux"
import productReducer from "./product"
import cartReducer from "./cart"
import userReducer from "./user"

export default combineReducers({
  product: productReducer,
  carts: cartReducer,
  users: userReducer
})

