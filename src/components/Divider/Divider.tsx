import MuiDivider, { DividerProps } from '@mui/material/Divider';

const Divider = (props: DividerProps) => (
  <MuiDivider
    {...props}
    sx={{
      my: {
        xs: 5,
        sm: 6,
        md: 7,
      },
      ...props.sx,
    }}
  />
);

export default Divider;
