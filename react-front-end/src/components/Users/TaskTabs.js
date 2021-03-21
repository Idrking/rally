import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Tasks from "../Tasks/Tasks";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
    marginTop: 20
  },
  "&:focus": {
    borderBottom: "3px solid #FFA945",
  },
  indicator: {
    backgroundColor: "#FFA945",
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: 600,
    fontSize: "14px",
    marginRight: theme.spacing(4),
    marginLeft: theme.spacing(4),
    color: "#CFCFCF",
    "&:hover": {
      color: "#FFA945",
      opacity: 1,
    },
    "&$selected": {
      color: "#FFA945",
      fontWeight: 600,
    },
    "&:focus": {
      color: "#FFA945",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  // padding: {
  //   padding: theme.spacing(3),
  // },
  demo1: {
    backgroundColor: "transparent",
  },
}));

export default function TaskTabs({ tasks }) {
  const classes = useStyles();
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `wrapped-tab-${index}`,
      "aria-controls": `wrapped-tabpanel-${index}`,
    };
  }
  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs
          value={value}
          onChange={handleChange}
          aria-label="ant example"
          centered
        >
          <AntTab label="Available" value="one" {...a11yProps("one")}></AntTab>
          <AntTab label="Upcoming" value="two" {...a11yProps("two")} />
          <AntTab label="Completed" value="three" {...a11yProps("three")} />
        </AntTabs>
        <Typography className={classes.padding} />
      </div>
      <TabPanel value={value} index="one">
        <Tasks tasks={tasks.available} />
      </TabPanel>

      <TabPanel value={value} index="two">
        <Tasks tasks={tasks.active} />
      </TabPanel>
      <TabPanel value={value} index="three">
        These are completed
      </TabPanel>
    </div>
  );
}
