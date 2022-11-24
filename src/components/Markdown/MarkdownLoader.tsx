import { useEffect, useState } from 'react';
import Markdown from './Markdown';

const MarkdownLoader = ({ link, ...rest }: { link: string }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(link)
      .then((response) => response.text())
      .then((text) => {
        // Logs a string of Markdown content.
        // Now you could use e.g. <rexxars/react-markdown> to render it.
        // console.log(text);
        setContent(text);
      });
  }, []);

  return <Markdown {...rest}>{content}</Markdown>;
};

export default MarkdownLoader;
