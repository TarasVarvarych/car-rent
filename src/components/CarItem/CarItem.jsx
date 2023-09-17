import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import css from "./CarItem.module.css";
import heartIcon from "../../assets/icons/heart.svg";
import blueHeartIcon from "../../assets/icons/heartBlue.svg";
import CarModal from "../CarModal/CarModal";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../redux/selectors";
import { removeFavorite, setFavorite } from "../../redux/FavoritesSlice";

export function CarItem({ car }) {
  const { favorites } = useSelector(getFavorites);
  const isCarFavorite = favorites.some((item) => item.id === car.id);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(isCarFavorite);
  const dispatch = useDispatch();

  const onLearnMoreClick = () => {
    setModalOpen(true);
  };

  const onFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(car));
      setIsFavorite(false);
      toast.warning("Removed from favorites", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    dispatch(setFavorite(car));
    setIsFavorite(true);
    toast.success("Added to favorites", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </li>
  );
}
