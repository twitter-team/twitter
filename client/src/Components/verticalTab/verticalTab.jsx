import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SearcComp from "../searchComp/SearchComp"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 200,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const VerticalTabs=function ({items}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label={items[0]} {...a11yProps(0)} />
        <Tab label={items[1]} {...a11yProps(1)} />
        <Tab label={items[2]} {...a11yProps(2)} />
        <Tab label={items[3]} {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0} style={{width:"100%"}}>
        <SearcComp/>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
      <SearcComp/>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
      <SearcComp/>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
      <SearcComp/>
        Item Four
      </TabPanel>
    </div>
  );
}
export default  VerticalTabs