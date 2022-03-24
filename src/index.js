import store from "./store/store";
import { productAdded, productMarkAsDiscount } from './store/product'
import { productAddedToCart, productRemovedFromCart } from './store/cart'


store.subscribe(() => {
  console.log('Store changed!', store.getState());
});

store.dispatch(productAdded({
  name: "Product 1",
  price: 2000000,
}));

store.dispatch(productAdded({
  name: "Product 2",
  price: 2000000,
}));

store.dispatch(productAdded({
  name: "Product 3",
  price: 2000000,
}));


store.dispatch(productMarkAsDiscount({
  id: 3,
  hasDiscount: true
}))

store.dispatch(productAddedToCart({
  id: 1,
  productId: 1,
  quantity: 1,
}))


store.dispatch(productRemovedFromCart({
  id: 1,
  quantity: 1
}))