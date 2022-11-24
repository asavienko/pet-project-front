import React, { useState } from 'react';
import cx from 'classnames';
import { Box, BoxProps } from '@mui/material';
import { RiImageLine } from 'react-icons/ri';
import styles from './Image.module.scss';

type TProps = {
  ratio?: number;
  containerProps?: BoxProps;
  placeholderWhileLoading?: boolean;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const Image = ({
  containerProps,
  ratio,
  placeholderWhileLoading,
  ...imgProps
}: TProps) => {
  const [loaded, setLoaded] = useState(!placeholderWhileLoading);
  const containerClassName = cx(styles.root, containerProps?.className);

  if (!ratio) {
    return (
      <img
        {...imgProps}
        className={cx(styles.simpleImage, imgProps.className)}
      />
    );
  }

  const paddingBottom = `${(1 / ratio) * 100}%`;

  const handleImageLoad = (event: any) => {
    setLoaded(true);
    imgProps?.onLoad?.(event);
  };

  return (
    <Box {...containerProps} className={containerClassName}>
      <div
        style={{
          paddingBottom,
          display: 'flex',
          width: '100%',
          backgroundColor: placeholderWhileLoading ? '#f1f4f8' : 'transparent',
          borderRadius: 8,
        }}
      >
        {!loaded && (
          <RiImageLine fontSize={24} className={styles.placeholderIcon} />
        )}
        <img
          {...imgProps}
          onLoad={placeholderWhileLoading ? handleImageLoad : imgProps.onLoad}
          style={{
            ...imgProps.style,
            opacity: loaded ? 1 : 0,
          }}
        />
      </div>
    </Box>
  );
};

export default Image;
