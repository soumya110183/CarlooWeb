import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import ImageExtension from "@tiptap/extension-image";

export default function TextBlock({ content, index, onUpdate, onAddBlock, onRemoveBlock }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-500 underline',
        },
      }),
      ImageExtension,
    ],
    content: content || "",
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onUpdate(index, editor.getHTML());
    },
  });

  return (
    <div className="space-y-2 border border-gray-600 p-4 rounded bg-[#1A1336] shadow-sm">
     
      <div className="flex gap-2 mb-2 flex-wrap">
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className={`px-2 py-1 rounded ${
            editor?.isActive('bold') ? 'bg-purple-600 text-white' : 'bg-gray-700 text-white'
          }`}
        >
          B
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className={`px-2 py-1 rounded italic ${
            editor?.isActive('italic') ? 'bg-purple-600 text-white' : 'bg-gray-700 text-white'
          }`}
        >
          I
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleUnderline().run()}
          className={`px-2 py-1 rounded underline ${
            editor?.isActive('underline') ? 'bg-purple-600 text-white' : 'bg-gray-700 text-white'
          }`}
        >
          U
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          className={`px-2 py-1 rounded ${
            editor?.isActive('bulletList') ? 'bg-purple-600 text-white' : 'bg-gray-700 text-white'
          }`}
        >
          • List
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          className={`px-2 py-1 rounded ${
            editor?.isActive('orderedList') ? 'bg-purple-600 text-white' : 'bg-gray-700 text-white'
          }`}
        >
          1. List
        </button>
      </div>

      <EditorContent
        editor={editor}
        className="bg-white text-black p-2 rounded min-h-[150px] focus:outline-none focus:ring-2 focus:ring-[#651FFF]"
      />

      <div className="flex gap-2 pt-2 border-t border-gray-600">
        <button
          type="button"
          onClick={() => onAddBlock("text", index)}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          + Text
        </button>
        <button
          type="button"
          onClick={() => onAddBlock("image", index)}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          + Image
        </button>
        <button
          type="button"
          onClick={() => onRemoveBlock(index)}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}