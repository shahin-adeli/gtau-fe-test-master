import React, { useState, useEffect } from 'react';

const ACTIONS = ['View', 'Reply'];

const url = 'api/listings';

const formatAsCurrency = (price) => {
  if (typeof price === 'string') {
    return price;
  }
  return '$ ' + price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

const Listing = ({ car }) => {
  // TODO
  // This should be the component which renders an individual listing to the page

  const { title, description, imgUrl, price, location } = car;

  return (
    <div className='listing'>
      <h3 className='listing__title'>{title}</h3>
      <div className='price-location-container'>
        <h3 className='listing__price text-blue'>{formatAsCurrency(price)}</h3>
        <p className='listing__location'>{location}</p>
      </div>

      <div className='listing__image-container'>
        <img className='listing__image' src={imgUrl} alt={title} />
      </div>

      <p className='listing__description'>{description}</p>
      <div className='buttons'>
        <button onClick={() => console.log('View:', title)}>view</button>
        <button onClick={() => console.log('Reply:', title)}>reply</button>
      </div>
    </div>
  );
};

const Listings = (props) => {
  // TODO
  // This component should make a request to the api endpoint (props.dataEndpoint)
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    try {
      const reponse = await fetch(url);
      const newCars = await reponse.json();

      setCars(newCars);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setIsError(true);
    }
  };
  useEffect(() => {
    fetchCars();
  }, []);
  if (loading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  }
  if (isError) {
    return (
      <section className='error'>
        <h1>Something went wrong, please try again later...</h1>
      </section>
    );
  }

  // if (cars.length === 0) {
  //   return (
  //     <section>
  //       <h1>Nothing Was Found ...</h1>
  //     </section>
  //   );
  // }

  // then render the result as set of listings as per the design mocks
  // check props passed in from parent for other values that you may need to use

  return (
    <div>
      <div className='listings__header'>
        <h2>Search Results</h2>
        <p>
          <span className='text-blue'>{`${cars.length} results `}</span>
          <span>for </span>
          <span className='text-blue'>Ferrari </span>
          <span>in </span>
          <span className='text-blue'>Australia </span>
        </p>
      </div>
      <div className='listings__grid'>
        {cars.length === 0 && (
          <h1>Nothing was matched to your search in our database ...</h1>
        )}
        {cars.map((car, index) => (
          <Listing key={index} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Listings;
