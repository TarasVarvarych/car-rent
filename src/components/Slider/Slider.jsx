import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import cars from "../../cars.json";

export const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {cars.map((car, index) => (
          <div key={index}>
            <img
              style={{ width: "1440px" }}
              src={car.img || car.photoLink}
              alt={car.description}
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};
