import React from "react";
import {StatusBar, Image} from "react-native";
import {AppLoading} from "expo"
import {Asset} from "expo"
import {ThemeProvider} from "styled-components/native";
import {theme} from "./theme";

const App =()=>{
  return(
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content"/>
    </ThemeProvider>
  )
}

export default App;