import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOption } from "../../utils/constants";
import { filterWeatherData } from "../../utils/weatherApi";

function WeatherCard({ weatherData }) {
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
      <p className="weather-card__temp">{weatherData.temp.F} &deg; F</p>
      <img
        className="weather-card__image"
        src={weatherToDisplay.url}
        alt={weatherData.condition}
      />
    </section>
  );
}

export default WeatherCard;
