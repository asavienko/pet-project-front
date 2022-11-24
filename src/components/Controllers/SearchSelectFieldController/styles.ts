import styled from '@emotion/styled';
import { Autocomplete } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const StyledSelect = styled(Autocomplete)`
  transition: none;

  * {
    transition: none;
  }

  .MuiAutocomplete-inputRoot {
    padding: 0 9px;
  }

  .MuiOutlinedInput-root > input {
    height: 33px;
  }

  .MuiAutocomplete-clearIndicator,
  .MuiAutocomplete-clearIndicator:hover,
  .MuiAutocomplete-popupIndicator,
  .MuiAutocomplete-popupIndicator:hover {
    background: none;
    box-shadow: none;

    .MuiTouchRipple-root {
      display: none;
    }
  }
`;
