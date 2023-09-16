import { CarItem } from "../CarItem/CarItem";
import css from "./CarList.module.css";
import { nanoid } from "nanoid";

export function CarList({ cars }) {
  return (
    <ul className={css.list}>
      {cars.map((car) => (
        <CarItem car={car} key={nanoid()} />
      ))}
    </ul>
  );
}
