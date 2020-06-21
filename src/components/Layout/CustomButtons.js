import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { green, red, purple } from "@material-ui/core/colors";

export const SuccessButton = withStyles(() => ({
    root: {
      color: '#fff',
      backgroundColor: green[500],
      "&:hover": {
        backgroundColor: green[700]
      }
    }
}))(Button);

export const DangerButton = withStyles(() => ({
    root: {
      color: '#fff',
      backgroundColor: red[500],
      "&:hover": {
        backgroundColor: red[700]
      }
    }
}))(Button);


export const PurpleButton = withStyles(() => ({
    root: {
      color: '#fff',
      backgroundColor: purple[500],
      "&:hover": {
        backgroundColor: purple[700]
      }
    }
}))(Button);