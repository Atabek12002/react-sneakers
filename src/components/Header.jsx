import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const Header = ({ onClickCart }) => {
  const { totalPrice } = useCart();
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="headerLeft d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших красовок</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight d-flex">
        <li onClick={onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="Корзина" />
          {totalPrice} <span>руб.</span>
        </li>
        <li className="mr-10 cu-p">
          <Link to="/favorite">
            <img width={18} height={18} src="/img/heart.svg" alt="Закладки" />
          </Link>
        </li>
        <li className="cu-p">
          <Link to="/orders">
            <img
              width={18}
              height={18}
              src="/img/user.svg"
              alt="Пользователь"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
