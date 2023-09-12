import styles from "../styles/weatherApp.module.css";

function WeatherApp() {
  const city = "San Francisco";
  const temperature = "67°F";
  const condition = "clear night sky";
  const windSpeed = "15 mph";
  const humidity = "90%";
  const precipitation = "2%";

  return (
    <div className={styles.weatherApp}>
      <img
        src="https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png"
        className={styles.weatherLogo}
      ></img>
      <h1 className={styles.title}>Weather in {city}</h1>
      <div className={styles.weatherInfo}>
        <p className={styles.temperature}>{temperature}</p>
        <p className={styles.condition}>{condition}</p>
        <p className={styles.windSpeed}>wind speed: {windSpeed}</p>
        <p className={styles.humidity}>humidity: {humidity}</p>
        <p className={styles.precipitation}>precipitation: {precipitation}</p>
      </div>
    </div>
  );
}

export default WeatherApp;
