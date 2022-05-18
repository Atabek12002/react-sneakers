import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { api } from '../../api';

import { Card, Loading } from '../../components';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/orders');
        // console.log(data.map((obj) => obj.cartItems).flat());
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.cartItems], []));
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);
  return (
    <div className="p-20 m-25">
      <div className="d-flex align-center pb-40">
        <Link to="/">
          <img className="mr-20 cu-p" src="img/arrow-exit.svg" alt="arrow-exit" />
        </Link>
        <h1>Мои заказы</h1>
      </div>
      <div className="cards pb-20">
        {isLoading ? <Loading /> : orders.map((item, index) => <Card key={index} {...item} />)}
      </div>
    </div>
  );
};

export default Orders;
