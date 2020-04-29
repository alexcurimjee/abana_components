import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";

import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Skeleton from "@material-ui/lab/Skeleton";
import Grid from "@material-ui/core/Grid";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  card: {
    [theme.breakpoints.down("xs")]: {
      width: 312
    },
    [theme.breakpoints.up("sm")]: {
      width: 450
    }
  },
  cardContainer: {
    display: "flex",
    borderBottom: "1px solid #dbdbdb",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row"
    }
  },
  media: {
    height: "100%",
    minHeight: 190
  },
  cardHeader: {
    padding: "10px 16px 8px"
  },
  cardTitle: {
    color: "#4D4F5C",
    fontWeight: 700,
    fontSize: "17px"
  },
  cardContent: {
    padding: "8px 16px ",
    paddingBottom: "10px!important"
  },

  tagContainer: {
    paddingTop: "16px",
    "& p": {
      color: theme.palette.text.disabled,
      display: "inline-flex"
    }
  },
  tagChip: {
    margin: "0px 8px 8px 0",
    borderRadius: "4px",
    "&$tagOutlined": {
      color: theme.palette.secondary.main
    }
  },
  tagOutlined: {},
  tagLabel: {
    padding: "0 9px"
  },

  actionIcons: {
    justifyContent: "space-between",
    padding: "8px 16px"
  },
  actionBookmark: {
    [theme.breakpoints.up("sm")]: {
      marginRight: "16px"
    }
  },
  actionContact: {
    padding: "5px 10px"
  },
  snackbar: {
    backgroundColor: theme.palette.primary.main,
    flexWrap: "nowrap"
  }
}));

export default function CardListing(props) {
  const classes = useStyles();
  const tags = ["Mauritius", "Cashmere", "BSCI"];

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
    <Card className={classes.card} variant="outlined">
      <CardActionArea>
        <Grid container className={classes.cardContainer}>
          <Grid item xs={12} sm={3}>
            <Skeleton
              animation="wave"
              variant="rect"
              className={classes.media}
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <CardHeader
              className={classes.cardHeader}
              avatar={
                <Skeleton
                  animation="wave"
                  variant="circle"
                  width={40}
                  height={40}
                />
              }
              action={null}
              title={props.owner + " is looking for:"}
              titleTypographyProps={{
                classes: {
                  root: classes.cardTitle
                }
              }}
            />

            <CardContent className={classes.cardContent}>
              <Typography variant="body2" color="textSecondary" component="p">
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore maxsgna aliqu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  eiusmod tempor..."
                }
              </Typography>

              <div className={classes.tagContainer}>
                <Chip
                  label={tags[0]}
                  variant="outlined"
                  classes={{
                    root: classes.tagChip,
                    outlined: classes.tagOutlined,
                    label: classes.tagLabel
                  }}
                />
                <Chip
                  label={tags[1]}
                  variant="outlined"
                  classes={{
                    root: classes.tagChip,
                    outlined: classes.tagOutlined,
                    label: classes.tagLabel
                  }}
                />
                <Chip
                  label={tags[2]}
                  variant="outlined"
                  classes={{
                    root: classes.tagChip,
                    outlined: classes.tagOutlined,
                    label: classes.tagLabel
                  }}
                />

                <p style={{ marginLeft: "20px" }}>...</p>
              </div>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
      <CardActions className={classes.actionIcons}>
        <Typography variant="body2" color="textSecondary" component="p">
          23 March 2020
        </Typography>
        <div>
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
            variant="outlined"
            color="primary"
            className={classes.actionContact}
          >
            Contact
          </Button>
        </div>
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
