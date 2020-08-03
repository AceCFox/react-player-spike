import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import {Paper, Button} from '@material-ui/core/';
//import ReactPlayer from 'react-player/youtube'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
  });


class ListItem extends Component {
    state = {embedUrl:'https://www.youtube.com/embed/'}

    handleDelete =()=>{
        console.log('clicked delete item', this.props.index)
        this.props.deleteFunction(this.props.index);
    }
    componentDidMount(){
        let embedUrl = this.state.embedUrl
        let inputUrl = this.props.url
        for(let i =0; i<inputUrl.length; i++){
            if ((inputUrl[i] === 'v') && (inputUrl[i+1]==='=')){
               let importantBit = inputUrl.slice(i+2);
               embedUrl += importantBit;
            }//end if
        }//end for  
        console.log(embedUrl)
        this.setState({embedUrl})
    }
 
  // Renders the entire app on the DOM
  render() {
    const {classes} = this.props;
    return (
        <>
        <Grid container spacing={4}
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item xs = {12} sm = {12} md={8} lg = {6}>
                <Paper className={classes.paper}>
                <iframe width="560" height="315" src={this.state.embedUrl} 
                    frameBorder="0"
                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen>
                </iframe>
                </Paper>
            </Grid>
            <Grid item xs = {12} sm={12} md ={4} lg = {6} >
                <Paper className={classes.paper}>
                    <p>Skate ipsum dolor sit amet, fakie out Zorlac impossible sponsored ollie north. 
                        Tailslide dude hang up skate or die. 
                        Fast plant ledge speed wobbles Vision lien air. 
                        Mike York kick-nose downhill lien air boned out.
                        </p>
                    <Button color = 'secondary' onClick = {this.handleDelete}>
                        delete
                    </Button>
                </Paper>
            </Grid>
        </Grid>
        <br/>
        <br/>
    </>
    );
  }
}

ListItem.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  
  export default withStyles(styles)(ListItem);
  