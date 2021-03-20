import { Container, Grid, Paper } from "@material-ui/core";
import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import './slider';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default class Cardui extends Component {
  render() {
    return (
      <div>
           <div id='app'></div>
         
          <Container >
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper >
               
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Word of the Day
                  </Typography>
                  <Typography variant="h5" component="h2">Homemade Chiken Shawarma</Typography>
                  <Typography color="textSecondary">adjective</Typography>
                  <Typography variant="body2" component="p">
                   INGREDIENTS
                    <br />
                    3 large red onions,halved
                    <br/>
                    Pita
                    <br/>
                    Tabbouleh
                    <br/>
                    Tzatziki
                    <br/>
                    Grilled tomatoes
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
        </Grid>
        </Container>
      </div>
    );
  }
}
