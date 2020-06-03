import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import TranslateIcon from '@material-ui/icons/Translate';
import PeopleIcon from '@material-ui/icons/People';

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
                    <h2 className={classes.title}>Voice/Speech to text</h2>
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
                            title="Language**"
                            description="With a support for more than 130 languages, Script onn transcribes your speech to text in real time using cutting edge Artificial intelligence  techniques."
                            icon={TranslateIcon}
                            iconColor="primary"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Accuracy"
                            description="Script onn is more affordable and reliable. We assure that we provide an accuracy above 95% for better pronounced voices.**"
                            icon={RecordVoiceOverIcon}
                            iconColor="primary"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Proffesion**"
                            description=" Students, professors,teachers,writers, bloggers, reporters or anyone who want their voice to be heard and written into text can use this.  Make your life and time valuable by using Script onn"
                            icon={PeopleIcon}
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
