import { css } from "@emotion/react";
import Document from "@tiptap/extension-document";
import Dropcursor from "@tiptap/extension-dropcursor";
import Image from "@tiptap/extension-image";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { Editor, EditorContent, EditorOptions, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Transaction } from "prosemirror-state";
import { FC, ReactNode } from "react";
import AtomWrapper from "../AtomWrapper";
import Iframe from "./iframe";
import VideoCustom from "./video";

type Props = {
  children?: ReactNode;
  options?: Partial<EditorOptions>;
  value: string;
  onChange?: (props: { editor: Editor; transaction: Transaction }) => void;
};

const AtomTextEditor: FC<Props> = (props) => {
  const editor = useEditor(
    {
      extensions: [
        StarterKit,
        Document,
        Paragraph,
        Text,
        Image,
        Dropcursor,
        Iframe,
        VideoCustom,
      ],
      content:
        props?.value ??
        `<iframe src="https://open.spotify.com/embed/track/00Cxlg96EHYJG2VoTh7Q3D?utm_source=generator" width="auto" height="80px" id="IFRAMEPLAYER" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture;"></iframe>`,
      onUpdate: props?.onChange ? props?.onChange : () => {},
      ...props?.options,
    },
    []
  );

  return (
    <AtomWrapper
      customCSS={css`
        padding: 5px;
        border-radius: 5px;
        &:hover {
          box-shadow: rgb(0 0 0 / 4%) 0px 0.60323px 3.01615px -1.25px,
            rgb(0 0 0 / 3%) 0px 2.29021px 11.4511px -2.5px,
            rgb(0 0 0 / 1%) 0px 10px 50px -3.75px;
          background-color: rgba(255, 255, 255, 0.2);
        }
        &:focus {
          box-shadow: rgb(0 0 0 / 4%) 0px 0.60323px 3.01615px -1.25px,
            rgb(0 0 0 / 3%) 0px 2.29021px 11.4511px -2.5px,
            rgb(0 0 0 / 1%) 0px 10px 50px -3.75px;
          background-color: rgba(255, 255, 255, 0.2);
        }
      `}
      whileTap={{
        scale: 0.99,
      }}
      whileHover={{ scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <AtomWrapper
        height="100%"
        width="100%"
        customCSS={css`
          display: flex;
          flex-direction: column;
          cursor: text;
          box-sizing: border-box;
          border-radius: 5px;
          padding: 0px;
          box-shadow: rgb(0 0 0 / 10%) 0px 0.60323px 3.01615px -0.833333px,
            rgb(0 0 0 / 10%) 0px 2.29021px 11.4511px -1.66667px,
            rgb(0 0 0 / 10%) 0px 10px 50px -2.5px;
          border: 1px solid #ffffff7f;
          .ProseMirror {
            width: 100% !important;
            outline: none;
            padding: 8px 12px;
          }
        `}
      >
        <EditorContent
          editor={editor}
          style={{
            display: "flex",
            flex: 1,
            width: "100%",
            margin: 0,
          }}
        ></EditorContent>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default AtomTextEditor;
