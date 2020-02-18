import React,  { useEffect, useState } from 'react'
import { parseStringifiedJSON } from '../helpers';
import RestaurantDetail from './RestaurantDetail';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const favoriteRestaurants = localStorage.getItem('FAVORITE_RESTAURANTS');
        const parsedFavorites = parseStringifiedJSON(favoriteRestaurants, []) || [];
        setFavorites(parsedFavorites);
    }, [])
    return (
        <div className="favorite-container">
            {favorites.map(restaurant => <RestaurantDetail key={restaurant.id} restaurant={restaurant} />)}
        </div>
    )
}
 
export default Favorites;