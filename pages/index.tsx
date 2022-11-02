import {
  CurrentForecast,
  ForecastCard,
  SevenDayForecast,
  usePageInteractions,
} from "../devlink";

const liveData = {
  weekForecast: [
    {
      day: "Monday",
      condition: "Partially cloudy",
      temp: 63,
      hi: 71,
      low: 59,
    },
    {
      day: "Tuesday",
      condition: "rainy",
      temp: 65,
      hi: 68,
      low: 47,
    },
    {
      day: "Wednesday",
      condition: "Partially cloudy",
      temp: 72,
      hi: 72,
      low: 55,
    },
    {
      day: "Thursday",
      condition: "Partially cloudy",
      temp: 68,
      hi: 71,
      low: 59,
    },
    {
      day: "Friday",
      condition: "Severe Storms",
      temp: 63,
      hi: 71,
      low: 59,
    },
    {
      day: "Saturday",
      condition: "Partially cloudy",
      temp: 63,
      hi: 71,
      low: 59,
    },
    {
      day: "Sumday",
      condition: "Partially cloudy",
      temp: 63,
      hi: 71,
      low: 59,
    },
  ],
  currentForecast: {
    currentTemp: "65º",
    feelsLikeTemp: "57º",
    humidity:"90%",
    precipitation: "0%",
    aqi: 27,
    sunset: "7:20pm"
  },
};

const TEMP = "F";

export default function Home() {
  return (
    <>
      <SevenDayForecast cards={
        liveData.weekForecast.map(f => (
          <ForecastCard 
            dayOfWeek={f.day} temp={f.temp} high={f.hi} low={f.low} 
          />
        ))
      } />
      <CurrentForecast 
        currentTemp={liveData.currentForecast.currentTemp + "º"}
        feelsLikeTemp={liveData.currentForecast.feelsLikeTemp + TEMP}
        humidity={liveData.currentForecast.humidity}
        precipitation={liveData.currentForecast.precipitation}
        aqi={liveData.currentForecast.aqi}
        sunset={liveData.currentForecast.sunset}
      />
    </>
  );
}
