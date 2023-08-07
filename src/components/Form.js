import {
  Container,
  Grid,
  Typography,
  makeStyles,
  TextField,
  Button,
} from '@material-ui/core'
import { useState } from 'react'

const useStyles = makeStyles({
  container: {
    padding: '10px',
  },
  formBox: {
    border: '1pt solid rgb(235,235,235)',
    borderRadius: '.25rem',
    padding: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
  },
  input: {
    marginBottom: '10px',
  },
  button: {
    color: 'white',
    boxShadow: '2px 3px 5px gray',
    '&:hover': {
      background: 'white',
      color: '#607d8b',
    },
  },
})

const Form = () => {
  const classes = useStyles()
  //
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  //
  const handleFullName = e => {
    setFullName(e.target.value)
  }
  const handleUsername = e => {
    setUsername(e.target.value)
  }
  const handlePassword = e => {
    setPassword(e.target.value)
  }
  //
  const handleSubmit = e => {
    e.preventDefault()
    console.log('This is the req.body object------', {
      fullname: fullName,
      username: username,
      password: password,
    })
    setFullName('')
    setUsername('')
    setPassword('')
  }
  //
  return (
    <Container className={classes.container}>
      <Grid className={classes.formBox}>
        <Typography className={classes.title} variant="h3" gutterBottom>
          Welcome to Form
        </Typography>
        <Grid className={classes.form}>
          <TextField
            className={classes.input}
            id="fullName"
            type="text"
            variant="outlined"
            label="fullname"
            value={fullName}
            onChange={handleFullName}
          />
          <TextField
            className={classes.input}
            id="username"
            type="text"
            variant="outlined"
            label="username"
            value={username}
            onChange={handleUsername}
          />
          <TextField
            className={classes.input}
            id="password"
            type="password"
            variant="outlined"
            label="password"
            value={password}
            onChange={handlePassword}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Form
