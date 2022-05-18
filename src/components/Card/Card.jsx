import { useContext } from 'react';

import { AppContext } from '../../context';

import styles from './card.module.scss';

const Card = ({ id, title, price, imageUrl, onPlus, onFavorite, favorited }) => {
  const { isItemAdded, isItemFavorite } = useContext(AppContext);
  const item = { id, parentId: id, title, price, imageUrl };

  const onClickPlus = () => {
    onPlus(item);
  };
  const onClickFavorite = () => {
    onFavorite(item);
  };
  return (
    <div className={styles.card}>
      {onFavorite && (
        <div className={styles.card_favorite}>
          <img
            width={32}
            height={32}
            onClick={onClickFavorite}
            src={isItemFavorite(id) || favorited ? 'img/liked.svg' : 'img/unliked.png'}
            alt="unliked"
          />
        </div>
      )}
      <img
        className={styles.card_img}
        width={133}
        height={112}
        src={imageUrl}
        alt="card-sneakers"
      />
      <p>{title}</p>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span className="mb-5">Цена:</span>
          <b>{price} руб.</b>
        </div>
        {onPlus && (
          <button onClick={onClickPlus}>
            <img
              width={32}
              height={32}
              src={isItemAdded(id) ? 'img/btn-checked.svg' : 'img/btn-plus.svg'}
              alt="plus"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
