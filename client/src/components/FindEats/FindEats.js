import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import RestaurantDetail from '../RestaurantDetail/RestaurantDetail';
import { parseStringifiedJSON } from '../../helpers';
import Loader from 'react-loader-spinner';
import './FindEats.css';

var shuffle = require('shuffle-array');

function FindEats(props) {
  const [apiData, setApiData] = useState([]);
  const [query, setQuery] = useState('food');
  const [search, setSearch] = useState('');
  const [all, setAll] = useState([]);
  const [budget, setBudget] = useState({
    cheap: false,
    average: false,
    expensive: false
  });

  useEffect(() => {
    const getApiData = async () => {
      const result = await axios.get(
        `/api/restaurants/search/:wynwood/${query}`
      );
      setApiData(result.data);
    };
    getApiData();
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

  const onChangeCheap = e => {
    setBudget({ cheap: !budget.cheap });
  };

  const onChangeAverage = e => {
    setBudget({ average: !budget.average });
  };

  const onChangeExpensive = e => {
    setBudget({ expensive: !budget.expensive });
  };

  const restList = apiData

    .filter(data =>
      budget.cheap
        ? data.price == '$'
        : budget.average
        ? data.price == '$$'
        : budget.expensive
        ? data.price == '$$$'
        : data
    )
    .reduce((acc, restaurant) => {
      if (!(restaurant.image_url && restaurant.location.zip_code === '33127'))
        return acc;
      acc.push(
        <RestaurantDetail
          key={restaurant.id}
          restaurant={restaurant}
          addFavorite={addFavorite}
          price={restaurant.price}
        />
      );
      return acc;
    }, []);

  return (
    <div className="findeats-bg">
      <div className="search">
        <Accordion className="filter-style">
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
        <div className="cards">{apiData && restList}</div>
      ) : (
        <div className="spinner">
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      )}
    </div>
  );
}

export default FindEats;
