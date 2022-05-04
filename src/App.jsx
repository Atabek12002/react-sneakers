import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";
import { Routes, Route } from "react-router-dom";
import { api } from "./api";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";
import Orders from "./pages/Orders";

const App = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const [itemsResponse, cartResponse, favoritesResponse] =
          await Promise.all([
            api.get("/items"),
            api.get("/cart"),
            api.get("/favorites"),
          ]);
        setIsLoading(false);
        setItems(itemsResponse.data);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных!");
      }
    })();
  }, []);

  const onAddToCart = async (obj) => {
    console.log(obj);
    const findItem = cartItems.find((cartObj) => +cartObj.parentId === +obj.id);
    try {
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => +item.parentId !== +obj.id)
        );
        await api.delete(`cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await api.post("cart", obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Ощибка при добавление корзины!");
      console.log(error);
    }
  };
  const onRemoveItem = async (id) => {
    try {
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
      await api.delete(`cart/${id}`);
    } catch (error) {
      alert("Ошибка при удаления в корзину!");
      console.log(error);
    }
  };
  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => +favObj.id === +obj.id)) {
        api.delete(`favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await api.post("favorites", obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Ошибка в сервере!");
    }
  };
  const onChangeSearchInput = (event) => setSearchValue(event.target.value);

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };
  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        setCartItems,
        favorites,
        isItemAdded,
        onAddToCart,
        onAddToFavorite,
        setCartOpened,
      }}
    >
      <div className="wrapper">
        <Drawer
          items={cartItems}
          onRemove={onRemoveItem}
          cartOpened={cartOpened}
        />
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/favorite"
            element={<Favorites onAddToFavorite={onAddToFavorite} />}
          />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
};

export default App;

// const arr = [
//   {
//     "title": "Мужские Кроссовки Nike Blazer Mid Suede",
//     "price": 12999,
//     "imageUrl": "img/sneakers/1.jpg"
//   },
//   {
//     "title": "Мужские Кроссовки Nike Air Max 270",
//     "price": 15999,
//     "imageUrl": "img/sneakers/2.jpg"
//   },
//   {
//     "title": "Мужские Кроссовки Nike Blazer Mid Suede",
//     "price": 8499,
//     "imageUrl": "img/sneakers/3.jpg"
//   },
//   {
//     "title": "Кроссовки Puma X Aka Boku Future Rider",
//     "price": 8999,
//     "imageUrl": "img/sneakers/4.jpg"
//   },
//   {
//     "title": "Мужские Кроссовки Under Armour Curry 8",
//     "price": 15199,
//     "imageUrl": "img/sneakers/5.jpg"
//   },
//   {
//     "title": "Мужские Кроссовки Nike Kyrie 7",
//     "price": 11299,
//     "imageUrl": "img/sneakers/6.jpg"
//   }
// ];
