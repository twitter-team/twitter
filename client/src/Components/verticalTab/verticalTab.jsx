import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SearcComp from "../searchComp/SearchComp"
import TweetBody from "../TweetBody/TweetBody"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {connect} from "react-redux"

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

const useStyles = makeStyles((theme, h) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    display: 'flex',
    height: h,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  active: {
    flexGrow: 1,
    backgroundColor: "white",
    display: 'flex',
    flexDirection:"column",
    alignItems:"center",
    height: h,
  }
}));

const VerticalTabs = function ({ items,user }) {
  const classes = useStyles(0, 250);
  const [value, setValue] = React.useState(0);
  const isActive=useMediaQuery('(max-width:900px)')

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`${!isActive?classes.root:classes.active}`}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        textColor="primary" 
        indicatorColor="primary"
        
      >
        <Tab label={items[0]} {...a11yProps(0)} />
        <Tab label={items[1]} {...a11yProps(1)} />
        <Tab label={items[2]} {...a11yProps(2)} />
        <Tab label={items[3]} {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0} style={{ width: "100%" }}>
        {
          items[0] === "top" ?
            <div>
              <SearcComp />
              {
                user && user.tweets.map(tweet=>{
                    return(
                        <TweetBody tweetResult={tweet}/>
                    )
                })
            }
              
            </div>
            :user && user.bookmarks.map(tweet=>{
                  return(
                      <TweetBody tweetResult={tweet}/>
                  )
              })
          
        }

      </TabPanel>
      <TabPanel value={value} index={1} style={{ width: "100%" }}>
        {
          items[0] === "top" ?
            <div>
              <SearcComp />
              {
                user && user.tweets.map(tweet=>{
                    return(
                        <TweetBody tweetResult={tweet}/>
                    )
                })
            }
            </div>
            :user && user.tweets.map(tweet=>{
                  return(
                      <TweetBody tweetResult={tweet}/>
                  )
              })
          
        }
      </TabPanel>
      <TabPanel value={value} index={2} style={{ width: "100%" }}>
        {
          items[0] === "top" ?
            <div>
              <SearcComp />
              {
                user && user.tweets.map(tweet=>{
                    return(
                        <TweetBody tweetResult={tweet}/>
                    )
                })
            }
            </div>
            :user && user.tweets.map(tweet=>{
                  return(
                      <TweetBody tweetResult={tweet}/>
                  )
              })
          
        }
      </TabPanel>
      <TabPanel value={value} index={3} style={{ width: "100%" }}>
        {
          items[0] === "top" ?
            <div>
              <SearcComp />
              {
                user && user.tweets.map(tweet=>{
                    return(
                        <TweetBody tweetResult={tweet}/>
                    )
                })
            }
            </div>
            :user && user.likes.map(tweet=>{
                  return(
                      <TweetBody tweetResult={tweet}/>
                  )
              })
          
        }
      </TabPanel>
    </div>
  );
}
const mapStateToProps=({user:{user}})=>{
  return {
      user
  }
}
export default connect(mapStateToProps)(VerticalTabs)