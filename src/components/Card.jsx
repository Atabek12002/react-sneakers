import React from "react";

const Card = () => {
  return (
    <div className="card p-30">
      <div className="favorite">
        <img src="img/unliked.svg" alt="Unliked" />
      </div>
      <img
        className="mb-15"
        width={133}
        height={112}
        src="img/sneakers/1.jpg"
        alt="Sneakers1"
      />
      <p className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</p>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span className="text-uppercase mb-5">Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <button className="button">
          <img src="img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
