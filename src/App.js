import React from 'react'
import Home from './pages/home'
import Learn from './pages/learn'
import Build from './pages/build'
import Explore from './pages/explore'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'



function App() {
  return (
    <Router>
      <ThemeProvider theme={THEME}>
        <Route path="/" exact component={Home} />
        <Route path="/learn" exact component={Learn} />
        <Route path="/learn/:chapter" component={Learn} />
        <Route path="/build" exact component={Build} />
        <Route path="/explore" exact component={Explore} />
      </ThemeProvider>
    </Router>
  );
}

const THEME = createMuiTheme({
  typography: {
    "fontFamily": "\"Comfortaa\", \"cursive\"",
    "fontSize": 16,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  },
  palette: {
    secondary: {
      main: '#7A67EE'
    }
  }
});

export default App;
