import React, { useState } from "react";
import css from "./Filter.module.css";

import clear from "../../assets/icons/clear.svg";
const Filter = ({ brands, maxPrice, onFilterChange }) => {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");
  const [showBrandOptions, setShowBrandOptions] = useState(false);
  const [showPriceOptions, setShowPriceOptions] = useState(false);
  const filters = {
    brand: brand,
    price: price,
    minMileage: minMileage,
    maxMileage: maxMileage,
  };
  const shouldShowClearBtn =
    brand !== "" || price !== "" || minMileage !== "" || maxMileage !== "";
  console.log(shouldShowClearBtn);
  const brandsToShow = brands.filter((item) =>
    item.toLowerCase().includes(brand.toLocaleLowerCase())
  );
  let arrayOfPrices = [];

  for (let i = 10; i <= maxPrice; i += 10) {
    arrayOfPrices.push(i);
  }

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleBrandClick = () => {
    setShowBrandOptions(!showBrandOptions);
    setShowPriceOptions(false);
  };

  const handlePriceClick = () => {
    setShowPriceOptions(!showPriceOptions);
    setShowBrandOptions(false);
  };

  const handleMinMileageChange = (event) => {
    setMinMileage(Number(event.target.value));
  };

  const handleMaxMileageChange = (event) => {
    setMaxMileage(Number(event.target.value));
  };

  const clearFilter = () => {
    setBrand("");
    setPrice("");
    setMinMileage("");
    setMaxMileage("");
  };

  return (
    <div className={css.filterContainer}>
      <div>
        <label onClick={handleBrandClick} className={css.filterLabel}>
          Car brand
          {showBrandOptions && (
            <div className={css.brandOptions} onClick={handleBrandClick}>
              {brandsToShow.map((brand) => (
                <div
                  className={css.option}
                  key={brand}
                  onClick={() => {
                    setBrand(brand);
                  }}
                >
                  {brand}
                </div>
              ))}
            </div>
          )}
        </label>

        <input
          className={css.selectBrand}
          placeholder="Enter the text"
          type="text"
          value={brand}
          onChange={handleBrandChange}
          onClick={handleBrandClick}
        />
      </div>

      <div>
        <label onClick={handlePriceClick} className={css.filterLabel}>
          Price/1 hour
          {showPriceOptions && (
            <div className={css.priceOptions}>
              {arrayOfPrices.map((price) => (
                <div
                  className={css.option}
                  key={price}
                  onClick={() => {
                    setPrice(price);
                  }}
                >
                  {price}
                </div>
              ))}
            </div>
          )}
        </label>
        <input
          className={css.selectPrice}
          onClick={handlePriceClick}
          type="text"
          placeholder="To $"
          value={price}
          onChange={handlePriceChange}
        />
      </div>

      <div>
        <label className={css.filterLabel}>Car mileage / km</label>
        <div className={css.inputBox}>
          <input
            type="text"
            placeholder="From"
            className={css.mileageFrom}
            onChange={handleMinMileageChange}
            value={minMileage}
          />
          <input
            type="text"
            placeholder="To"
            className={css.mileageTo}
            onChange={handleMaxMileageChange}
            value={maxMileage}
          />
        </div>
      </div>

      <button className={css.searchBtn} onClick={() => onFilterChange(filters)}>
        Search
      </button>
      {shouldShowClearBtn && (
        <button className={css.clearBtn} onClick={clearFilter}>
          <img src={clear} alt="clear button" />
        </button>
      )}
    </div>
  );
};

export default Filter;
