/*const {
  Button,
  Grid,
  makeStyles,
} = MaterialUI; */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  footer:{
    display:'flex',
    margin:'0px',
    padding:'0px',
    flexDirection:'column',
    alignItems: 'center',
    backgroundColor:'#000',
    paddingTop:'1.5rem',
    paddingBottom:'0.5rem',
    marginTop:'80vh',
    width:'100%'
  },
  list:{
    width:'85%',
    paddingTop:'2rem',
    paddingBottom:'1rem'
  },
  li:{
    fontSize:'0.5rem',
    color:'#fff',
    borderColor:'#000'
  },
  icons:{
    width:'60%',
  },
  gree:{
    fontSize:'1.5rem',
    color:'#fff'
  },
  a:{
    textDecoration:'none',
    color:'inherit'
  },
  drop:{
  display: 'none',
  position: 'absolute',
  backgroundColor: '#f1f1f1',
  zIndex: 1,
},
 dropdown:{
    '&:hover': {
      drop:{
         display:"block"
       }
    },
  },
  logo:{
    height:'2rem',
    width:'3rem',
    margin:'0px',
    padding:'0px',
    paddingTop:'0.75rem'
  },
  copy:{
    fontSize:'0.5rem',
    color:'#b0bec5',
    marginTop:'1rem',
    paddingTop:'1rem'
  }
                                        
  
}));

  function Main(){
    var list=['Contact Us', 'Help Donate', 'Be a Model', 'Become an affiliate']
    const classes = useStyles();
    return (
      <footer className={classes.footer}>
        <Grid className={classes.icons} container spacing={3} direction="row" justify="center" alignItems="center">
        <Grid id='instagram'  item xs>
          <a href='' title='Instagram' className='instagram' target='_blank'><i className={classes.gree + " fab fa-instagram"}></i></a>
        </Grid>
        <Grid id='facebook' item color='primary' xs>
          <a href='' title='like us on facebook' className='facebook' target='_blank'><i className={classes.gree + " fab fa-facebook"}></i></a>
        </Grid>
        <Grid id='whatsapp' item xs>
          <a href='' title='Whatsapp' className='whatsapp' target="_blank"><i className={classes.gree + " fab fa-whatsapp"}></i></a>
        </Grid>
        <Grid id='twitter' item xs>
          <a href='' title='follow us on twitter' className='whatsapp' target="_blank"><i color='#ef5350' class={classes.gree + " fab fa-twitter"}></i></a>
        </Grid>
        </Grid>
        <div className={classes.logo}> <img className={classes.logo} src='https://cdn.glitch.com/1301bdd6-ba12-41de-b324-c2a551fce868%2Fbluu%20png2.png?v=1591294857046' alt='logo'/></div>
        <div className={classes.copy}> © 2020. All right reserved</div>
        <Grid className={classes.list} container spacing={2} direction="row" justify="center" alignItems="center">
         <Grid item xs>
          <div className={classes.dropdown}>
            <div className={classes.drop}>
            <a href='' className={classes.a}> Mail Us</a>
            <a href='' className={classes.a}> Chat Us on facebook</a>
            <a href='' className={classes.a}>Connect on Instagram</a>
            </div>
            <Button className={classes.li} variant="outlined" ><a href='' className={classes.a}>{list[0]}</a></Button>
           
           </div>
          </Grid>
        <Grid item xs>
          <Button className={classes.li} variant="outlined" ><a className={classes.a} href=''>{list[1]}</a></Button>
        </Grid>
        <Grid item xs>
          <Button className={classes.li} variant="outlined" ><a className={classes.a} href=''>{list[2]}</a></Button>
        </Grid>
        <Grid item xs={3.5}>
          <Button className={classes.li} variant="outlined"><a className={classes.a} href=''>{list[3]}</a></Button>
        </Grid>
        </Grid>
      </footer>
    );
  }
//export default <Main />
//ReactDOM.render(<Main />, document.getElementById('root'));
