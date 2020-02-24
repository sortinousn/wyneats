import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './RestaurantDetail.css';

const RestaurantDetail = ({
  restaurant,
  addFavorite,
  favorite,
  removeFavorite
}) => (
  <Card style={{ width: '18rem', margin: '1rem' }}>
    <Card.Img variant="top" src={restaurant.image_url} className="card-img" />
    <Card.Body>
      <Card.Title>{restaurant.name}</Card.Title>
      <Card.Text>
        <span>{`Location: ${restaurant.location.display_address}`} </span>
        <br />
        <span>{`Services: ${restaurant.transactions}`}</span>
        <br />
        <span>{` Phone: ${restaurant.display_phone}`}</span>
        <br />
        <span>{`Price:${restaurant.price} `}</span>
      </Card.Text>
      <a target="_blank" href={restaurant.url}>
        <Button className="detail-button" variant="primary">
          More Details
        </Button>
      </a>

      {restaurant.id === favorite ? (
        <Button onClick={() => removeFavorite(restaurant)} variant="danger">
          Unfavorite
        </Button>
      ) : (
        <Button
          onClick={() => addFavorite(restaurant)}
          variant="outline-danger"
        >
          Favorite!
        </Button>
      )}
    </Card.Body>
    <Card.Footer>
      <big className="text-muted">Rating: {restaurant.rating}</big>
    </Card.Footer>
  </Card>
);

export default RestaurantDetail;
