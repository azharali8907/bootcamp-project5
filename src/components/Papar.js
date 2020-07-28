import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import github from '../imges/github.png';
import Typist from 'react-typist';
import useWebAnimations from "@wellyshen/use-web-animations";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:'300px',
    backgroundColor:'#ECECEE',
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor:'#ECECEE',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow:'none',
  },
  footer: {
    backgroundColor:'#000',
    color:'#ECECEE',
    height:'50px',
    textAlign:'center',
    padding:'6px',
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const { ref: icon } = useWebAnimations({
    keyframes:[ 
      {transform: "translate(100%)"},
      {playbackRate: 1},
     ],
    timing: {
      delay: 1000, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
    
  });

  return (
    <div className={classes.root}>
      <Grid container>
        
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <Typist><p style={{fontSize:'30px'}}> All The Study Material Available Here...</p></Typist> 

          <a href="https://github.com/panacloud/bootcamp-2020">
          <img src={github} alt={github} style={{width:'250px', height:'250px'}} ref={icon} />
          </a>
            
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.footer}>
            <p>Developed by Muhammad Azhar Ali</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
