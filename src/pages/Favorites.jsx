import React, { useContext } from "react";
import Card from "../components/Card";
import AppContext from "../context";

const Favorites = () => {
  const { favorites, onAddToFavorite } = useContext(AppContext);
  return (
    <div className="content p-40">
      <div className="content-top d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>
      <div className="cards">
        {favorites.map((item) => (
          <Card
            key={item.id}
            favorited
            {...item}
            onFavorite={onAddToFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
