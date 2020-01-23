import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import axios from 'axios';
import Center from './center';
import Footer from './footer';




function App() {


 let [picOfTheDay, setPod] = useState()


  axios.get("https://api.nasa.gov/planetary/apod?api_key=H58silTkK3hFIGRxDbvlKlk3LYS3Imk6czrMgcEB")
    .then(res=>{
      console.log(res.data)
      setPod(picOfTheDay = res.data.hdurl)
    })


 

  return (
    <div className="App" >
     

      <Header className="App-header"/>
      <Center  img={picOfTheDay}/>
      <Footer />
    </div>
  );
}

export default App;
