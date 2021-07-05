 //TODO: STEP 1 - Import the useState hook.
 import React, { useState } from "react";
 import "./App.css";
 import BottomRow from "./BottomRow";
 import ReactDOM from "react-dom";
 

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore , setHomeScore] = useState(0);
  const [awayScore , setAwayScore] = useState(0);
  const [quarter , setQuarter] = useState(0)
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          
          <div className="timer">00:03
          <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        </div></div>
          
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
            
          
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__fieldGoal" onClick = {() => setHomeScore(homeScore + 5)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {() => setHomeScore(homeScore + 3)}>Home Field Goal Button</button>
           
        </div>
        <button className="homeButtons__fieldGoal" onClick = {() => setHomeScore(homeScore * 0)}>Reset Home Score</button> 
        

        <div> 
        <button  onClick = {() => setQuarter(quarter + 1)}>Quarter</button>
        <button  onClick = {() => setQuarter(quarter * 0)}>Quarter Reset</button>
        
        </div>
        <button className="awayButtons__fieldGoal" onClick = {() => setAwayScore(awayScore * 0)}>Reset Away Score</button>
        
        <div className="awayButtons">
        <button className="awayButtons__fieldGoal" onClick = {() => setAwayScore(awayScore + 5)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {() => setAwayScore(awayScore + 3)}>Away 
          Field Goal Button</button>
          
        </div>
      </section>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;