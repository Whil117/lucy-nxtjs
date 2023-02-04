import { css, SerializedStyles } from "@emotion/react";
import { FormikCustom } from "@Src/types/formik";
import Document from "@tiptap/extension-document";
import Dropcursor from "@tiptap/extension-dropcursor";
import Image from "@tiptap/extension-image";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Underline from "@tiptap/extension-underline";
import { Editor, EditorContent, EditorOptions, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FC, ReactNode } from "react";
import AtomWrapper from "../AtomWrapper";
import Iframe from "./iframe";
import ToolsBar from "./tools";
import VideoCustom from "./video";

export type PropsEditor = {
  children?: ReactNode;
  options?: Partial<EditorOptions>;
  value: string;
  accentColor?: string;
  id?: string;
  formik?: FormikCustom<any>;
  onChange?: (editor: Editor) => void;
  customCSS?: SerializedStyles;
};

const AtomTextEditor: FC<PropsEditor> = (props) => {
  const { formik, id, onChange, customCSS } = props;
  const editor = useEditor({
    extensions: [
      StarterKit,
      Document,
      Paragraph,
      Text,
      Image,
      Dropcursor,
      Iframe,
      VideoCustom,
      Underline,
    ],
    content: formik?.values?.[`${id}`] ?? props?.value ?? ``,
    onUpdate: (values) => {
      formik?.setFieldValue(`${id}`, values?.editor);
      onChange?.(values?.editor as Editor);
    },
    ...props?.options,
  });

  return (
    <AtomWrapper zIndex="1">
      <AtomWrapper
        customCSS={css`
          padding: 5px;
          border-radius: 5px;
          gap: 5px;
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
      >
        <ToolsBar editor={editor} {...props} />

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
            border: 1px solid #e6e6e6;
            z-index: -1;
            align-items: center;
            justify-content: flex-start;
            > div {
              padding: 0px;
              width: 100%;
              height: 100%;
              overflow-y: auto;
            }

            .ProseMirror {
              padding: 8px 12px;
              outline: none;
              width: -webkit-fill-available;
              img {
                width: inherit;
              }
              .video-wrapper {
                margin: 0px 0px 20px 0px;
                video {
                  width: 100%;
                }
              }
              .iframe-wrapper {
                width: 100%;
                /* height: 80px; */
                margin: 15px 0px;
                iframe {
                  width: 100%;
                  /* height: 100%; */
                }
              }
              > * + * {
                margin-top: 0.75em;
              }

              ul,
              ol {
                padding: 0 1rem;
              }

              h1,
              h2,
              h3,
              h4,
              h5,
              h6 {
                line-height: 1.1;
              }

              code {
                background-color: rgba(#616161, 0.1);
                color: #616161;
              }

              pre {
                background: #0d0d0d;
                color: #fff;
                font-family: "JetBrainsMono", monospace;
                padding: 0.75rem 1rem;
                border-radius: 0.5rem;

                code {
                  color: inherit;
                  padding: 0;
                  background: none;
                  font-size: 0.8rem;
                }
              }

              img {
                max-width: 100%;
                height: auto;
              }

              hr {
                margin: 1rem 0;
              }

              blockquote {
                padding-left: 1rem;
                border-left: 2px solid rgba(#0d0d0d, 0.1);
              }
            }
            ${customCSS ?? css``}
          `}
          // whileTap={{
          //   scale: 0.99,
          // }}
          // whileHover={{ scale: 1 }}
          // transition={{
          //   duration: 0.8,
          //   ease: [0, 0.71, 0.2, 1.01],
          // }}
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
    </AtomWrapper>
  );
};

export default AtomTextEditor;
