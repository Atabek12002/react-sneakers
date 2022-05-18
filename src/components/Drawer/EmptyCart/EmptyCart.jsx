import { useContext } from 'react';

import { AppContext } from '../../../context';

import './empty_cart.scss';

const EmptyCart = ({ title, description, image }) => {
  const { setCartOpened } = useContext(AppContext);
  return (
    <div className="cartEmpty text-center">
      <img className="mb-20" width={120} height={120} src={image} alt="emptyCart" />
      <h2 className="mb-10">{title}</h2>
      <p className="opacity-4 mb-40">{description}</p>
      <button onClick={() => setCartOpened(false)} className="green_btn">
        Вернуться назад
      </button>
    </div>
  );
};

export default EmptyCart;
