import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import RestaurantDetail from './RestaurantDetail';
import { parseStringifiedJSON } from '../helpers';

function FindEats(props) {
  const [apiData, setApiData] = useState([]);
  const [query, setQuery] = useState('food');
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    // if (query === '') return;
    const getApiData = async () => {
      const result = await axios.get(
        `/api/restaurants/search/:wynwood/${query}`
      );
      setApiData(result.data);
      console.log(result.data);
    };
    getApiData();
    console.log(apiData);
  }, [query]);

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setQuery(search);
  };

  const addFavorite = restaurant => {
    const favoriteRestaurants = localStorage.getItem('FAVORITE_RESTAURANTS');
    const parsedFavorites = parseStringifiedJSON(favoriteRestaurants, []) || []
    const newFavorites = [...parsedFavorites, restaurant];
    localStorage.setItem('FAVORITE_RESTAURANTS', JSON.stringify(newFavorites))
  }

  return (
    <>
    <div className='search'>
      <form className="find-form" Submit={handleSubmit}>
        <input className="find-input" type="text" placeholder="Get Eats!" onChange={handleChange} />
        <Button onClick={handleSubmit}  className="search-button">Find Eats!</Button>
      </form>
      </div>
      <div className="cards">
        {apiData &&
          apiData.reduce((acc,  restaurant) => {
            if (!(restaurant.image_url  && restaurant.location.zip_code === '33127')) return acc;
            acc.push(<RestaurantDetail key={restaurant.id} restaurant={restaurant} addFavorite={addFavorite} />)
            return acc;
          }, [])}
      </div>
    </>
  );
}

// }
//     const handleChan
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setQuery(search);
//     }
// ge = (event) => {
//         setSearch(event);
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setQuery(search);
//     }

//     return (
//         <React.Fragment>
//             <h1>MyEats</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder="MyEats"
//                 onChange={handleChange}></input>
//             </form>
//             <ul>
//             {apiData.map((result) => {
//                         <div key={}>
//                             <img alt="resturant-pic"
//                             src={`https://s3-media1.fl.yelpcdn.com/bphoto/Z14GLdIxNJ1XsuQdYUdOuA/o.jpg`}></img>
//                         </div>

//                 }
//             )}
//             </ul>
//         </React.Fragment>
//     )
// };
//  Resturant()
export default FindEats;
