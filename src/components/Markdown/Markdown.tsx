/* eslint-disable @typescript-eslint/no-unused-vars */
import cx from 'classnames';
import { Divider, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

import styles from './Markdown.module.scss';

const Markdown = ({ className, components, ...rest }: any) => (
  <ReactMarkdown
    {...rest}
    className={cx(className, styles.root)}
    remarkPlugins={[remarkGfm, remarkBreaks]}
    linkTarget="_blank"
    components={{
      h1: ({ node, ...props }) => <Typography variant="h1" {...props} />,
      h2: ({ node, ...props }) => <Typography variant="h2" {...props} />,
      h3: ({ node, ...props }) => <Typography variant="h3" {...props} />,
      h4: ({ node, ...props }) => <Typography variant="h4" {...props} />,
      h5: ({ node, ...props }) => <Typography variant="h5" {...props} />,
      h6: ({ node, ...props }) => <Typography variant="h6" {...props} />,
      p: ({ node, ...props }) => <Typography variant="body1" {...props} />,
      hr: ({ node, ...props }) => <Divider {...props} sx={{ my: 7 }} />,
      ...components,
    }}
  />
);

export default Markdown;
