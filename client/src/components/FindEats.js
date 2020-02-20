import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import RestaurantDetail from './RestaurantDetail';
import { parseStringifiedJSON } from '../helpers';
import Loader from 'react-loader-spinner';
var shuffle = require('shuffle-array');

function FindEats(props) {
  const [apiData, setApiData] = useState([]);
  const [query, setQuery] = useState('food');
  const [search, setSearch] = useState('');
  const [all, setAll] = useState([]);
  const [budget, setBudget] = useState({
    cheap: '$',
    average: '$$',
    expensive: '$$$'
  });

  useEffect(() => {
    //    if (query === '') return;
    const getApiData = async () => {
      const result = await axios.get(
        `/api/restaurants/search/:wynwood/${query}`
      );
      setApiData(result.data);
      console.log(apiData);
    };
    getApiData();
  }, [query]);

  const handleChange = event => {
    setSearch(event.target.value);
    console.log(search);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setQuery(search);
    console.log(query);
  };

  const addFavorite = restaurant => {
    const favoriteRestaurants = localStorage.getItem('FAVORITE_RESTAURANTS');
    const parsedFavorites = parseStringifiedJSON(favoriteRestaurants, []) || [];
    const newFavorites = [...parsedFavorites, restaurant];
    localStorage.setItem('FAVORITE_RESTAURANTS', JSON.stringify(newFavorites));
  };

  /* Joe 2-19: Added Random function. apidata gets dumped and shuffled which returns the first object, shuffle is random, no need to use math.floor */
  const randomPlace = () => {
    const shuffleData = shuffle(apiData);
    setApiData(shuffleData);
    const randomElement = apiData.slice(0, 1);
    setApiData(randomElement);
  };

  /* Joe 2-19: Hopefully this works. Decided to add this last minute, adding a filter functionality by budget.
  
  Yelp uses $ $$ $$$ to represent cost in their API data. onChange functions will filter and show only matched budget.
  
  */

  const onChangeCheap = e => {
    setBudget({ cheap: !budget.cheap });
    if (budget.cheap == '$') {
      setBudget({ cheap: '' });
    } else {
      setBudget({ cheap: '$' });
    }
  };

  const onChangeAverage = e => {
    setBudget({ cheap: !budget.average });
    if (budget.average == '$$') {
      setBudget({ average: '' });
    } else {
      setBudget({ average: '$$' });
    }
  };

  const onChangeExpensive = e => {
    setBudget({ expensive: !budget.expensive });
    if (budget.expensive == '$$$') {
      setBudget({ expensive: '' });
    } else {
      setBudget({ expensive: '$$$' });
    }
  };

  return (
    <>
      <div className="search">
        <Accordion className="filter-style" defaultActiveKey="0">
          <Card className="filter-card">
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Filter by Price
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <div>
                <Form.Check
                  checked={budget.cheap}
                  onChange={onChangeCheap}
                  type="checkbox"
                  id="cheap"
                  label="Under $10"
                />
                <Form.Check
                  checked={budget.average}
                  onChange={onChangeAverage}
                  type="checkbox"
                  id="average"
                  label="$11 - $30"
                />
                <Form.Check
                  checked={budget.expensive}
                  onChange={onChangeExpensive}
                  type="checkbox"
                  id="expensive"
                  label="Over $30"
                />
              </div>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <form className="find-form" onSubmit={handleSubmit}>
          <input
            className="find-input"
            type="text"
            placeholder="Get Eats!"
            onChange={handleChange}
          />
          <Button type="submit" className="search-button">
            Find Eats!
          </Button>
          <Button
            variant="info"
            type="submit"
            onClick={() => randomPlace()}
            className="search-button"
          >
            Random
          </Button>
        </form>
      </div>
      <div></div>
      {apiData.length > 0 ? (
        <div className="cards">
          {apiData &&
            apiData.reduce((acc, restaurant) => {
              if (
                !(
                  (restaurant.image_url &&
                    restaurant.location.zip_code === '33127' &&
                    restaurant.price == budget.cheap) ||
                  restaurant.price == budget.average ||
                  restaurant.price == budget.expensive
                )
              )
                return acc;
              acc.push(
                <RestaurantDetail
                  key={restaurant.id}
                  restaurant={restaurant}
                  addFavorite={addFavorite}
                />
              );
              return acc;
            }, [])}
        </div>
      ) : (
        <div className="spinner">
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      )}
    </>
  );
}

export default FindEats;
