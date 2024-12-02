'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import starterKit, { StarterKit } from '@tiptap/starter-kit';
import * as C from './styled';
import { Toolbar } from '../Toolbar';

export const Tiptap = ({
  description,
  onChangeValue,
}: {
  description: string;
  onChangeValue: (richText: string) => void;
}) => {
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: description,
    editorProps: {
      attributes: {
        class: 'rounded-md border',
      },
    },
    onUpdate({ editor }) {
      onChangeValue(editor.getHTML());
      console.log(editor?.getHTML);
    },
  });

  return (
    <C.TiptapContainer>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </C.TiptapContainer>
  );
};
