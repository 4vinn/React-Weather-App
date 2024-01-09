<<<<<<< HEAD
//This page imports the SplashScreen page
//and exports the app
=======
//This page imports the SplashScreen page @ line 43
//and exports the app @ last line



>>>>>>> 4a5bac36288f119ca51d3774e5727fe0e60164ab

import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Splash from "./SplashScreen";

<<<<<<< HEAD
const LightTheme = {
  pageBackground: "white",
  titleColor: "black",
  tagLineColor: "red",
};
const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "	#ffe699",
  tagLineColor: "lavender",
  filter: "drop-shadow(0px 0px px #4444dd)",
};
=======

const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black"
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender",

}
>>>>>>> 4a5bac36288f119ca51d3774e5727fe0e60164ab

const themes = {
  light: LightTheme,
  dark: DarkTheme,
<<<<<<< HEAD
};

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={themes[theme]}>
      <Splash theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
=======
}



function App() {


  const [theme, setTheme] = useState("light");



  return (

    <ThemeProvider theme={themes[theme]}>

      <Splash theme={theme} setTheme={setTheme} />

    </ThemeProvider>

  )
>>>>>>> 4a5bac36288f119ca51d3774e5727fe0e60164ab
}

export default App;
