import styled from '@emotion/styled';
import { OutlinedInput } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const StyledAliasInput = styled(OutlinedInput)`
  font-size: 0.875rem;
  width: 113px;
  height: 32px;

  legend {
    display: none;
  }

  .MuiOutlinedInput-notchedOutline {
    top: 0;
  }

  .MuiInputBase-input {
    padding: 6px 14px;
    text-align: center;
  }

  .MuiOutlinedInput-root {
    height: 32px;
    width: 113px;
  }
`;
