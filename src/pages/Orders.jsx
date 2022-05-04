import React, { useContext, useEffect, useState } from "react";
import { api } from "../api";
import Card from "../components/Card";
import AppContext from "../context";

const Orders = () => {
  const { onAddToCart, onAddToFavorite } = useContext(AppContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("orders");
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запрса заказа!");
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="content p-40">
      <div className="content-top d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>
      <div className="cards">
        {(isLoading ? [...Array(2)] : orders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
