import styled from '@emotion/styled';
import { MenuItem, Select } from '@mui/material';

// todo move reset transition to one component from all places

export const Actions = styled.div`
  position: absolute;
  right: var(--spacing-5);
  top: 0;
  bottom: 0;
  margin: auto 0;
  transform: translateX(50%);
  opacity: 0;
  pointer-events: none;
  transition: var(--transition);
`;

export const StyledMenuItem = styled(MenuItem)`
  &:hover {
    ${Actions} {
      pointer-events: initial;
      transform: translateX(0);
      opacity: 1;
    }
`;

export const StyledSelect = styled(Select)`
  transition: none;

  * {
    transition: none;
  }
`;
