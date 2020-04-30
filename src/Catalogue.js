import React from "react";
import "./styles.css";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import CardCatalogue from './components/Card-catalogue';
import AddIcon from '@material-ui/icons/Add';
import Button from "@material-ui/core/Button";
import Pagination from '@material-ui/lab/Pagination';


import image1 from "./assets/images/image1.jpg";


import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    
  },
  info: {
    borderBottom: "1px solid #dbdbdb",
    paddingBottom: "24px",

    [theme.breakpoints.up("md")]: {
      borderRight: "1px solid #dbdbdb",
      borderBottom: 'none'
    },
    paddingRight: '25px',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  content: {
    paddingTop: "24px",
    justifyContent: 'start',
    [theme.breakpoints.up("md")]: {
      paddingLeft: '25px',
    },
  },
  cataTitle: {
    fontWeight: '700',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  },

}));

const data = {
  products: [
    {
      key: "1",
      title: "Product Title 1",
      body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed',
      image: image1,
    },
    {
      key: "2",
      title: "Product Title 2",
      body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed',
      image: image1,
    },
    {
      key: "3",
      title: "Product Title 3",
      body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed',
      image: image1,
    },
    {
      key: "3",
      title: "Product Title 4",
      body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed',
      image: image1,
    },
    {
      key: "3",
      title: "Product Title 5",
      body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed',
      image: image1,
    },
    {
      key: "3",
      title: "Product Title 6",
      body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed',
      image: image1,
    },
    
  ]
};

export default function FormPage() {
  const classes = useStyles();
  
  return(

    <Grid container>
      <Grid item xs={12} md={3} className={classes.info}> 
        <Typography variant="h6" className={classes.cataTitle}>
          Your Catalogue
        </Typography>
        <Typography variant="body1">
          Your Catalogue allows you to showcase your existing products and capabilities
        </Typography>
        <Button disableElevation variant="contained" color="primary" startIcon={<AddIcon />}>New Product</Button>
        <Typography variant="body1" color= "textSecondary">
          You have 2/8 Catalogue Products left on your plan
        </Typography>
        <Link href="#" underline="always">
          Upgrade for more
        </Link>
      </Grid>

      <Grid item xs={12} md={9} >
        <Grid container className={classes.content}>

        {data.products.map((product,index) =>
          <Grid item xs={6} sm={4} lg={3}>
            <CardCatalogue key={index} title={product.title} body={product.body} image={product.image}/>
          </Grid>
          )}

        </Grid>

        <div className={classes.pagination}>
          <Pagination color="primary" count={4} variant="outlined" shape="rounded" />
        </div>
        

      </Grid>
    </Grid>



    
  );
}

