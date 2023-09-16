import { Routes, Route } from "react-router-dom";

import "./App.css";
import SharedLayout from "./components/Container/SharedLayout";
import { MainPage } from "./Pages/MainPage/MainPage";
import { Catalog } from "./Pages/Catalog/Catalog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/catalog" element={<Catalog />} />
      </Route>
    </Routes>
  );
}

export default App;
