import { createContext, useContext, useState } from "react";


const FavoriteContext = createContext([]);


export const FavoritesProvider = ({ children }) => {
  const [favorites, addfavorite] = useState([]);

  return (
    <FavoriteContext.Provider value={{ favorites, addfavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};


export const useFavorite = () => useContext(FavoriteContext);
