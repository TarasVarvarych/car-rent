import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getFavorites } from "../../redux/selectors";
import { CarList } from "../../components/CarList/CarList";
import { LoadMoreButton } from "../../components/LoadMoreButton/LoadMoreButton";
import { Title } from "../../components/Title/Title";
import { CatalogButton } from "../../components/CatalogButton/CatalogButton";

const Favorites = () => {
  const { favorites } = useSelector(getFavorites);
  const [cars, setCars] = useState(favorites);

  const [displayedCars, setDisplayedCars] = useState([]);
  const initialDisplayCount = 8;

  const loadMoreCars = () => {
    const newDisplayCount = displayedCars.length + 8;
    setDisplayedCars(cars.slice(0, newDisplayCount));
  };

  useEffect(() => {
    setCars(favorites);
  }, [favorites]);

  useEffect(() => {
    setDisplayedCars(cars.slice(0, initialDisplayCount));
  }, [cars]);

  return (
    <section>
      {displayedCars.length === 0 ? (
        <div>
          <Title text={"You have no favorite cars yet"} />
          <CatalogButton />
        </div>
      ) : (
        <>
          <CarList cars={displayedCars} />
          {displayedCars.length < cars.length && (
            <LoadMoreButton onClick={loadMoreCars} />
          )}
        </>
      )}
    </section>
  );
};
export default Favorites;
