import { useEffect, useState } from "react";
import axios from "axios";
import { CarList } from "../../components/CarList/CarList";
import { LoadMoreButton } from "../../components/LoadMoreButton/LoadMoreButton";
import { Loader } from "../../components/Loader/Loader";
import Filter from "../../components/Filter/Filter";

const URL = "https://65056b0eef808d3c66f00342.mockapi.io/adverts";

const Catalog = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedMinMileage, setSelectedMinMileage] = useState("");
  const [selectedMaxMileage, setSelectedMaxMileage] = useState("");
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [displayedCars, setDisplayedCars] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const initialDisplayCount = 8;
  const brands = [...new Set(cars.map((car) => car.make))];

  const maxPrice = cars
    .map((car) => Number(car.rentalPrice.replace(/\D/g, "")))
    .sort((a, b) => a - b)
    .reverse()[0];

  useEffect(() => {
    axios(URL)
      .then((ads) => {
        setCars(ads.data);
        setDisplayedCars(ads.data.slice(0, initialDisplayCount));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const applyFilters = (car) => {
      if (
        (!selectedBrand || car.make === selectedBrand) &&
        (!selectedPrice ||
          Number(car.rentalPrice.replace(/\D/g, "")) <= selectedPrice) &&
        (!selectedMinMileage || car.mileage >= selectedMinMileage) &&
        (!selectedMaxMileage || car.mileage <= selectedMaxMileage)
      ) {
        return true;
      }
      return false;
    };

    const filteredCars = cars.filter(applyFilters);

    if (filteredCars.length <= 8) {
      setShowLoadMore(false);
    } else {
      setShowLoadMore(true);
    }

    setDisplayedCars(filteredCars.slice(0, initialDisplayCount));
  }, [
    selectedBrand,
    selectedPrice,
    selectedMinMileage,
    selectedMaxMileage,
    cars,
    initialDisplayCount,
  ]);

  const handleFilterChange = (filters) => {
    setSelectedBrand(filters.brand);
    setSelectedPrice(filters.price);
    setSelectedMinMileage(filters.minMileage);
    setSelectedMaxMileage(filters.maxMileage);
  };

  const loadMoreCars = () => {
    const newDisplayCount = displayedCars.length + 8;

    const filteredCars = cars.filter((car) => {
      if (
        (selectedBrand && car.make !== selectedBrand) ||
        (selectedPrice &&
          Number(car.rentalPrice.replace(/\D/g, "")) > selectedPrice) ||
        (selectedMinMileage &&
          (car.mileage < selectedMinMileage ||
            (selectedMaxMileage && car.mileage > selectedMaxMileage)))
      ) {
        return false;
      }
      return true;
    });

    if (filteredCars.length <= newDisplayCount) {
      setShowLoadMore(false);
    }

    setDisplayedCars(filteredCars.slice(0, newDisplayCount));
  };

  useEffect(() => {
    axios(URL).then((ads) => setCars(ads.data));
  }, []);
  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Filter
            brands={brands}
            maxPrice={maxPrice}
            onFilterChange={handleFilterChange}
          />

          <CarList cars={displayedCars} />
          {showLoadMore && displayedCars.length < cars.length && (
            <LoadMoreButton onClick={loadMoreCars} />
          )}
        </>
      )}
    </section>
  );
};
export default Catalog;
