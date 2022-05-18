import { useState, useContext } from 'react';

import './drawer.scss';

import { AppContext } from '../../context';
import { api } from '../../api';
import { useCart } from '../../hooks/useCart';

import EmptyCart from './EmptyCart/EmptyCart';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = () => {
  const { cartOpened, setCartOpened, onRemoverItem } = useContext(AppContext);
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [loading, setLoading] = useState(false);
  const onClickOrder = async () => {
    try {
      setLoading(true);
      const { data } = await api.post('/orders', { cartItems });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await api.delete('/cart/' + item.id);
        await delay(1000);
      }
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };
  return (
    <div className={cartOpened ? 'overlay act' : 'overlay'}>
      <div className="overlay_drawer d-flex flex-column p-30">
        <div className="d-flex justify-between align-center mb-30">
          <h2>Корзина</h2>
          {cartItems.length > 0 && (
            <img
              onClick={() => setCartOpened(false)}
              className="cu-p"
              width={30}
              height={30}
              src="img/btn-remove.svg"
              alt="btn-remove"
            />
          )}
        </div>
        {cartItems.length > 0 ? (
          <>
            <div className="cart_items flex">
              {cartItems.map((obj) => (
                <div key={obj.id} className="cart_item d-flex align-center p-20">
                  <img className="cart_img" src={obj.imageUrl} alt="cart-sneakers" />
                  <div>
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <button onClick={() => onRemoverItem(obj.id)} className="remove_btn">
                    <img width={32} height={32} src="img/btn-remove.svg" alt="btn-remove" />
                  </button>
                </div>
              ))}
            </div>
            <ul className="cart_total_block d-flex flex-column pt-15">
              <li>
                <span>Итого: </span>
                <div></div>
                <b>{totalPrice} руб.</b>
              </li>
              <li>
                <span>Налог 5%: </span>
                <div></div>
                <b>{(totalPrice * 0.05).toFixed(2)} руб. </b>
              </li>
              <button onClick={onClickOrder} className="green_btn">
                <span>
                  <img
                    width={12}
                    height={12}
                    src={loading ? 'img/reload.svg' : 'img/arrow.svg'}
                    alt="svg"
                  />
                </span>
                <span>Оформить заказ</span>
              </button>
            </ul>
          </>
        ) : (
          <EmptyCart
            title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            image={isOrderComplete ? 'img/complete-order.jpg' : 'img/empty-cart.jpg'}
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
