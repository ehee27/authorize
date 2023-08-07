import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider, Typography } from '@material-ui/core'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/Home'
import Page2 from './components/pages/Page2'
import Form from './components/Form'
import Notfound from './components/Notfound'

const theme = createTheme({
  palette: {
    primary: {
      main: '#424242',
    },
    secondary: {
      main: '#263238',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Abel',
    },
    h2: {
      fontFamily: 'Abel',
    },
    h3: {
      fontFamily: 'Abel',
      color: '#37474f',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="page2" element={<Page2 />} />
          <Route exact path="form" element={<Form />} />
          <Route exact path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
