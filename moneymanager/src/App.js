import { React, useEffect, useState, Fragment } from 'react';
import './App.css';
import { AppBar,Tab, Tabs} from "@mui/material"

function App() {
  
  const getData=()=>{
    fetch('./info.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        console.log("woah")
      });
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="App">

      <AppBar position="static">
        <Tabs
          indicatorColor="primary"
          variant="fullWidth"
          aria-label="TODO">
            <Tab label="Tab1" value={0}/>
            <Tab label="Tab2" value={1}/>
            <Tab label="Tab3" value={2}/>
        </Tabs>
      </AppBar>
    </div>
  );
}

export default App;
