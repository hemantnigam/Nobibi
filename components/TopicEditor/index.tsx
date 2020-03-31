
import React from 'react';
import dynamic from 'next/dynamic';
import 'braft-editor/dist/index.css';

const BraftEditor = dynamic(
  import('braft-editor'),
  { ssr: false }
);

interface initProps {
  editorValue: object,
  editorChange: () => void
}

const TopicEditor = (props: initProps) => {
  const { editorValue, editorChange } = props;
  return (
    <BraftEditor
      value={editorValue}
      onChange={editorChange}
      style={{ border: '1px #dddddd solid', borderRadius: '2px' }}
    />
  );
}

export default TopicEditor;