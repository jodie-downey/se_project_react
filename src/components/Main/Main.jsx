import WeatherCard from "../WeatherCard/WeatherCard";
import "./cards.css";
import "./main.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/currentTemperatureUnit";

function Main({ weatherData, handleCardClick, clothesItems, handleCardLike }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <main className="main__container">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text-weather">
          Today is {weatherData.temp[currentTemperatureUnit]} &deg;{" "}
          {currentTemperatureUnit} / You may want to wear:
        </p>
        <ul className="cards__list">
          {clothesItems.length > 0 ? (
            clothesItems
              .filter((item) => {
                return item.weather === weatherData.type;
              })
              .map((item) => {
                return (
                  <ItemCard
                    key={item._id}
                    item={item}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                  />
                );
              })
          ) : (
            <li>"Wardrobe Loading"</li>
          )}
        </ul>
      </section>
    </main>
  );
}

export default Main;
