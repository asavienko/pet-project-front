import styled from '@emotion/styled';
import Box from '@mui/material/Box';

const LineThrough = styled(Box)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &:before {
    content: '';
    height: 1px;
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #e1e6f0;
  }

  & > * {
    background: #fff;
    display: inline-flex;
    padding-left: var(--spacing-5);
    padding-right: var(--spacing-5);
  }
`;

export default LineThrough;
