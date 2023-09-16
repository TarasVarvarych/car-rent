import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import css from "./SharedLaout.module.css";

export default function SharedLayout() {
  return (
    <div className={css.container}>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
