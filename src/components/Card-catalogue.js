import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import image from "../assets/images/image1.jpg";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";


const useStyles = makeStyles(theme => ({
    root: {
      width: '215px',
    },
    cardContainer: {
        borderBottom: "1px solid #dbdbdb",
    },
    mediaContainer: {
        margin: '16px 16px 0',
    },

    media: {
        width: '183px',
        borderRadius: '4px',
        height: 0,
        paddingTop: '133%',
      },
    
    actionIcons: {
        justifyContent: 'end'
      },

    actionBookmark: {
    [theme.breakpoints.up("sm")]: {
        marginRight: "16px"
        }
    },
    snackbar: {
        backgroundColor: theme.palette.primary.main,
        flexWrap: "nowrap"
      }

  }));
  
  export default function MediaCard() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        open: false
      });
    
      const handleClick = newState => () => {
        setState({
          open: true,
          ...newState
        });
      };
    
      const handleClose = () => {
        setState({
          ...state,
          open: false
        });
      };
    
      const action = (
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      );
  
    return (
      <Card className={classes.root} variant="outlined">
        <CardActionArea className={classes.cardContainer}>
            <div className={classes.mediaContainer}>
                <CardMedia
                className={classes.media}
                image= {image}
                title="Catalogue Image"
            />
            </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Title
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions className={classes.actionIcons}>
       

          <FormControlLabel
            className={classes.actionBookmark}
            control={
              <Checkbox
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
                name="checkedH"
                color="primary"
                onChange={handleClick()}
              />
            }
          />
          <Button
            disableElevation
            variant="text"
            color="primary"
            className={classes.actionContact}
          >
            See More
          </Button>

      </CardActions>
      <Snackbar
       open={state.open}
       onClose={handleClose}
       autoHideDuration={6000}
       ContentProps={{
         classes: {
           root: classes.snackbar
         }
       }}
       message="Saved! Click on Top Right Menu to see your saved items"
       action={action}
     />
        
      </Card>
       
    );
  }