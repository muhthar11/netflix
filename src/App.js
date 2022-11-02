import React from "react";
import NavBar from "./Components/NevBar/NavBar";
import './App.css';
import {originals,trending,action,comedy,horror,romance,documentaries} from './urls'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Orginals'/>
      <RowPost url={trending} title='Trending'/>
      <RowPost url={action} title='Action'/>
      <RowPost url={comedy} title='Comedy'/>
      <RowPost url={horror} title='Horror'/>
      <RowPost url={romance} title='Romance'/>
      <RowPost url={documentaries} title='Documentaries'/>
    </div>
  );
}

export default App;
