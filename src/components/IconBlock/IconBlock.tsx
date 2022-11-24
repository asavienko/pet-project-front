import React from 'react';
import styled from '@emotion/styled';
import Box, { BoxProps } from '@mui/material/Box';
import {
  RiInformationLine,
  RiCheckboxCircleLine,
  RiQuestionLine,
  RiDeleteBin2Line,
  RiErrorWarningLine,
} from 'react-icons/ri';

type TProps = {
  variant: 'info' | 'success' | 'delete' | 'confirmation' | 'error';
} & BoxProps;

const config: Record<
  TProps['variant'],
  { bg: string; color: string; icon: React.ReactNode }
> = {
  success: {
    bg: '#E2FCED',
    color: '#5CBF83',
    icon: <RiCheckboxCircleLine size={48} />,
  },
  info: {
    bg: '#F2F7FF',
    color: '#5A83EF',
    icon: <RiInformationLine size={48} />,
  },
  confirmation: {
    bg: '#FCF2FF',
    color: '#B953DD',
    icon: <RiQuestionLine size={48} />,
  },
  delete: {
    bg: '#FBF4F4;',
    color: '#FE3F6D',
    icon: <RiDeleteBin2Line size={48} />,
  },
  error: {
    bg: '#FBF4F4;',
    color: '#FE3F6D',
    icon: <RiErrorWarningLine size={48} />,
  },
};

const Container = styled(Box)<TProps>`
  background: ${(props) => config[props.variant].bg};
  color: ${(props) => config[props.variant].color};
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  width: 104px;
  height: 104px;

  svg {
    width: 48px;
  }
`;

const IconBlock: React.VFC<TProps> = (props) => (
  <Container {...props}>{config[props.variant].icon}</Container>
);

export default IconBlock;
