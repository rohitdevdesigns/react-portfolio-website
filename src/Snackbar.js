import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import FavoriteIcon from "@material-ui/icons/Favorite";

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

export default function DirectionSnackbar() {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
           <FavoriteIcon  onClick={handleClick(TransitionUp)} />
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="Thanks for the Like"
        key={transition ? transition.name : ''}
      />
    </div>
  );
}
