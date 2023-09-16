import { Link } from "react-router-dom";

export function MainPage() {
  return (
    <section>
      <h1>Welcome to EasyRent - Your Ultimate Car Rental Solution!</h1>
      <Link to="/catalog">Go to catalog</Link>
      <div>
        Discover the freedom of the open road with our premier car rental
        service. Whether you're planning a weekend getaway or a cross-country
        adventure, we've got you covered. With an extensive fleet of
        well-maintained vehicles, easy booking options, and unbeatable prices,
        we make renting a car effortless and enjoyable.
      </div>
      <div>
        <h2>Why choose us?</h2>
        <ul>
          <li>
            Diverse Fleet: From compact cars to spacious SUVs, we offer a wide
            range of vehicles to suit your needs and preferences.
          </li>
          <li>
            Seamless Booking: Our user-friendly website and mobile app make it
            simple to reserve your car, anytime and anywhere.
          </li>
          <li>
            Competitive Rates: We offer competitive rates and flexible rental
            options, ensuring you get the best value for your money.
          </li>
          <li>
            Exceptional Customer Service: Our team is dedicated to providing
            top-notch customer support to make your rental experience smooth and
            hassle-free.
          </li>
          <li>
            Safety First: Your safety is our priority. We maintain our vehicles
            to the highest standards, so you can drive with confidence.
          </li>
        </ul>
        <p>
          Experience convenience, affordability, and reliability like never
          before. Start your journey with EasyRent today!
        </p>
        <p>
          Feel free to customize this description to fit the specific features
          and benefits of your car rental service.
        </p>
      </div>
    </section>
  );
}
