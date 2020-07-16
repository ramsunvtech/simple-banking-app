import React from 'react';

// `Material` Component.
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import useStyles from './SummaryBlock.styles';

export default function SummaryBlock({ details = {} }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {details.from}
        </Typography>
        <Typography variant="h5" component="h2">
          Account ID: {details.account_id}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {details.transaction_date}
        </Typography>
        <Typography variant="body2" component="p">
          {details.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
