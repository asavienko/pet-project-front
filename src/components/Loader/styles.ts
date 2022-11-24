import styled from '@emotion/styled';

// eslint-disable-next-line import/prefer-default-export
export const StyledLoaderWrapper = styled.div<{
  position: 'absolute' | 'fixed' | 'static';
  withLogo?: boolean;
}>`
  position: ${(props) => props.position};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  z-index: 100;

  ${(props) =>
    props.withLogo &&
    `
    flex-direction: column;
  `}
`;
