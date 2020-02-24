import React, { useEffect, useState, useReducer } from 'react';
import { parseStringifiedJSON } from '../../helpers';
import RestaurantDetail from '../RestaurantDetail/RestaurantDetail';
import './MyEats.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoriteRestaurants = localStorage.getItem('FAVORITE_RESTAURANTS');
    const parsedFavorites = parseStringifiedJSON(favoriteRestaurants, []) || [];
    setFavorites(parsedFavorites);
  }, []);

  /* Joe 2-19: Removes favorited item from local storage, tried to use slice, wouldn't work right. */
  const removeFavorite = restaurant => {
    const favoriteRestaurants = localStorage.getItem('FAVORITE_RESTAURANTS');
    const parsedFavorites = parseStringifiedJSON(favoriteRestaurants, []) || [];
    const arr = parsedFavorites.filter(item => item.id !== restaurant.id);
    const newFavorites = arr;
    localStorage.setItem('FAVORITE_RESTAURANTS', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  return (
    <>
      {favorites.length > 0 ? (
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
      ) : (
        <h1 className="favorites">No Favorites Yet...</h1>
      )}
    </>
  );
};

export default Favorites;
