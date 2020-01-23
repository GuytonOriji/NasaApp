import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Axios from 'axios';
import Center from './center';
import Footer from './footer';




function App() {


 let [picOfTheDay, setPod] = useState()

function Pod(){

  Axios.get("https://api.nasa.gov/planetary/apod?api_key=n2SjQzacGW1ut0ZIxQoy1bNNZGoGIX2RhigGdAWl")
    .then(res=>{
      console.log(res.data)
      setPod(picOfTheDay = res.data.img_src)
    })
}


 

  return (
    <div className="App" onLoad={Pod}>
     

      <Header className="App-header"/>
      <Center  img={picOfTheDay}/>
      <Footer />
    </div>
  );
}

export default App;
