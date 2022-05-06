import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
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
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h3"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021-2022
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Senior Frontend Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Wabco
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <strong>Project:</strong> Freight tracking system <br/>
            <strong>Technologies:</strong> React, Redux, React Query, React Testing library <br/>
            <strong>Responsibilities:</strong> Take part in the development of micro frontend architecture of applications used in building complex approaches. <br/>
            Developing an internal library of components for reuse in different applications. Engaging in the implementation of ready-made design solutions in the component library using React/Redux/React Query. <br/>
            Covering the written code with unit tests using tools such as Jest/ Enzyme/React Testing Library. Reviewing the code of other developers to maintain the quality and approved architecture of code and applications in general. <br/>
            I take part in calls with the team for making mutual solutions to lay down the structure of the code and interact with the backend team. Drawing up documentation on the basis of decisions made on team calls.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020-2021
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Senior Frontend Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Koyfin
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <strong>Project:</strong> Financial data and analytics platform for researching stocks; <br/>
            <strong>Technologies:</strong> Frontend development(Typescript, Javascript, React/Redux/Rx.js) <br/>
            <strong>Responsibilities:</strong> Developing and maintaining the internal system of components, processing a large data stream, and preparing it for display in tables and graphs, optimization of components and data for their display
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018-2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Frontend Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Agile Fuel
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <strong>Project:</strong> Employee Reward Management System; <br/>
            <strong>Technologies:</strong> Frontend development(Javascript, React/Redux). <br/>
            <strong>Responsibilities:</strong> React/Redux development - in details:
            A creation pages for SPA, implementation of highly loaded parts of the site, for example, implementation of tables, and their optimization for a large amount of data.
            Optimization for mobile devices.
            Contribution to the development of custom library components which we use in our applications.
            Participation in the development of a wrapper for redux, which allows reuse of the same solutions for different apps without duplication the code.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2016-2017
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Full-stack developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Crypto exchange system
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <strong>Project:</strong> Exchange and sales system;  <br/>
            <strong>Technologies:</strong> Blockchain, Stellar Javascript SDK, Node.js, MongoDB, Frontend development(Javascript, React/Redux).  <br/>
            <strong>Responsibilities:</strong> Participate in building the application architecture, development of the cryptocurrency exchange system.
            The biggest advantage of the chosen technology and development approach was excellent application performance, working without fails with the big number of users and simultaneous transactions.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2016-2017
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Frontend Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Overnight Glasses
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <strong>Project:</strong> e-commerce <br/>
            <strong>Technologies:</strong> CMS: Wordpress and React/Redux for front-end development. <br/>
            <strong>Responsibilities:</strong>  Site supporting, creation of landing pages, participate in the development of a smart selection of recommended products for users.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2013-2016
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Frontend Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Eastern Peak Software
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <strong>Project:</strong> maximum education, system of preparing students for exams <br/>
            <strong>Technologies:</strong> Yii for backend and Javascript/jQuery for frontend development <br/>
            <strong>Responsibilities:</strong>  Development of modules for students testing, creation of independent pages for unifying system with javascript and jQuery, HTML markup pages from PSD, mail markup, creative interaction with designers team.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
