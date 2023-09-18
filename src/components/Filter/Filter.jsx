import React, { useState } from "react";
import css from "./Filter.module.css";
const Filter = ({ brands, maxPrice }) => {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [showBrandOptions, setShowBrandOptions] = useState(false);
  const [showPriceOptions, setShowPriceOptions] = useState(false);
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

  const handleSearch = () => {};

  return (
    <div className={css.filterContainer}>
      <div>
        <label onClick={handleBrandClick} className={css.filterLabel}>
          Car brand
          {showBrandOptions && (
            <div className={css.brandOptions} onClick={handleBrandClick}>
              {brandsToShow.map((brand) => (
                <div
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
          <input type="number" placeholder="From" className={css.mileageFrom} />
          <input type="number" placeholder="To" className={css.mileageTo} />
        </div>
      </div>

      <button className={css.searchBtn} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Filter;
