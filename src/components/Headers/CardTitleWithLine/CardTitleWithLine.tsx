import React from 'react';

import { StyledLine, StyledWrapper } from './styles';

type TProps = {
  sufix?: React.ReactNode;
  children?: React.ReactNode;
};

const CardTitleWithLine: React.FC<TProps> = ({ children, sufix }) => (
  <StyledWrapper>
    <h4>{children}</h4>
    <StyledLine />
    {!!sufix && sufix}
  </StyledWrapper>
);

export default CardTitleWithLine;
