type Data = {
  name: string
}

export default function handler(
  city: String
) {
  let LIVE_DATA = {
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
          condition: "Rainy",
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
          temp: 99,
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
  return LIVE_DATA;
}
