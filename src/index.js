import store from "./store/store";
import * as actions from './store/product/actionTypes'
import { productAdded, productMarkAsDiscount } from './store/product/actions'

store.subscribe(() => {
  console.log('Store changed!', store.getState());
});

store.dispatch(productAdded({
  name: "Product 1",
  price: 2000000,
}));

// store.dispatch({
//   type: actions.PRODUCT_REMOVED,
//   payload: {
//     id: 1,
//   }
// })


store.dispatch({
  type: actions.PRODUCT_ADDED,
  payload: {
    name: "Product 2",
    price: 1000,
  }
});

store.dispatch({
  type: actions.PRODUCT_ADDED,
  payload: {
    name: "Product 3",
    price: 500,
  }
});

store.dispatch({
  type: actions.PRODUCT_MARK_AS_DISCOUNT,
  payload: {
    id: 2,
    hasDiscount: true
  }
});

store.dispatch(productMarkAsDiscount({
  id: 3,
  hasDiscount: true
}))

store.dispatch(productAdded({
  name: "Product 4",
  price: 2000000,
}));

store.dispatch(productAdded({
  name: "Product 5",
  price: 2000000,
}));