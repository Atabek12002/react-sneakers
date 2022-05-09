import React from 'react';

const App = () => {
  return (
    <div className="wrapper mt-40 pb-40">
      <header className="header d-flex justify-between align-center p-40">
        <div className="header_left d-flex align-center cu-p">
          <img className="mr-15" width={40} height={40} src="img/logo.png" alt="logo" />
          <div>
            <h3 className="mb-5 text-uppercase">React Sneakers</h3>
            <p className="opacity-6">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="header-rigth d-flex align-center">
          <li className="d-flex align-center cu-p">
            <img src="img/cart.svg" alt="" />
            <span className="ml-10">1205 руб.</span>
          </li>
          <li className="cu-p">
            <img src="img/heart.svg" alt="" />
          </li>
          <li className="cu-p">
            <img src="img/user.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="pb-40">Все кроссовки</h1>
        <div className="cards">
          <div className="card d-flex flex-column">
            <img width={133} height={112} src="img/sneakers/1.jpg" alt="card-sneakers" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="mb-5">Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={32} height={32} src="img/btn-plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
