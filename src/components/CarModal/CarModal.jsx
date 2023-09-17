import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import css from "./CarModal.module.css";
import { nanoid } from "nanoid";
import iconClose from "../../assets/icons/close.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "541px",
  height: "752px",
  bgcolor: "background.paper",
  borderRadius: "24px",
  boxShadow: 24,
  p: 4,
  padding: "40px",
  alightItems: "center",
  justifyContent: "center",
};

export default function CarModal({
  isOpen,
  onClose,
  img,
  alt,
  make,
  model,
  year,
  city,
  country,
  id,
  type,
  fuel,
  engine,
  func,
  conditions,
  price,
  mileage,
}) {
  const [open, setOpen] = React.useState(isOpen);
  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const newMileage = mileage.toString().split("");
  newMileage.splice(1, 0, ",");
  const mileageToShow = newMileage.join("");

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button type="button" onClick={handleClose} className={css.closeBtn}>
            <img src={iconClose} alt="close icon" />
          </button>
          <img src={img} alt={alt} className={css.pic} />
          <h2 className={css.title}>
            {make} <span className={css.model}>{model}</span>, {year}
          </h2>

          <div className={css.info}>
            <span>{city} |</span>
            <span> {country} |</span>
            <span> Id: {id} |</span>
            <span> Year: {year} |</span>
            <span> Type: {type} |</span>
            <span> Fuel Consumption: {fuel} |</span>
            <span> Engine Size: {engine} </span>
          </div>
          <p className={css.description}>{alt}</p>

          <h3 className={css.subtitle}>Accessories and functionalities:</h3>
          <p className={css.features}>{func.join(" | ")}</p>
          <h3 className={css.subtitle}>Rental conditions:</h3>
          <div className={css.conditions}>
            {conditions.split("\n").map((condition) => {
              const conditionParts = condition.match(/(\D+)(\d+)/);
              if (conditionParts) {
                const textBeforeNumber = conditionParts[1];
                const number = conditionParts[2];
                return (
                  <span key={nanoid()} className={css.condition}>
                    {textBeforeNumber}
                    <span className={css.accent}>{number}</span>
                  </span>
                );
              } else {
                return (
                  <span key={nanoid()} className={css.condition}>
                    {condition}
                  </span>
                );
              }
            })}
            <span className={css.condition}>
              Mileage: <span className={css.accent}>{mileageToShow}</span>
            </span>
            <span className={css.condition}>
              Price: <span className={css.accent}>{price}</span>
            </span>
          </div>
          <button type="button" className={css.btn}>
            Rental car
          </button>
        </Box>
      </Modal>
    </div>
  );
}
