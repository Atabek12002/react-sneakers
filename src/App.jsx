import React from "react";

const App = () => {
  return (
    <div className="wrapper">
      <header className="d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших красовок</p>
          </div>
        </div>
        <ul className="headerRight d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="d-flex justify-between flex-wrap">
          <div className="card p-30">
            <img
              className="mb-15"
              width={133}
              height={112}
              src="img/sneakers/1.jpg"
              alt=""
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
          <div className="card p-30">
            <img
              className="mb-15"
              width={133}
              height={112}
              src="img/sneakers/1.jpg"
              alt=""
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
          <div className="card p-30">
            <img
              className="mb-15"
              width={133}
              height={112}
              src="img/sneakers/1.jpg"
              alt=""
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
          <div className="card p-30">
            <img
              className="mb-15"
              width={133}
              height={112}
              src="img/sneakers/1.jpg"
              alt=""
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
        </div>
      </div>
    </div>
  );
};

export default App;
