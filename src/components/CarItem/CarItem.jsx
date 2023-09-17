import css from "./CarItem.module.css";
import heartIcon from "../../assets/icons/heart.svg";
import blueHeartIcon from "../../assets/icons/heartBlue.svg";

import { useState } from "react";
import CarModal from "../CarModal/CarModal";
import { useDispatch, useSelector } from "react-redux";
import { getFavorite } from "../../redux/selectors";
import { removeFavorite, setFavorite } from "../../redux/FavoritesSlice";

export function CarItem({ car }) {
  const favorite = useSelector(getFavorite);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(
    favorite.favorites.includes(car.id)
  );
  const dispatch = useDispatch();
  //   console.log(favorite);

  const onLearnMoreClick = () => {
    setModalOpen(true);
  };

  const onFavoriteClick = () => {
    if (isFavorite) {
      console.log(dispatch(removeFavorite(car.id)));
      setIsFavorite(false);
      return;
    }
    dispatch(setFavorite(car.id));
    setIsFavorite(true);
  };

  const onModalClose = () => {
    setModalOpen(false);
  };
  const city = car.address.split(",").reverse()[1];
  const country = car.address.split(",").reverse()[0];
  return (
    <li className={css.item}>
      <button type="button" className={css.likeBtn} onClick={onFavoriteClick}>
        <img src={isFavorite ? blueHeartIcon : heartIcon} alt="heart" />
      </button>
      <div className={css.pic}>
        <img
          src={car.photoLink || car.img}
          alt={car.description}
          className={css.img}
        />
      </div>
      <div className={css.description}>
        <p>
          {car.make} <span className={css.model}>{car.model}</span>, {car.year}
        </p>
        <p>{car.rentalPrice}</p>
      </div>
      <div className={css.features}>
        <span>{city} |</span>
        <span> {country} |</span>
        <span> {car.rentalCompany} |</span>
        <span> {car.type} |</span>
        <span> {car.accessories[0]} </span>
      </div>
      <button className={css.btn} type="button" onClick={onLearnMoreClick}>
        Learn more
      </button>
      {isModalOpen && (
        <CarModal
          isOpen={isModalOpen}
          onClose={onModalClose}
          img={car.photoLink || car.img}
          alt={car.description}
          make={car.make}
          model={car.model}
          year={car.year}
          city={city}
          country={country}
          id={car.id}
          type={car.type}
          fuel={car.fuelConsumption}
          engine={car.engineSize}
          func={car.functionalities}
          conditions={car.rentalConditions}
          price={car.rentalPrice}
          mileage={car.mileage}
        />
      )}
    </li>
  );
}
