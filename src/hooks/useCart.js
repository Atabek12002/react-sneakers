import { useContext } from "react";
import AppContext from "../context";
export const useCart = () => {
  const { cartItems, setCartItems, setCartOpened } = useContext(AppContext);
  const totalPrice = cartItems.reduce(
    (sum, obj) => (obj.price ? sum + obj.price : 0),
    0
  );
  return { cartItems, setCartItems, totalPrice, setCartOpened };
};
