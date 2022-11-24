import { Popper } from '@mui/material';

const CustomPopper = (props: any) => (
  <Popper
    {...props}
    style={{ ...props.style, transition: 'none' }}
    placement="bottom-start"
  />
);

export default CustomPopper;
