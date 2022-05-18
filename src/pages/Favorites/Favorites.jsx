import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Card } from '../../components';

import { AppContext } from '../../context';

const Favorites = () => {
  const { favorites, onAddToFavorite } = useContext(AppContext);
  return (
    <div className="p-20 m-25">
      <div className="d-flex align-center pb-40">
        <Link to="/">
          <img className="mr-20 cu-p" src="img/arrow-exit.svg" alt="arrow-exit" />
        </Link>
        <h1>Мои закладки</h1>
      </div>
      <div className="cards pb-20">
        {favorites.map((item) => (
          <Card key={item.id} onFavorite={onAddToFavorite} {...item} favorited />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
