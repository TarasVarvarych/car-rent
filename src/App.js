import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { lazy } from "react";
const MainPage = lazy(() => import("./Pages/MainPage/MainPage"));
const Catalog = lazy(() => import("./Pages/Catalog/Catalog"));
const Favorites = lazy(() => import("./Pages/Favorites/Favotires"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
