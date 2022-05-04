import React, { useContext } from "react";
import AppContext from "../context";

const Info = ({ title, image, description }) => {
  const { setCartOpened } = useContext(AppContext);
  return (
    <div className="cartEmpty d-flex justify-center align-center flex-column flex">
      <img width={120} height={120} className="mb-20" src={image} alt="Empty" />
      <h2>{title}</h2>
      <p className="opacity-6 text-center">{description}</p>
      <button
        onClick={() => setCartOpened(false)}
        className="greenButton w100p"
      >
        <img src="img/arrow.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
