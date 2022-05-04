import React, { useContext, useState } from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";
import styles from "./card.module.scss";

const Card = ({
  id,
  title,
  price,
  imageUrl,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) => {
  const { isItemAdded } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorited);
  const obj = { id, parentId: id, title, price, imageUrl };
  const onClickPlus = () => {
    onPlus(obj);
  };
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    onFavorite(obj);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={187}
          viewBox="0 0 155 187"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="155" height="90" />
          <rect x="0" y="107" rx="3" ry="3" width="155" height="15" />
          <rect x="0" y="128" rx="3" ry="3" width="93" height="15" />
          <rect x="0" y="163" rx="8" ry="8" width="80" height="24" />
          <rect x="124" y="155" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className={styles.favorite}>
              <img
                onClick={onClickFavorite}
                src={isFavorite ? "img/liked.svg" : "img/unliked.png"}
                alt="Unliked"
              />
            </div>
          )}
          <img
            className="mb-15 card-icon"
            width={133}
            height={112}
            src={imageUrl}
            alt="Sneakers1"
          />
          <p className="mb-15">{title}</p>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span className="text-uppercase mb-5">Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={
                  isItemAdded(id) ? "img/btn-checked.svg" : "img/btn-plus.svg"
                }
                alt="Plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
