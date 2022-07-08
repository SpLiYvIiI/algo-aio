import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Overveiw from './Overveiw';
import AdditionalSources from './AdditionalSources';
import Quiz from './Quiz';

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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const InfoAboutAlgorithmPage = ({ algorithmName, algorithmType }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      rowSpacing={1}
      columnSpacing={0}
      width="100%"
    >
      <Grid item xs={12} sx={{ borderBottom: 2, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Algorithm overview"
            {...a11yProps(0)}
            style={{
              color: 'black',
            }}
          />
          <Tab
            label="Additional sources"
            {...a11yProps(1)}
            style={{
              color: 'black',
            }}
          />
          <Tab
            label="Quiz"
            {...a11yProps(2)}
            style={{
              color: 'black',
            }}
          />
        </Tabs>
      </Grid>
      <Grid item xs={12}>
        <TabPanel value={value} index={0}>
          <Overveiw
            algorithmName={algorithmName}
            algorithmType={algorithmType}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AdditionalSources
            algorithmType={algorithmType}
            algorithmName={algorithmName}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Quiz />
        </TabPanel>
      </Grid>
    </Grid>
  );
};

export default InfoAboutAlgorithmPage;
