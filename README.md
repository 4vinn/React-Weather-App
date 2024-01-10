## CloudCast <img src="https://img.shields.io/badge/ReactJs-white?logo=React&logoColor=blue" /> <img src="https://img.shields.io/badge/Axios-white?logo=axios&logoColor=purple" />

<details> <summary>A weather app made using React and Openweather API </summary>

- API setup with Open Weather
- API integration with Axios
- State Management using React Hooks
- Conditional Rendering of Components
- CICD on GitHub pages and Netlify

</details>

<details> <summary>Repo Structure</summary>

```
.
├── public/
│   ├── icons/
│   ├── index.html
│   └── other files
├── src/
|   ├── modules/
|   |   ├── CityComponent.js
│   |   └── WeatherComponent.js
│   ├── App.js
│   ├── index.css
│   ├── SplashScreen.js
│   └── index.js
|
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

```

</details>

### Deployed on 

- GitHub Pages : https://4vinn.github.io/React-Weather-App/
- Netlify : https://4vinn-weather.netlify.com/
  
> `npm run deploy` will automatically start generating a `build` folder and push it to `gh-pages` branch of this repo.
> 
> `gh-pages` branch is used for both Netlify and GitHub page
> 
> So any change in build folder will reflect in both GitHub pages and Netlify: **CICD**

### APIs used

- [OpenWeather API](https://openweathermap.org/)
- https://openweathermap.org/current
- Method: `GET`
- URL: `https://api.openweathermap.org/data/2.5/weather?q={CITY_NAME}&appid={API_KEY}`

### Libraries used:

- styled-components
- axios
- react-scripts

### How to run:

- Clone repo
- Install node modules
- `npm start`
