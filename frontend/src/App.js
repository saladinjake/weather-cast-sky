import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

const theme = createTheme({
  palette: {
    primary: { main: '#3f51b5' },
    secondary: { main: '#f50057' },
    background: { default: '#f4f6f8' }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif'
  }
});

const Placeholder = ({ title }) => (
  <Container style={{ paddingTop: '40px', textAlign: 'center' }}>
    <h1>{title}</h1>
    <p>Component implementation in progress...</p>
  </Container>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/forecast/:city" component={() => <Placeholder title="Detailed Forecast" />} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
