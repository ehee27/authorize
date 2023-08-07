import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  link: {
    color: 'white',
    marginRight: '10px',
    border: '2pt solid transparent',
    borderRadius: '.25rem',
    textDecoration: 'none',
    padding: '7px',
    '&:hover': {
      transition: '.2s ease',
      border: '2pt solid white',
      cursor: 'pointer',
    },
  },
})

const Menu = () => {
  const classes = useStyles()
  //
  return (
    <>
      <Link className={classes.link} to="/">
        HOME
      </Link>
      <Link className={classes.link} to="/page2">
        PAGE 2
      </Link>

      <Link className={classes.link} to="/form">
        FORM
      </Link>
    </>
  )
}

export default Menu
