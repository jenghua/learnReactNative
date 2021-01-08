import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/drawer'

const getFonts = () => Font.loadAsync({
  'eastSeaDokdo-Regular': require('./assets/fonts/EastSeaDokdo-Regular.ttf')
})


export default function App() {

  const [ fontsLoaded, setFontsLoaded ] = useState(false);
  if(fontsLoaded)
  {
    return (
      <Navigator />
    )
  } else {
    return (
      <AppLoading
      startAsync={getFonts}
      onError={console.warn}
      onFinish={()=> setFontsLoaded(true)}      
      />
    )
  }  
}

