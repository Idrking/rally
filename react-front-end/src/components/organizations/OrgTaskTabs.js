import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Tasks from "../Tasks/Tasks";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
    marginTop: 20,
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
    fontSize: "15px",
    marginLeft: theme.spacing(7),
    marginRight: theme.spacing(7),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    color: "#CFCFCF",
    "&:hover": {
      color: "#B6C7C3",
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

export default function OrgTaskTabs({ tasks, signups, orgView }) {
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
        {value === index && <Box p={3}>{children}</Box>}
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
          <AntTab label="Active" value="one" {...a11yProps("one")}></AntTab>
          <AntTab label="Past" value="two" {...a11yProps("two")} />
        </AntTabs>
      </div>
      <TabPanel value={value} index="one">
        <Tasks orgView={orgView} signups={signups} tasks={tasks.active} />
      </TabPanel>

      <TabPanel value={value} index="two">
        <Tasks tasks={tasks.past} />
      </TabPanel>
    </div>
  );
}
