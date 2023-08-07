import { Container, Grid, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    padding: '10px',
  },
  homeBox: {
    border: '1pt solid rgb(235,235,235)',
    borderRadius: '.25rem',
    padding: '10px',
  },
})

const Home = () => {
  const classes = useStyles()
  //
  return (
    <Container className={classes.container}>
      <Grid className={classes.homeBox}>
        <Typography className={classes.title} variant="h3" gutterBottom>
          Welcome to Home
        </Typography>
        <Typography variant="p" gutterBottom>
          This boiler plate focuses on setting up a basic route tree, complete
          with Home, Page2 and Form components. The form handles input changes
          by packing up the state in a request body object. Essentially I need
          to be very proficient at setting up the frontend with little thought
          and having it ready for the data layer. We can now start augmenting
          with our server layer, routes, and controllers with Login
          authentication and authorization.
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="p">
          As a bonus we added a "Not Found" catch for non-existing routes, and
          we also created a simple them with a light blue primary color.
        </Typography>
      </Grid>
    </Container>
  )
}

export default Home
