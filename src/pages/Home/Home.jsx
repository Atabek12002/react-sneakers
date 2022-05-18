import { useState, useContext } from 'react';

import { Card, Loader } from '../../components';
import { AppContext } from '../../context';

const Home = ({ isLoading }) => {
  const { items, onAddToCart, onAddToFavorite } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return isLoading
      ? [...Array(10)].map((_, index) => (
          <div key={index}>
            <Loader />
          </div>
        ))
      : filteredItems.map((item) => (
          <Card
            key={item.id}
            onPlus={(obj) => onAddToCart(obj)}
            onFavorite={(obj) => onAddToFavorite(obj)}
            loading={isLoading}
            {...item}
          />
        ));
  };
  return (
    <div className="p-20 m-25">
      <div className="search d-flex justify-between align-center pb-40">
        <h1>{searchValue ? `Поиск по : ${searchValue}` : `Все кроссовки`}</h1>
        <div className="search_block d-flex align-center">
          <img src="img/search.svg" alt="search" />
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            type="text"
            placeholder="Поиск..."
          />
          <button onClick={() => setSearchValue('')}>
            <img width={25} height={25} src="img/btn-remove.svg" alt="remove-btn" />
          </button>
        </div>
      </div>
      <div className="cards pb-20">{renderItems()}</div>
    </div>
  );
};

export default Home;
