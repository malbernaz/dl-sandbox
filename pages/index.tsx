import {
  CurrentForecast,
  ForecastCard,
  SevenDayForecast,
  usePageInteractions,
} from "../devlink";

const data = {
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

export default function Home() {
  return (
    <>
      <SevenDayForecast cards={
        data.weekForecast.map(f => (
          <ForecastCard 
            dayOfWeek={f.day} temp={f.temp} high={f.hi} low={f.low} 
          />
        ))
      } />
      <CurrentForecast 
        currentTemp={data.currentForecast.currentTemp + "º"}
        feelsLikeTemp={data.currentForecast.feelsLikeTemp}
        humidity={data.currentForecast.humidity}
        precipitation={data.currentForecast.precipitation}
        aqi={data.currentForecast.aqi}
        sunset={data.currentForecast.sunset}
      />
    </>
  );
}
