import { useEffect, useState } from "react";

import { CarList } from "../../components/CarList/CarList";
import axios from "axios";

const URL = "https://65056b0eef808d3c66f00342.mockapi.io/adverts";

export function Catalog() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios(URL).then((ads) => setCars(ads.data));
  }, []);
  return (
    <div>
      <CarList cars={cars} />
    </div>
  );
}
