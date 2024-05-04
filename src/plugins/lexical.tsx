import React, { useState } from 'react';
import { LexicalEditor } from '@lexical/react';

const EditorComponent = () => {
  const [value, setValue] = useState('');

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <LexicalEditor value={value} onChange={handleChange} />
    </div>
  );
};
// import {$getRoot, $getSelection} from 'lexical';
// import {useEffect} from 'react';
// import * as React from 'react';
// import { LexicalComposer } from '@lexical/react/LexicalComposer';
// import { ContentEditable } from '@lexical/react/LexicalContentEditable';
// import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
// import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
// import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
// import { HeadingNode } from '@lexical/rich-text';
// import { ListPlugin } from '@lexical/react/LexicalListPlugin';
// import { ListNode, ListItemNode } from '@lexical/list';


// const theme = {
//   heading: {
//     h1: 'glyf-editor-h1',
//     h2: 'glyf-editor-h2',
//     h3: 'glyf-editor-h3'
//   },
//   text: {
//     bold: 'glyf-editor-bold',
//     italic: 'glyf-editor-italic',
//     underline: 'glyf-editor-underline',
//     strikethrough: 'glyf-editor-strikethrough',
//     underlineStrikethrough: 'glyf-editor-underlineStrikethrough'
//   },
//   banner: 'glyf-editor-banner'
// };

// function onError(error: Error): void {
//   console.error(error);
// }

// export default function Editor(): JSX.Element {
//   const initialConfig = {
//     namespace: 'MyEditor',
//     theme,
//     onError,
//     nodes: [HeadingNode, ListNode, ListItemNode]
//   };

//   return (
//     <LexicalComposer initialConfig={initialConfig}>
//       <ListPlugin />
//       <RichTextPlugin
//         contentEditable={<ContentEditable />}
//         placeholder={<div className="placeholder">Enter some text...</div>}
//         ErrorBoundary={LexicalErrorBoundary}
//       />
//       <HistoryPlugin />
//     </LexicalComposer>
//   );
// }