////this page is imported by SplashScreen.js
//page2 of container box
//this contains the parts that are shown on Container box, that opens up after searching the city

import styled from "styled-components";

const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 30px auto;
`;
const Condition = styled.span`
  margin: 20px auto;
  font-size: 16px;
  font-family: Exo;
  font-weight: 400;

  text-transform: capitalize;
  & span {
    font-size: 28px;
  }
`;
const WeatherLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;
const Location = styled.span`
  font-size: 28px;
  font-weight: bold;
`;
const NewSearch = styled.span`
  padding-left: 10px;
  padding-top: 5px;
  height: 22px;
  width: 22px;
  cursor: pointer;
  background-color: none;
  & img {
    width: 100%;
    height: 100%;
  }
`;
//contains both location and the magnify image(newsearch)
const InfoLocation = styled.span`
  display: flex;
  flex-direction: row;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

const WeatherInfolabel = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin: 20px 25px 10px;
  text-align: start;
  width: 90%;
`;
const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

//uses id given to weather info components
export const WeatherInfoIcons = {
  sunrise: "icons/sunrise.png",
  sunset: "icons/sunset.png",
  humidity: "icons/humidity.svg",
  wind: "icons/wind.svg",
  clouds: "icons/clouds.svg",
  visibility: "icons/clouds.svg",
};
export const WeatherIcons = {
  "01d": "icons/sunny2.png",
  "01n": "icons/night.svg",
  "02d": "icons/day.svg",
  "02n": "icons/cloudy-night.svg",
  "03d": "icons/scattered2.png",
  "03n": "icons/scattered2.png",
  "04d": "icons/broken4.png",
  "04n": "icons/broken3.png",
  "09d": "icons/shower.png",
  "09n": "icons/shower.png",
  "10d": "icons/rain-day.svg",
  "10n": "icons/rain-night.svg",
  "11d": "icons/storm.svg",
  "11n": "icons/storm.svg",
  "13d": "icons/snow3.png",
  "13n": "icons/snow.png",
  "50d": "icons/mist2.png",
  "50n": "icons/mist3.png",
};

function convertUnixTimestampToTime(unixTimestamp) {
  // Multiply by 1000 to convert from seconds to milliseconds
  const date = new Date(unixTimestamp * 1000);

  // Get hours, minutes, and seconds
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Format the time as HH:MM:SS
  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return formattedTime;
}

const WeatherInfoComponent = (props) => {
  const { name, value, id } = props;

  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[id]}></InfoIcon>
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};

const WeatherComponent = (props) => {
  const { weather } = props;

  return (
    <>
      <WeatherCondition>
        <Condition>
          <span>{`${weather?.main?.temp}°C`} | </span>
          <div>{weather?.weather[0].description}</div>{" "}
          <div>{`Feels like ${weather?.main?.feels_like}°C`}</div>{" "}
        </Condition>
        <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]}></WeatherLogo>
      </WeatherCondition>

      <InfoLocation>
        <Location>{` ${weather?.name},${weather?.sys.country} `} </Location>
        <NewSearch>
          <a href="https://4vinn-weather.netlify.app/">
            <img src="SearchAgain.png" />
          </a>
        </NewSearch>
      </InfoLocation>

      <WeatherInfolabel>Weather Info</WeatherInfolabel>

      <WeatherInfoContainer>
        <WeatherInfoComponent
          id="sunrise"
          name="sunrise"
          value={`${convertUnixTimestampToTime(weather?.sys?.sunrise)}`}
        ></WeatherInfoComponent>

        <WeatherInfoComponent
          id="sunset"
          name="sunset"
          value={`${convertUnixTimestampToTime(weather?.sys?.sunset)}`}
        ></WeatherInfoComponent>

        <WeatherInfoComponent
          id="humidity"
          name="humidity"
          value={`${weather?.main?.humidity}%`}
        ></WeatherInfoComponent>

        <WeatherInfoComponent
          id="wind"
          name="wind"
          value={`${weather?.wind?.speed}m/s`}
        ></WeatherInfoComponent>

        <WeatherInfoComponent
          id="visibility"
          name="visibility"
          value={`${weather?.visibility} m`}
        ></WeatherInfoComponent>

        <WeatherInfoComponent
          id="clouds"
          name="Cloud Cover"
          value={`${weather?.clouds?.all}%`}
        ></WeatherInfoComponent>
      </WeatherInfoContainer>
    </>
  );
};
export default WeatherComponent;
