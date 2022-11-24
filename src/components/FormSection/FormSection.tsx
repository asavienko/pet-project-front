import React from 'react';
import cx from 'classnames';
import Grid, { GridProps } from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography/index';
import {
  RiArrowRightSLine,
  RiAlertLine,
  RiCheckboxCircleFill,
} from 'react-icons/ri';

import styles from './FormSection.module.scss';

type TProps = {
  title?: React.ReactNode;
  disableChildrenWrapper?: boolean;
  leftContent?: React.ReactNode;
  wrapperProps?: GridProps;
  children?: React.ReactNode;
  endIcon?: 'warning' | 'success' | React.ReactNode;
  open?: boolean;
  onToggle?: () => void;
};

const iconsMap = {
  warning: (
    <RiAlertLine fontSize={24} className={cx(styles.endIcon, styles.warning)} />
  ),
  success: (
    <RiCheckboxCircleFill
      fontSize={24}
      className={cx(styles.endIcon, styles.success)}
    />
  ),
};

export const FormSection: React.FC<TProps> = ({
  leftContent,
  title,
  disableChildrenWrapper,
  children,
  wrapperProps,
  endIcon,
  open,
  onToggle,
}) => {
  const expandable = typeof open === 'boolean';
  const expanded = expandable ? open : true;

  let sectionIcon;
  if (typeof endIcon === 'string') {
    sectionIcon = iconsMap[endIcon as keyof typeof iconsMap];
  }

  if (typeof endIcon === 'object') {
    sectionIcon = endIcon;
  }

  return (
    <Grid spacing={{ xs: 5, sm: 6, md: 7 }} {...wrapperProps} container>
      <Box position="relative" width="100%">
        {!expanded && sectionIcon}
      </Box>

      <Grid item md={3}>
        <Box pl={expandable ? 7 : 0} position="relative">
          {expandable && (
            <RiArrowRightSLine
              fontSize={24}
              onClick={onToggle}
              className={cx(styles.arrow, open && styles.arrowExpanded)}
            />
          )}

          {title && (
            <Typography
              variant="body4"
              fontWeight="700"
              onClick={onToggle}
              className={expandable ? styles.expandableTitle : undefined}
            >
              {title}
            </Typography>
          )}
          {leftContent && (
            <Collapse in={expanded} timeout={300}>
              <Box mt={4}>{leftContent}</Box>
            </Collapse>
          )}
        </Box>
      </Grid>
      {disableChildrenWrapper && children}
      {!disableChildrenWrapper && (
        <Grid item xs={12} md={9}>
          <Collapse in={expanded} timeout={300}>
            {children}
          </Collapse>
        </Grid>
      )}
    </Grid>
  );
};
export default FormSection;
