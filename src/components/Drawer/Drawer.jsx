import React, { useState } from "react";

import { api } from "../../api";
import { useCart } from "../../hooks/useCart";
import Info from "../Info";

import styles from "./drawer.module.scss";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ items, onRemove, cartOpened }) => {
  const { cartItems, setCartItems, totalPrice, setCartOpened } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.post("orders", { items: cartItems });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await api.delete("cart/" + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert("Не удалось создать заказ :(");
    }
    setIsLoading(false);
  };
  return (
    <div
      className={`${styles.overlay} ${cartOpened ? styles.overlayVisible : ""}`}
    >
      <div className={`${styles.drawer} ${cartOpened ? styles.active : ""}`}>
        <h2 className="d-flex justify-between mb-30">
          <span>Корзина</span>
          {items.length > 0 ? (
            <img
              onClick={() => setCartOpened(false)}
              className="removeBtn cu-p"
              src="img/btn-remove.svg"
              alt="Remove"
            />
          ) : null}
        </h2>
        {items.length > 0 ? (
          <>
            <div className="items flex">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center p-20 mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg mr-20"
                  />
                  <div className="mr-20">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    className="removeBtn"
                    onClick={() => onRemove(obj.id)}
                    src="img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock d-flex flex-column pt-10">
              <ul className="mb-20">
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{((totalPrice / 100) * 5).toFixed(2)} руб.</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                <span>Оформить заказ:</span>
                <span>
                  <img src="img/arrow.svg" alt="Arrow" />
                </span>
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            image={
              isOrderComplete ? "img/complete-order.jpg" : "img/empty-cart.jpg"
            }
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
