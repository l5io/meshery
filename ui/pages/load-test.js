// import Layout from '../components/layout.js'
// import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'

// const Index = (props) => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(({show}) => (
//         <li key={show.id}>
//           <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//     <style jsx>{`
//       h1, a {
//         font-family: "Arial";
//       }

//       ul {
//         padding: 0;
//       }

//       li {
//         list-style: none;
//         margin: 5px 0;
//       }

//       a {
//         text-decoration: none;
//         color: blue;
//       }

//       a:hover {
//         opacity: 0.6;
//       }
//     `}</style>
//   </Layout>
// )

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//   const data = await res.json()

//   console.log(`Show data fetched. Count: ${data.length}`)

//   return {
//     shows: data
//   }
// }

// export default Index

/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Slider from '@material-ui/lab/Slider';
import Grid from '@material-ui/core/Grid';
import { NoSsr } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  root: {
    // textAlign: 'center',
    padding: theme.spacing(10),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
});

class LoadTest extends React.Component {
  state = {
    // duration: 1,
  };

  // handleDurationChange = (event, duration) => {
  //   this.setState({ duration });
  // };

  // handleClose = () => {
  //   this.setState({
  //     open: false,
  //   });
  // };

  // handleClick = () => {
  //   this.setState({
  //     open: true,
  //   });
  // };

  handleSubmit = () => {

  }

  render() {
    const { classes } = this.props;
    const { duration } = this.state;

    return (
      <NoSsr>
      <React.Fragment>
      <div className={classes.root}>
      {/* <Typography variant="h6" gutterBottom>
        Load Test
      </Typography> */}
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <TextField
            required
            id="url"
            name="url"
            label="URL for the load test"
            type="url"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="c"
            name="c"
            label="Concurrent requests"
            type="number"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="qps"
            name="qps"
            label="Queries per second"
            type="number"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="t"
            name="t"
            label="Duration in minutes"
            type="number"
            fullWidth
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
          />
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
        <Typography id="label">Duration - {duration} min</Typography>
          <Slider
            classes={{ container: classes.slider }}
            value={duration}
            min={1}
            max={30}
            step={1}
            onChange={this.handleDurationChange}
          />
        </Grid> */}
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
      <React.Fragment>
        <div className={classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
            className={classes.button}
          >
           Submit
          </Button>
        </div>
      </React.Fragment>
      </div>
    </React.Fragment>
      
        
      </NoSsr>
    );
  }
}

LoadTest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadTest);