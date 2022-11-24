import {
  Button,
  FormHelperText,
  IconButton,
  Link,
  MenuItem,
  Select,
  Switch,
  Tab,
  Tabs,
  TextField,
} from '@mui/material';
import { useSnackbar, VariantType } from 'notistack';

import ClockIcon from '../../Icons/ClockIcon';

const DefaultComponents = () => {
  const { enqueueSnackbar } = useSnackbar();

  const onClick = (variant: VariantType) => {
    enqueueSnackbar(`${variant} message example`, { variant });
  };

  return (
    <div>
      <div>
        <Button
          variant="contained"
          color={'inherit'}
          onClick={() => onClick('success')}
        >
          Show success dialog
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => onClick('error')}
        >
          Show error dialog
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onClick('info')}
        >
          Show info dialog
        </Button>
        <Button variant="contained" disabled>
          Normal
        </Button>
        <div style={{ background: '#F6F7F9' }}>
          <Button variant="outlined" onClick={() => onClick('default')}>
            {' '}
            Show default dialog
          </Button>
          <Button variant="outlined" disabled>
            Normal
          </Button>
        </div>
      </div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => onClick('warning')}
        >
          Show warning dialog
        </Button>
        <Button variant="contained" color="primary" size="large">
          Normal
        </Button>
        <Button variant="contained" disabled size="large">
          Normal1
        </Button>
        <Button variant="outlined" size="large">
          Normal2
        </Button>
        <Button variant="outlined" disabled size="large">
          Normal
        </Button>
      </div>
      <div>
        <Link href="#" variant={'subtitle2'}>
          Link
        </Link>
        <Link href="#" variant={'body2'}>
          Link
        </Link>
      </div>
      <div style={{ background: '#F6F7F9' }}>
        {/* NOTE: Should be used with createSvgIcon */}
        <IconButton>
          <ClockIcon />
        </IconButton>
        <IconButton disabled>
          <ClockIcon />
        </IconButton>
        <IconButton color={'secondary'}>
          <ClockIcon />
        </IconButton>
        <IconButton color={'secondary'}>
          <ClockIcon />
        </IconButton>
      </div>
      <div>
        <Switch defaultChecked />
        <Switch />
        <Switch disabled defaultChecked />
        <Switch disabled />
      </div>
      <div>
        <Tabs
          textColor="secondary"
          value={1}
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value={1} label="Item One" />
          <Tab value={2} label="Item Two" />
          <Tab value={3} disabled label="Item Three" />
        </Tabs>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </div>
      <div style={{ width: 410 }}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder={'Title'}
        />
      </div>
      <div style={{ width: 410 }}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder={'Title'}
          error
        />
        <FormHelperText>Helper text</FormHelperText>
      </div>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age"
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={10}
        label="Age"
      >
        <MenuItem value={10}>Ten Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        <MenuItem value={10}>Ten Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        <MenuItem value={10}>Ten Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        <MenuItem value={10}>Ten Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        <MenuItem value={10}>Ten Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        <MenuItem value={10}>Ten Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        <MenuItem value={10}>Ten Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        <MenuItem value={10}>Ten Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        <MenuItem value={10}>Ten Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        <MenuItem value={10}>Ten Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        <MenuItem value={10}>Ten Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        <MenuItem value={10}>Ten Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </div>
  );
};

export default DefaultComponents;
