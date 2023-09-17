import { Link } from "react-router-dom";
import css from "./CatalogButton.module.css";

export function CatalogButton() {
  return (
    <Link className={css.catalogBtn} to="/catalog">
      Go to catalog
    </Link>
  );
}
