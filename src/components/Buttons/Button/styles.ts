import styled from '@emotion/styled';
import CircularProgress from '@mui/material/CircularProgress';

export const Text = styled.span<{ transparent?: boolean }>`
  ${(props) =>
    props.transparent &&
    `
    opacity: 0;
  `}
`;

export const StyledProgress = styled(CircularProgress)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;
