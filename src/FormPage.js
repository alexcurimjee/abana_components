import React from "react";
import "./styles.css";
import TextField from "./components/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from '@material-ui/core/Hidden';



import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {},
  container:{
    borderBottom: '1px solid #dbdbdb',
    padding: '20px 0'
  },
  slider: {
    padding: '20px 0 0 24px',
    top: '70px',
    height: 'calc(100vh - 70px)',
    position: 'sticky',
    overflowY: 'auto',
    flexShrink: 0,
    marginTop: '70px',
    marginBottom: '70px'
  },
  sliderText: {
    padding: '8px 0 8px 30px',
    borderLeft: '2px solid black',
    color: theme.palette.text.secondary
  },
}));

export default function FormPage() {
  const classes = useStyles();
  const data1 = {
    title: "Contact Details",
    fields: [
      {
        id: "f_name",
        label: "First Name",
        length: 6,
      },
      {
        id: "l_name",
        label: "Last Name",
        length: 6,
      },
      {
        id: "email",
        label: "Email Address",
        length: 12,
      },
      {
        id: "cell",
        label: "Cell Phone",
        length: 6,
      },
      {
        id: "pos",
        label: "Position",
        length: 6,
      }
    ]
  };
  const data2 = {
    title: "Business Details",
    fields: [
      {
        id: "c_name",
        label: "Company Name",
        length: 12,
      },
      {
        id: "s_add",
        label: "Street Address",
        length: 6,
      },
      {
        id: "city",
        label: "City",
        length: 6,
      },
      {
        id: "zip",
        label: "ZIP / Postal Code",
        length: 6,
      },
      {
        id: "phone",
        label: "Phone Number",
        length: 6,
      }
    ]
  };
  const datas = [data1,data2,data1, data2];

  return (
    <div>

      <Grid container justify="center">
        <Hidden smDown>
          <Grid item md={3} className={classes.slider}>
            {datas.map((data, index)=>
              <Typography variant="body1" className={classes.sliderText}>
                {data.title}
              </Typography>
            )}
          </Grid>
        </Hidden>
        
        <Grid item xs={12} sm={10} md={9}>
          {datas.map((form, index) => 
            <Grid container key={index} className={classes.container}> 
              <Grid item sm={4}>
                <Typography variant="h6">
                  {form.title}
                </Typography>
              </Grid>
              <Grid item sm={8}>
                <Grid container>
                  {form.fields.map((form, index2) => 
                    <Grid item xs={12} sm={form.length} key={index2}>
                      <TextField label={form.label}/>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>

      </Grid>

    </div>
      
  );
}

/*



            */