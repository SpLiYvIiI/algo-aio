import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

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

export default function OverviewAndQuizz() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item sx={{ width: '100%' }}>
      <Grid item sx={{ borderBottom: 2, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Algorith overview"
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
      <TabPanel value={value} index={0}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae
        elementum dolor. Nulla auctor mattis nibh eu consectetur. Vivamus quis
        nunc leo. Sed ut malesuada risus. Nulla quis enim dictum, condimentum
        libero id, scelerisque nibh. Proin eleifend bibendum lorem, vel maximus
        nisl ultricies sed. Aliquam suscipit vehicula pulvinar. Sed nisi turpis,
        sodales quis dignissim id, vehicula eget dolor. Morbi a massa bibendum,
        dignissim ligula ac, ultrices nunc. Proin id orci mi. Cras euismod neque
        aliquet maximus gravida. Fusce fringilla malesuada lorem non mattis.
        Nunc iaculis mi nulla, nec auctor felis laoreet id. Praesent quis ipsum
        et enim ullamcorper ultrices. Duis congue ipsum quis mauris
        pellentesque, vitae accumsan est elementum. Suspendisse a dolor sed
        tortor mattis laoreet id non turpis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Pellentesque non dapibus justo. Duis in
        ullamcorper urna. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. In ornare massa nec turpis pulvinar venenatis. Ut non
        consequat justo. Praesent molestie elit a elit consectetur aliquam.
        Aliquam pulvinar, libero vitae commodo finibus, ipsum nunc laoreet
        dolor, vitae venenatis nibh dolor sit amet elit. Quisque mattis a lorem
        sed sollicitudin. Praesent porta lectus id felis convallis, vitae
        finibus ante porta. Etiam consequat turpis vehicula metus hendrerit,
        vitae luctus velit ultricies. Curabitur a ex mi.
      </TabPanel>
      <TabPanel value={value} index={1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae
        elementum dolor. Nulla auctor mattis nibh eu consectetur. Vivamus quis
        nunc leo. Sed ut malesuada risus. Nulla quis enim dictum, condimentum
        libero id, scelerisque nibh. Proin eleifend bibendum lorem, vel maximus
        nisl ultricies sed. Aliquam suscipit vehicula pulvinar. Sed nisi turpis,
        sodales quis dignissim id, vehicula eget dolor. Morbi a massa bibendum,
        dignissim ligula ac, ultrices nunc. Proin id orci mi. Cras euismod neque
        aliquet maximus gravida. Fusce fringilla malesuada lorem non mattis.
        Nunc iaculis mi nulla, nec auctor felis laoreet id. Praesent quis ipsum
        et enim ullamcorper ultrices. Duis congue ipsum quis mauris
        pellentesque, vitae accumsan est elementum. Suspendisse a dolor sed
        tortor mattis laoreet id non turpis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Pellentesque non dapibus justo. Duis in
        ullamcorper urna. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. In ornare massa nec turpis pulvinar venenatis. Ut non
        consequat justo. Praesent molestie elit a elit consectetur aliquam.
        Aliquam pulvinar, libero vitae commodo finibus, ipsum nunc laoreet
        dolor, vitae venenatis nibh dolor sit amet elit. Quisque mattis a lorem
        sed sollicitudin. Praesent porta lectus id felis convallis, vitae
        finibus ante porta. Etiam consequat turpis vehicula metus hendrerit,
        vitae luctus velit ultricies. Curabitur a ex mi.
      </TabPanel>
      <TabPanel value={value} index={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae
        elementum dolor. Nulla auctor mattis nibh eu consectetur. Vivamus quis
        nunc leo. Sed ut malesuada risus. Nulla quis enim dictum, condimentum
        libero id, scelerisque nibh. Proin eleifend bibendum lorem, vel maximus
        nisl ultricies sed. Aliquam suscipit vehicula pulvinar. Sed nisi turpis,
        sodales quis dignissim id, vehicula eget dolor. Morbi a massa bibendum,
        dignissim ligula ac, ultrices nunc. Proin id orci mi. Cras euismod neque
        aliquet maximus gravida. Fusce fringilla malesuada lorem non mattis.
        Nunc iaculis mi nulla, nec auctor felis laoreet id. Praesent quis ipsum
        et enim ullamcorper ultrices. Duis congue ipsum quis mauris
        pellentesque, vitae accumsan est elementum. Suspendisse a dolor sed
        tortor mattis laoreet id non turpis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Pellentesque non dapibus justo. Duis in
        ullamcorper urna. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. In ornare massa nec turpis pulvinar venenatis. Ut non
        consequat justo. Praesent molestie elit a elit consectetur aliquam.
        Aliquam pulvinar, libero vitae commodo finibus, ipsum nunc laoreet
        dolor, vitae venenatis nibh dolor sit amet elit. Quisque mattis a lorem
        sed sollicitudin. Praesent porta lectus id felis convallis, vitae
        finibus ante porta. Etiam consequat turpis vehicula metus hendrerit,
        vitae luctus velit ultricies. Curabitur a ex mi.
      </TabPanel>
    </Grid>
  );
}
