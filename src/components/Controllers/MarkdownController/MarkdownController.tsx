import React, { useMemo } from 'react';
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

// const MarkdownController = ({ label, tooltip, name, control }: TProps) => {
//   const options = useMemo(
//     () =>
//       ({
//         minHeight: '185px',
//         maxHeight: '300px',

//         // hideIcons:
//         lineNumbers: false,
//         spellChecker: false,
//         status: false,
//         // inputStyle: 'textarea',
//         // status: [''],
//         toolbar: [
//           'bold',
//           'italic',
//           'strikethrough',
//           '|',
//           'heading',
//           'heading-1',
//           'heading-2',
//           'heading-3',
//           '|',
//           'unordered-list',
//           'ordered-list',
//           'link',
//           'horizontal-rule',
//           '|',
//           'undo',
//           'redo',
//           'clean-block',
//           '|',
//           'guide',
//         ],
//       } as Options),
//     []
//   );

//   let fieldLabel = label;

//   if (tooltip) {
//     fieldLabel = (
//       <>
//         {label}
//         <InfoTooltip>{tooltip}</InfoTooltip>
//       </>
//     );
//   }

//   return (
//     <Box>
//       {fieldLabel && <InputLabel>{fieldLabel}</InputLabel>}
//       <Controller
//         control={control}
//         name={name}
//         render={({ field }) => {
//           const handleChange = (value: string) => {
//             if (value.length <= 7000) {
//               field.onChange(value);
//             }
//           };

//           return (
//             <>
//               <SimpleMDE
//                 className={styles.root}
//                 // {...field}
//                 value={field.value}
//                 onChange={handleChange}
//                 options={options}
//               />
//               <Typography color="secondary" textAlign="right" mt={2}>
//                 {field?.value?.length || 0}/7000
//               </Typography>
//             </>
//           );
//         }}
//       />
//     </Box>
//   );
// };

const MarkdownController = ({
  label,
  tooltip,
  name,
  control,
  insideDialog,
}: TProps) => {
  const options = useMemo(
    () => ({
      // plugins: ['mode-toggle', 'full-screen'],
    }),
    []
  );

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
                {...options}
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
