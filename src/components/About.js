import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Container} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CV from "../files/Andrii_Petryk_Resume.pdf";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100vh",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "15rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
    height: "100%",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        About me
      </Typography>
      <Container maxWidth="lg">
        <Typography
          variant="subtitle1"
          align="left"
          className={classes.subtitle1}
        >
          Determined Web Developer lends more than 7 years of expertise in developing web-planning projects in fast-paced environments requiring fast turnaround. <br />
          Goal-oriented brings a strong commitment to collaboration and solutions-oriented problem-solving, adept at creating successful websites that meet customer needs. <br />
          Fully proficient in Javascript, Typescript and React library and related tools like Redux/React Query/Jest/Enzyme/React Testing Library. <br />
          Experienced working with teams to produce impactful, leading-edge websites that engage customers and deliver business results. <br />
          Logical and results-driven developer dedicated to building and optimizing user-focused websites for customers with various business objectives. <br />
          Judicious and creative when crafting effective websites, apps, and platforms to propel competitive advantage and revenue growth.<br />
          Checklist with expertise areas: <br/>
          <strong>-</strong> JavaScript (ES6). <br/>
          <strong>-</strong> Typescript. <br/>
          <strong>-</strong> React/Redux/React Query. <br/>
          <strong>-</strong> Jest/Enzyme/React Testing Library. <br/>
          <strong>-</strong> HTML5, CSS3, LESS/SASS/SCSS <br/>
          <strong>-</strong> Webpack <br/>
          <strong>-</strong> GIT, JIRA, Trello, Slack <br/>
          <a
            href={CV}
            download="Andrii_Petryk_Frontend_CV"
            target='_blank'
            rel="noopener noreferrer"
            style={{ display: "block", textDecoration: "none", textAlign: "center"}}
          >
            <Button variant="contained" color="primary">
              Download CV
            </Button>
          </a>
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
