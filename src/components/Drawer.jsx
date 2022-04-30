import React from "react";

const Drawer = () => {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer p-30 d-flex flex-column">
        <h2 className="d-flex justify-between mb-30">
          <span>Корзина</span>
          <img
            className="removeBtn cu-p"
            src="img/btn-remove.svg"
            alt="Remove"
          />
        </h2>
        <div className="items flex">
          <div className="cartItem d-flex align-center p-20 mb-20">
            <div
              style={{ backgroundImage: `url(img/sneakers/1.jpg)` }}
              className="cartItemImg mr-20"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center p-20 mb-20">
            <div
              style={{ backgroundImage: `url(img/sneakers/1.jpg)` }}
              className="cartItemImg mr-20"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center p-20 mb-20">
            <div
              style={{ backgroundImage: `url(img/sneakers/1.jpg)` }}
              className="cartItemImg mr-20"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center p-20 mb-20">
            <div
              style={{ backgroundImage: `url(img/sneakers/2.jpg)` }}
              className="cartItemImg mr-20"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="img/btn-remove.svg" alt="Remove" />
          </div>
        </div>
        <div className="cartTotalBlock d-flex flex-column pt-10">
          <ul className="mb-20">
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            <span>Оформить заказ:</span>
            <span>
              <img src="img/arrow.svg" alt="Arrow" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
