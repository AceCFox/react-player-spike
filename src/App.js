import React, {Component} from 'react';
import './App.css';
import ReactPlayer from 'react-player/youtube'


class App extends Component {
  state = {
    newUrl:'',
    url: ''};

  handleChange = (event) =>{
    console.log('in handleChange', event.target.value);
    this.setState({
      ...this.state.url,
      newUrl: event.target.value,
    })

  }//end handleChange

  handleSubmit = () => {
    console.log('in handleSubmit')
    this.setState({
      url: this.state.newUrl,
      newUrl: '',
    })
  }//end handleSubmit

  handleClear = () =>{
    this.setState({
      url: '',
      newUrl: '',
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h3>enter a youtube url</h3>
          <input value = {this.state.newUrl} onChange = {this.handleChange}/>
          <br/>
          <button onClick = {this.handleSubmit}>watch my video!</button>
          <br/>
        <ReactPlayer url={this.state.url} controls ={true} />
        <br/>
        <button onClick = {this.handleClear}>clear</button>
        </header>
      </div>
    );
  }
}

export default App;
