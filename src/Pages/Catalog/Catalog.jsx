import { useEffect, useState } from "react";
import axios from "axios";
import { CarList } from "../../components/CarList/CarList";
import { LoadMoreButton } from "../../components/LoadMoreButton/LoadMoreButton";

const URL = "https://65056b0eef808d3c66f00342.mockapi.io/adverts";

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [displayedCars, setDisplayedCars] = useState([]);
  const initialDisplayCount = 8;

  useEffect(() => {
    axios(URL).then((ads) => {
      setCars(ads.data);
      setDisplayedCars(ads.data.slice(0, initialDisplayCount));
    });
  }, []);

  const loadMoreCars = () => {
    const newDisplayCount = displayedCars.length + 8;
    setDisplayedCars(cars.slice(0, newDisplayCount));
  };

  useEffect(() => {
    axios(URL).then((ads) => setCars(ads.data));
  }, []);
  return (
    <>
      <CarList cars={displayedCars} />
      {displayedCars.length < cars.length && (
        <LoadMoreButton onClick={loadMoreCars} />
      )}
    </>
  );
};
export default Catalog;
