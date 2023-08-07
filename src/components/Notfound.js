import { Container, Grid, Typography, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  container: {
    padding: '10px',
  },
  notfoundBox: {
    border: '1pt solid rgb(235,235,235)',
    borderRadius: '.25rem',
    padding: '10px',
  },
})

const Notfound = () => {
  const classes = useStyles()
  //
  return (
    <Container className={classes.container}>
      <Grid className={classes.notfoundBox}>
        <Typography className={classes.title} variant="h3" gutterBottom>
          Page not found.
        </Typography>

        <Typography variant="p">
          Please return <Link to="/">Home</Link>
        </Typography>
      </Grid>
    </Container>
  )
}

export default Notfound
