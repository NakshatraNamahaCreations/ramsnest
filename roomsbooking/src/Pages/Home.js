import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Slider from './Slider'
import { App as CapacitorApp } from '@capacitor/app';

function Home() {
  CapacitorApp.addListener('backButton', ({canGoBack}) => {
    if(!canGoBack){
      CapacitorApp.exitApp();
    } else {
      window.history.back();
    }
  });
  return (
    <div>
      <Header />
      <Slider />
      <Footer />
    </div>
  )
}

export default Home
