import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header, Drawer } from './components';
import { Home, Favorites, Orders } from './pages';

import { AppContext } from './context';
import { api } from './api';

const App = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFAvorites] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const onAddToCart = async (obj) => {
    const findItem = cartItems.find((item) => item.parentId === obj.id);
    try {
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => item.parentId !== obj.id));
        await api.delete(`/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        await api.post('/cart', obj);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onRemoverItem = async (id) => {
    try {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
      await api.delete(`/cart/${id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onAddToFavorite = async (obj) => {
    const findItem = favorites.find((item) => item.id === obj.id);
    try {
      if (findItem) {
        setFAvorites((prev) => prev.filter((item) => item.id !== obj.id));
        await api.delete(`/favorites/${findItem.id}`);
      } else {
        setFAvorites((prev) => [...prev, obj]);
        await api.post('/favorites', obj);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => obj.parentId === id);
  };
  const isItemFavorite = (id) => {
    return favorites.some((obj) => obj.parentId === id);
  };

  useEffect(() => {
    (async () => {
      try {
        const items = await api.get('/items');
        const cart = await api.get('/cart');
        const favorites = await api.get('/favorites');
        setIsLoading(false);
        setCartItems(cart.data);
        setFAvorites(favorites.data);
        setItems(items.data);
      } catch (error) {
        alert('Serverde qatelik bar');
        console.log(error.message);
      }
    })();
  }, []);

  const values = {
    items,
    cartItems,
    setCartItems,
    favorites,
    isItemAdded,
    isItemFavorite,
    onAddToCart,
    onAddToFavorite,
    cartOpened,
    setCartOpened,
    onRemoverItem,
  };
  return (
    <AppContext.Provider value={values}>
      <div className="wrapper">
        <Header />
        <Drawer />
        <Routes>
          <Route path="/" element={<Home isLoading={isLoading} />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
};

export default App;
