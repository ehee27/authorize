import { Grid, makeStyles } from '@material-ui/core'
import Menu from './Menu'

const useStyles = makeStyles({
  navbarBox: {
    display: 'flex',
    alignItems: 'center',
    background: '#424242',
    // backgroundImage:
    //   'linear-gradient(146deg, rgba(0,0,0,1) 0%, rgba(23,23,24,1) 65%, rgba(51,56,85,1) 100%)',
    height: '7vh',
    padding: '0px 10px 0px 10px',
    boxShadow: '2px 3px 5px gray',
  },
})

const Navbar = () => {
  const classes = useStyles()
  //
  return (
    <Grid className={classes.navbarBox}>
      <Menu />
    </Grid>
  )
}

export default Navbar
