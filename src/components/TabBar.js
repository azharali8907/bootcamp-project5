import React from 'react';
import Typist from 'react-typist';
import { makeStyles } from '@material-ui/core/styles';
import useWebAnimations from "@wellyshen/use-web-animations";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from '../logo.jpg';
import std2 from '../imges/std2.gif';
import Fade from 'react-reveal/Fade';
import Papar from './Papar';
import html5 from '../imges/html5.png';
import jslog from '../imges/jslog.png';
import css3 from '../imges/css3.png';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#ECECEE',
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor:'#29AF70',
    color:'#ffff',
    textAlign: 'left',
    
  },
  img:{
      float:'left',
      margin:'5px',
      width:'150px',
      height:'80px',

  },
  grid1:{
    padding: theme.spacing(2),
    backgroundColor:'#ECECEE',
    boxShadow:'none',
  },
  grid2:{
    padding: theme.spacing(2),
    backgroundColor:'#ECECEE',
    boxShadow:'none',
   // lineHeight:'35px',
  },
  grid3:{
    padding: theme.spacing(2),
    backgroundColor:'#ECECEE',
    boxShadow:'none',
    textAlign:"center",
    color: theme.palette.text.secondary,
    width:'100%',
  },
  grid4:{
    padding: theme.spacing(2),
    backgroundColor:'#ECECEE',
    boxShadow:'none',
    
    textAlign:'center',
    
  },
 
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const { ref:a } = useWebAnimations({
    keyframes:[ 
      {transform: "translate(200px, 0)"},
      
      
      
    ],
    timing: {
      delay: 1000, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
    
  });

  const { ref:b } = useWebAnimations({
    keyframes:[ 
      {transform: "translate(0, 200px)"},
      
      
      
    ],
    timing: {
      delay: 700, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
    
  });

  const { ref:c } = useWebAnimations({
    keyframes:[ 
      {transform: "translate(0, 200px)"},
      
      
      
    ],
    timing: {
      delay: 500, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
    
  });

  const { ref:d } = useWebAnimations({
    keyframes:[ 
      {transform: "translate(0, 200px)"},
      
      
      
    ],
    timing: {
      delay: 300, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
    
  });


  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12}>
          <Paper className={classes.paper} >
           
            <img src={logo} alt={logo} className={classes.img} />
            <h1>PanaCloud Bootcamp</h1>
          </Paper>
        </Grid>
       
        <Grid item xs={6}>
          <Paper className={classes.grid1}>
         <Fade left>
         <img src={std2} alt={std2} style={{width:'100%', height:'500px'}} /> 
           </Fade> 
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.grid2} style={{width:'95%', height:'504px'}}>
        <Fade right> <h1>Bootcamp 2020</h1></Fade>
         <Typist> <h3>Free Online Learn to Earn Fasttrack Bootcamp to Learn Freelancing and do Remote Work in the COVID-19 Economic Environment</h3>
           <p>TWe will teach you online to Build Full Stack Mobile Web Apps including e-commerce apps using React,
           Gatsby.js, Redux, GraphQL, Node.js/Express, MongoDB, Git, GitHub, GitHub Actions,
          Terraform, Google Cloud Run, AWS EC2, Contentful, Stripe, SnipCart, Shopify, etc.
           and to sell your services on Upwork and Fiverr.

          We have to understand humanity is facing a COVID-19 induced global economic recession
           and only the high-tech and software companies have grown and their stock 
           prices and business have risen in this environment. We need to immediately get 
           ready to face the upcoming economic crises boldly.  
            </p> </Typist>
           
          </Paper>
         </Grid>
         
         <Grid item md>
          <Paper className={classes.grid3}>
            <p style={{fontSize:'50px'}}>You have First to Learn</p>
            </Paper>
        </Grid>
      <Grid container spacing={3} >
        <Grid item xs={4} >
          <Paper className={classes.grid4} ref={b} >
            <a href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6">
            <img src={html5} alt={html5} style={{width:'250px', height:'250px'}} />
            </a>
             
          </Paper>
        </Grid>
        <Grid item xs={4} >
          <Paper className={classes.grid4} ref={c}>
          <a href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob">
          <img src={css3} alt={css3} style={{width:'335px', height:'250px'}} />
          </a>
          </Paper>
        </Grid>
        <Grid item xs={4} >
          <Paper className={classes.grid4} ref={d}>
          <a href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo">
          <img src={jslog} alt={jslog} style={{width:'237px', height:'237px', marginTop:'33px'}} />
          </a>
          </Paper>
        </Grid>
        
      </Grid> 
      </Grid>
      <Papar/>
    </div>
  );
}