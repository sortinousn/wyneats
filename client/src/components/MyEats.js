import React, { useEffect, useState, useReducer } from 'react';
import { parseStringifiedJSON } from '../helpers';
import RestaurantDetail from './RestaurantDetail';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoriteRestaurants = localStorage.getItem('FAVORITE_RESTAURANTS');
    const parsedFavorites = parseStringifiedJSON(favoriteRestaurants, []) || [];
    setFavorites(parsedFavorites);
  }, []);

  const removeFavorite = restaurant => {
    const favoriteRestaurants = localStorage.getItem('FAVORITE_RESTAURANTS');
    const parsedFavorites = parseStringifiedJSON(favoriteRestaurants, []) || [];
    const arr = parsedFavorites.filter(item => item.id !== restaurant.id);
    const newFavorites = arr;
    localStorage.setItem('FAVORITE_RESTAURANTS', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  return (
    <div className="cards">
      {favorites.map(restaurant => (
        <RestaurantDetail
          favorite={restaurant.id}
          key={restaurant.id}
          restaurant={restaurant}
          removeFavorite={removeFavorite}
        />
      ))}
    </div>
  );
};

export default Favorites;
