import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6)
  },
  searchPaper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(4),
    display: 'flex',
    gap: theme.spacing(2),
    alignItems: 'center'
  },
  weatherCard: {
    padding: theme.spacing(4),
    textAlign: 'center',
    background: 'linear-gradient(135deg, #3f51b5 30%, #2196f3 90%)',
    color: 'white',
    borderRadius: theme.spacing(2)
  },
  temp: {
    fontSize: '5rem',
    fontWeight: 'bold',
    margin: theme.spacing(2, 0)
  },
  detailItem: {
    padding: theme.spacing(2),
    textAlign: 'center'
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!city) return;
    setLoading(true);
    try {
      // Mocking the call since backend isn't running
      const res = {
        data: {
          city: city.charAt(0).toUpperCase() + city.slice(1),
          current: {
            temp: 24,
            condition: 'Sunny',
            humidity: 45,
            windSpeed: 12,
            pressure: 1012,
            timestamp: new Date().toISOString()
          },
          forecast: [] // would be populated
        }
      };
      setWeather(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className={classes.root}>
      <Paper className={classes.searchPaper} component="form" onSubmit={handleSearch}>
        <TextField 
          label="Search City" 
          variant="outlined" 
          fullWidth 
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          type="submit"
          disabled={loading}
          style={{ minWidth: '120px', height: '56px' }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Search'}
        </Button>
      </Paper>

      {weather && (
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.weatherCard}>
              <Typography variant="h4">{weather.city}</Typography>
              <Typography variant="subtitle1">{new Date(weather.current.timestamp).toLocaleDateString()}</Typography>
              <Typography className={classes.temp}>{weather.current.temp}°C</Typography>
              <Typography variant="h5">{weather.current.condition}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {[
                { label: 'Humidity', value: `${weather.current.humidity}%` },
                { label: 'Wind Speed', value: `${weather.current.windSpeed} km/h` },
                { label: 'Pressure', value: `${weather.current.pressure} hPa` },
                { label: 'Condition', value: weather.current.condition }
              ].map((item, idx) => (
                <Grid item xs={6} key={idx}>
                  <Paper className={classes.detailItem} elevation={0} style={{ backgroundColor: '#fff' }}>
                    <Typography variant="body2" color="textSecondary">{item.label}</Typography>
                    <Typography variant="h6">{item.value}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Dashboard;
