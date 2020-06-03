import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import ExtensionIcon from '@material-ui/icons/Extension';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import ShareIcon from '@material-ui/icons/Share';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
// Buttons
import Button from '@material-ui/core/Button';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Script Onn</h2>
          <h5 className={classes.description}>
            Script onn automates an incredibly time-consuming process of capturing all of your lectures/meetings or any live conversations. 
            You can now have the peace of mind to focus on the conversation knowing that Notes on is taking care of making the notes for you.
                    
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Easy To Apply"
                          description="Script onn comes with a google chrome extension using which you can instantly transcribe lectures, meetings, or any video with just a single click."
                          icon={ExtensionIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
                          title="Search"
                          description="Scriptonn also provides you an easy Search across your documents and other important highlights."
                          icon={FindInPageIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
                          title="Sharing"
               description="Since script onn uses your Google docs to make notes, it is easy to share notes and meeting recaps to teammates who couldn't attend."
              icon={ShareIcon}
              iconColor="primary"
              vertical
            />
                  </GridItem>
                  
                      <GridItem align='center'>
                      <Button
                          variant="contained"
                          color="textprimary"
                          className={classes.button}
                          href="#"
                          startIcon={<DescriptionIcon />}
                      >
                          
                              User Guide
      </Button>
                      </GridItem>
                          
                      
        </GridContainer>
      </div>
    </div>
  );
}
