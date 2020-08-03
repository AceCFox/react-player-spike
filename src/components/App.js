import React, {Component} from 'react';
import './App.css';
//import ReactPlayer from 'react-player/youtube'
import ListItem from './ListItem/ListItem';
import Button from '@material-ui/core/Button'


class App extends Component {
  state = {
    newUrl:'',
    urlArray: []};

  handleChange = (event) =>{
  //  console.log('in handleChange', event.target.value);
    this.setState({
      ...this.state.url,
      newUrl: event.target.value,
    })

  }//end handleChange

  handleSubmit = () => {
    console.log('in handleSubmit')
    if (this.state.newUrl !== ''){
      this.setState({
        urlArray: this.state.urlArray.concat(this.state.newUrl),
        newUrl: '',
      })
  }
    console.log(this.state)
  }//end handleSubmit

  handleClear = () =>{
    this.setState({
      urlArray: [],
      newUrl:'',
    })
  }

  deleteFunction  = (index) => {
    let array  =  this.state.urlArray;
    array.splice(index, 1)
    this.setState({
      ...this.state.newUrl,
      urlArray: array,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h3>enter a youtube url</h3>
        <input value = {this.state.newUrl} onChange = {this.handleChange}/>
        <br/>
        <Button variant = "contained" onClick = {this.handleSubmit}>
            Add video to list!
        </Button>
        <br/>
        {/* {JSON.stringify(this.state.urlArray)} */}
        {this.state.urlArray.map((url, index)=>
        <ListItem key = {index} url={url} index = {index} deleteFunction = {this.deleteFunction} />
        )}
        <br/>
        <Button variant = "outlined" color = "secondary" onClick = {this.handleClear}>
            clear List
         </Button>
        </header>
      </div>
    );
  }
}

export default App;
