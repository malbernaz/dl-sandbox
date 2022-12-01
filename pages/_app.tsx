
import "../devlink/index.css";
import "../devlink/global.css";

import type { AppProps } from "next/app";
import WeatherApi from "./api/weatherApi";

import {
  InteractionsProvider,
  Layout,
  SideNav,
  TopNav,
  SevenDayForecast,
  ForecastCard,
  CurrentForecast
} from "../devlink";

const TEMP = "F";
const DEGREE = "º";
const WEATHER = {
  RAIN: 'https://d1otoma47x30pg.cloudfront.net/636050012be0dc1150547ce3/636050012be0dc1150547d17_Group%201263.png',
  THUBNDER: 'https://d1otoma47x30pg.cloudfront.net/636050012be0dc1150547ce3/636050012be0dc1150547d1a_Group%201273.png',
  CLOUDLY: 'https://d1otoma47x30pg.cloudfront.net/636050012be0dc1150547ce3/636050012be0dc1150547d16_Group%201287.png',
  SUNNY: 'https://d1otoma47x30pg.cloudfront.net/636050012be0dc1150547ce3/636050012be0dc1150547d1b_Group%201289Weather%20behind.png'
}

export default function App({ Component, pageProps }: AppProps) {
  var latestWeather = WeatherApi("San Francisco, CA");

  return (
    <InteractionsProvider>
      <Layout
        sidebar={<SideNav/>}
        nav={<TopNav/>}
        main={
          <>
            <SevenDayForecast cards={
              latestWeather.weekForecast.map(f => (
                <ForecastCard 
                  dayOfWeek={f.day} 
                  temp={f.temp} 
                  high={f.hi} 
                  low={f.low} 
                  weatherDesc={f.condition}
                  iconImage={{src: WEATHER[f.condition]}}
                />
            ))
            } />
            <CurrentForecast
              currentTemp={latestWeather.currentForecast.currentTemp + DEGREE}
              feelsLikeTemp={latestWeather.currentForecast.feelsLikeTemp + TEMP}
              humidity={latestWeather.currentForecast.humidity}
              precipitation={latestWeather.currentForecast.precipitation}
              aqi={latestWeather.currentForecast.aqi}
              sunset={latestWeather.currentForecast.sunset}
            />
        </>
        }
      />
    </InteractionsProvider>
  );
}