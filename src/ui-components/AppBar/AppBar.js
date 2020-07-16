import React from 'react';
import { Link } from "react-router-dom";

// `Material` Component.
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import useStyles from './AppBar.styles';

export default function AppBar() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <MuiAppBar position="static">
        <Toolbar>
          <Typography variant="h2">
            <Link to="/" className={classes.headerLink}>Simple Banking App</Link>
          </Typography>
        </Toolbar>
      </MuiAppBar>
    </div>
  );
}
