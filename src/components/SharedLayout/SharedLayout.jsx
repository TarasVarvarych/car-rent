import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import css from "./SharedLaout.module.css";
import { Header } from "../Header/Header";
import { Loader } from "../Loader/Loader";

export default function SharedLayout() {
  return (
    <div className={css.container}>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
