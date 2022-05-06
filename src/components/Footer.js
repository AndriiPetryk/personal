import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// import Facebook from "@material-ui/icons/Facebook";
// import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <a href="https://www.linkedin.com/in/andriipetryk/">
        <BottomNavigationAction icon={<LinkedInIcon />} className={classes.root} />
      </a>
      <a href="https://github.com/AndriiPetryk">
        <BottomNavigationAction icon={<GitHubIcon />} className={classes.root} />
      </a>
      <a href="https://www.instagram.com/">
        <BottomNavigationAction icon={<Instagram />} className={classes.root} />
      </a>
    </BottomNavigation>
  );
};
export default Footer;
