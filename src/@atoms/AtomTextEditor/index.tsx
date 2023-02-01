import { css, SerializedStyles } from "@emotion/react";
import { FormikCustom } from "@Src/types/formik";
import Document from "@tiptap/extension-document";
import Dropcursor from "@tiptap/extension-dropcursor";
import Image from "@tiptap/extension-image";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { Editor, EditorContent, EditorOptions, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FC, ReactNode } from "react";
import { LabelInput } from "../AtomLabel/styled";
import { AtomTextTypes } from "../AtomText/types";
import AtomWrapper from "../AtomWrapper";
import Iframe from "./iframe";
import ToolsBar from "./tools";
import VideoCustom from "./video";

export type PropsEditor = {
  children?: ReactNode;
  options?: Partial<EditorOptions>;
  value: string;
  label?: string;
  labelFontWeight?: AtomTextTypes["fontWeight"];
  labelFontSize?: string;
  labelColor?: string;
  accentColor?: string;
  id?: string;
  labelBackground?: string;
  labelFontFamily?: string;
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
      {props?.label && (
        <LabelInput
          color={props?.labelColor ?? ""}
          htmlFor={props?.id}
          customCSS={css`
            padding: 5px;
            font-family: ${props?.labelFontFamily};
            font-weight: ${props?.labelFontWeight ?? "600"};
            font-size: ${props?.labelFontSize ?? "12px"};
            cursor: pointer;
          `}
        >
          {props?.label}
        </LabelInput>
      )}
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
        whileTap={{
          scale: 0.99,
        }}
        whileHover={{ scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
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
            }
            ${customCSS ?? css``}
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
    </AtomWrapper>
  );
};

export default AtomTextEditor;
