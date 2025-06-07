import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOption } from "../../utils/constants";
import { filterWeatherData } from "../../utils/weatherApi";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/currentTemperatureUnit";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const weatherOption = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  const weatherToDisplay =
    weatherOption.length > 0
      ? weatherOption[0]
      : defaultWeatherOption[weatherData.isDay ? "day" : "night"];

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weatherData.temp[currentTemperatureUnit]} &deg;{" "}
        {currentTemperatureUnit}
      </p>
      <img
        className="weather-card__image"
        src={weatherToDisplay.url}
        alt={weatherData.condition}
      />
    </section>
  );
}

export default WeatherCard;
