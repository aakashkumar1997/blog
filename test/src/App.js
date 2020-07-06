import React from 'react';
import logo from './logo.svg';
import ImageGrid from './components/ImageGrid';
import './App.css';

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      isLoading: false,
      isClicked: false,
      data: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
      fetch('http://localhost:5000/fetchImageData')
          .then(response => response.json())
          .then(data => {
              this.setState({
                data: data
              })
          })
          .catch(error => console.log(error));
  }

  handleClick () {
      this.setState({
        isLoading: true,
        isClicked: false
      })
      setTimeout(() => {
          this.setState({
            isLoading: false,
            isClicked: true
          })
      }, 1500)
  }

  render() {
    return (
      <div className="flex-container">
          <button onClick = {this.handleClick} className = "loadMoreButton"> Load Images </button>    
          {
            this.state.isClicked ? <ImageGrid data = {this.state.data}/> : (this.state.isLoading && <p>Fetching from API...</p>)
          }
      </div>
    )
  }
}

export default App;
