import { Container, Grid, Typography, makeStyles } from '@material-ui/core'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const useStyles = makeStyles({
  container: {
    padding: '10px',
  },
  page2Box: {
    border: '1pt solid rgb(235,235,235)',
    borderRadius: '.25rem',
    padding: '10px',
  },
})

const Page2 = () => {
  const classes = useStyles()
  //
  return (
    <Container className={classes.container}>
      <Grid className={classes.page2Box}>
        <Typography className={classes.title} variant="h3" gutterBottom>
          Welcome to Page2
        </Typography>
      </Grid>
    </Container>
  )
}

export default Page2
