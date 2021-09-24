import { React, useState } from 'react';
import './App.css';
import { AppBar,Tab, Tabs, IconButton, Box, Typography, Button } from "@mui/material";
import {Dialog, DialogTitle, DialogContent, DialogActions} from "@mui/material"
import {AccountCircle} from '@mui/icons-material';
import Overview from "./overview/Overview"
import Budget from "./budget/Budget"
import Transaction from "./transactions/Transactions"
import Account from "./account/Account"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function App() {
  
  const [tabVal, setTab] = useState(0)
  const tabChange = (event, newValue) => {
    setTab(newValue);
  };

  const [openAcct, setOpenAcct] = useState(false);
  const handleOpenAcct = (section) => {
    setOpenAcct(true)
  };
  const handleCloseAcct = (section) => {
    setOpenAcct(false)
  };

  return (
    <div className="App">

      <AppBar position="static">
        <Tabs
          value={tabVal}
          onChange={tabChange}
          indicatorColor="secondary">
            <Tab label="Overview" value={0}/>
            <Tab label="Budget" value={1}/>
            <Tab label="Transactions" value={2}/>
            <IconButton
              size="large"
              onClick={handleOpenAcct}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
        </Tabs>
      </AppBar>

      <TabPanel value={tabVal} index={0}>
        <Overview/>
      </TabPanel>
      <TabPanel value={tabVal} index={1}>
        <Budget/>
      </TabPanel>
      <TabPanel value={tabVal} index={2}>
        <Transaction/>
      </TabPanel>

      <Dialog
        open={openAcct}
        onClose={handleCloseAcct}
        scroll='paper'
      >
        <DialogTitle>Account</DialogTitle>
        <DialogContent>
          <Account/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAcct} color="primary">Close</Button>
        </DialogActions>
      </Dialog>


    </div>
  );
}

export default App;
