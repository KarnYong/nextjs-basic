import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Navbar from './Navbar'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
}));

export default function Attraction(props) {
  const classes = useStyles();
  const attraction = props.attraction

  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              {attraction.name}
            </Typography>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={attraction.coverimage}
                title={attraction.name}
              />
            </Card>
            <div style={{marginTop: '1em'}}>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                {attraction.detail}
              </Typography>
            </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}