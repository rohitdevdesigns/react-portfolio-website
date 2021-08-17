import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import LooksOneIcon from '@material-ui/icons/LooksOne';
import Looks4Icon from '@material-ui/icons/Looks4';
import Looks3Icon from '@material-ui/icons/Looks3';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const black="#222222";
const white="#999999";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '12px 18px',
    backgroundColor: black,
    color: white,
  },
  primaryTail: {
    backgroundColor: theme.palette.primary.main,
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            25th Jan 2007
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
          <LooksOneIcon />
          </TimelineDot>
          <TimelineConnector className={classes.primaryTail}/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Award1
            </Typography>
            <Typography>For xyz</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          2nd oct 2009
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
          <LooksTwoIcon />
          </TimelineDot >
          <TimelineConnector className={classes.primaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Award2
            </Typography>
            <Typography>For being best idol speaker</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          26th jan 2015
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot  color="primary" >
          <Looks3Icon />
          </TimelineDot>
          <TimelineConnector className={classes.primaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Award3
            </Typography>
            <Typography>For abcd</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          8th may 2019
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
          <Looks4Icon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Award4
            </Typography>
            <Typography>For being Idol for youth</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
