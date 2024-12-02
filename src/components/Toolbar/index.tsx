'use client';

import { type Editor } from '@tiptap/react';
import * as C from './styled';
import { FaHeading, FaBold, FaItalic, FaStrikethrough } from 'react-icons/fa';

type Props = {
  editor: Editor | null;
};

export const Toolbar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }

  return (
    <C.ToggleContainer>
      <C.Toggle
        $active={editor.isActive('heading')}
        onClick={() => {
          editor.chain().focus().toggleHeading({ level: 2 }).run();
        }}
      >
        <FaHeading />
      </C.Toggle>
      <C.Toggle
        $active={editor.isActive('bold')}
        onClick={() => {
          editor.chain().focus().toggleBold().run();
        }}
      >
        <FaBold />
      </C.Toggle>
      <C.Toggle
        $active={editor.isActive('italic')}
        onClick={() => {
          editor.chain().focus().toggleItalic().run();
        }}
      >
        <FaItalic />
      </C.Toggle>
      <C.Toggle
        $active={editor.isActive('strike')}
        onClick={() => {
          editor.chain().focus().toggleStrike().run();
        }}
      >
        <FaStrikethrough />
      </C.Toggle>
    </C.ToggleContainer>
  );
};
