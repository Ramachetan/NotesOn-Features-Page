import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import DoneIcon from '@material-ui/icons/Done';
import ImportExportIcon from '@material-ui/icons/ImportExport';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
// Buttons
import Button from '@material-ui/core/Button';
import DescriptionIcon from '@material-ui/icons/Description';
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";


const useStyles = makeStyles(styles);

export default function ProductSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Audio/Video to text</h2>
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
                            title="Time**"
                            description="Script onn is created to save your valuable time to transcribe your audio/video files  to text using cutting edge AI techniques."
                            icon={QueryBuilderIcon}
                            iconColor="primary"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Accuracy ***"
                            description="We assure that we provide an accuracy above above 95 percent for better pronounced voices."
                            icon={DoneIcon}
                            iconColor="primary"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Covert Easy**"
                            description="Transcribe easily by uploading your audio/video file, Tell us the language spoken, and we will convert the audio to text in a very less time."
                            icon={ImportExportIcon}
                            iconColor="primary"
                            vertical
                        />
                    </GridItem>
                    <GridItem align='center'>
                    <Button
                        variant="contained"
                        color="textprimary"
                        className={classes.button}
                        alignItems="left"
                        href="#"
                        
                        object=" style='center' "
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
