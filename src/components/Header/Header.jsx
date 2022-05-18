import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

import { AppContext } from '../../context';
import { useCart } from '../../hooks/useCart';

const Header = () => {
  const { setCartOpened } = useContext(AppContext);

  const { totalPrice } = useCart();

  return (
    <header className="header d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="header_left d-flex align-center cu-p">
          <img className="mr-15" width={40} height={40} src="img/logo.png" alt="logo" />
          <div>
            <h3 className="mb-5 text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="header-rigth d-flex align-center">
        <li className="d-flex align-center cu-p" onClick={setCartOpened}>
          <img src="img/cart.svg" alt="cart" />
          <span className="ml-10">{totalPrice} руб.</span>
        </li>
        <Link to="/favorites">
          <li className="cu-p">
            <img src="img/heart.svg" alt="heart" />
          </li>
        </Link>
        <Link to="/orders">
          <li className="cu-p">
            <img src="img/user.svg" alt="user" />
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
