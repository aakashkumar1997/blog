import React from 'react';
import logo from './logo.svg';
import ImageTile from './components/ImageTile';
import imageData from './imageData';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

function App() {
  const styles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  };

  const imageDataComponent = imageData.map((item) => {
    return (
      <ImageTile imgUrl = {item.imgUrl} name = {item.name} />
    )
  });

  return (
    <div className = "flex-container" style = {styles}>
      {imageDataComponent}
    </div>
  );
}

export default App;
