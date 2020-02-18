import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const RestaurantDetail = ({ restaurant, addFavorite }) => (
    <Card style={{ width: '18rem', margin: '1rem' }}>
    <Card.Img
      variant="top"
      src={restaurant.image_url}
      className="card-img"
    />
    <Card.Body>
      <Card.Title>{restaurant.name}</Card.Title>
      <Card.Text>
        {`Location: ${restaurant.location.address1} ${restaurant.location.zip_code} `}
        {`Services: ${restaurant.transactions}`}
      </Card.Text>
      <a href={restaurant.url}>
        <Button className="detail-button" variant="primary">
          More Details
        </Button>
      </a>
      <Button onClick={() => addFavorite(restaurant)}  variant="outline-danger">Favorite!</Button>
    </Card.Body>
    <Card.Footer>
      <big className="text-muted">Rating: {restaurant.rating}</big>
    </Card.Footer>
  </Card>
)


export default RestaurantDetail;