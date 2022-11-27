import React from 'react';
// import SimpleMDE from 'react-simplemde-editor';
// import { Options } from 'easymde';
// import 'easymde/dist/easymde.min.css';
import { Box, InputLabel, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';
import MarkdownIt from 'markdown-it';
import MdEditor, { Plugins } from 'react-markdown-editor-lite';
import styles from './MarkdownController.module.scss';
import InfoTooltip from 'components/InfoTooltip';

import 'react-markdown-editor-lite/lib/index.css';

type TProps = {
  control?: any; // optional when using form provider
  name: string;
  insideDialog?: boolean;
  tooltip?: React.ReactNode;
  label?: React.ReactNode;
};

const mdParser = new MarkdownIt({
  breaks: true,
});
MdEditor.unuse(Plugins.Clear);
MdEditor.unuse(Plugins.FontUnderline);
MdEditor.unuse(Plugins.Image);

const MarkdownController = ({
  label,
  tooltip,
  name,
  control,
  insideDialog,
}: TProps) => {
  let fieldLabel = label;

  if (tooltip) {
    fieldLabel = (
      <>
        {label}
        <InfoTooltip>{tooltip}</InfoTooltip>
      </>
    );
  }

  return (
    <Box className={insideDialog ? styles.insideDialog : ''}>
      {fieldLabel && <InputLabel>{fieldLabel}</InputLabel>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          const handleChange = ({ text }: any) => {
            field.onChange(text.slice(0, 7000));
          };

          return (
            <>
              <MdEditor
                className={styles.root}
                value={field.value}
                onChange={handleChange}
                style={{ height: '300px' }}
                renderHTML={(text) => mdParser.render(text)}
                allowPasteImage={false}
                view={{ menu: true, md: true, html: false }}
                syncScrollMode={['rightFollowLeft', 'leftFollowRight']}
              />
              <Typography color="secondary" textAlign="right" mt={2}>
                {field?.value?.length || 0}/7000
              </Typography>
            </>
          );
        }}
      />
    </Box>
  );
};

export default MarkdownController;
