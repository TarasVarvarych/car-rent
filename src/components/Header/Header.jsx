import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

export function Header() {
  return (
    <header>
      <nav className={css.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? css.active : css.inactive)}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => (isActive ? css.active : css.inactive)}
        >
          Catalog
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? css.active : css.inactive)}
        >
          Favorites
        </NavLink>
      </nav>
    </header>
  );
}
