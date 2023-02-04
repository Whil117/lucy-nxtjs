import { css } from "@emotion/react";
import AtomButton from "@Src/@atoms/AtomButton";
import AtomIcon from "@Src/@atoms/AtomIcon";
import AtomInput from "@Src/@atoms/AtomInput";
import AtomText from "@Src/@atoms/AtomText";
import AtomWrapper from "@Src/@atoms/AtomWrapper";
import isDarkLight from "@Src/@utils/isDarkLight";
import { Editor } from "@tiptap/react";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PropsEditor } from "..";
type Props = PropsEditor & {
  editor: Editor;
};

const regexIframe = /iframe/;

const AtomIconGet = (src: string, accentColor: string) => [
  <AtomIcon
    src={src}
    color="default"
    width="25px"
    height="25px"
    customCSS={css`
      svg {
        path {
          fill: none;
          stroke-width: 2px;
          stroke: ${isDarkLight(accentColor ?? "")};
        }
      }
    `}
  />,
];

const toolsMap = (props: Props) => {
  const { editor, accentColor } = props;
  return [
    {
      id: uuidv4(),
      label: "BOLD",
      slug: "bold",
      onClick: () => {
        editor?.chain().focus().toggleBold().run();
      },
      children: AtomIconGet(
        "https://res.cloudinary.com/whil/image/upload/v1675308653/textbold_cj0ssj.svg",
        accentColor
      ),
    },
    {
      id: uuidv4(),
      label: "ITALIC",
      slug: "italic",
      onClick: () => {
        editor?.chain().focus()?.toggleItalic().run();
      },
      children: AtomIconGet(
        "https://res.cloudinary.com/whil/image/upload/v1675310099/text-italic_qjc408.svg",
        accentColor
      ),
    },
    {
      id: uuidv4(),
      label: "STROKE",
      slug: "strike",
      onClick: () => {
        editor?.chain().focus()?.toggleStrike().run();
      },
      children: AtomIconGet(
        "https://res.cloudinary.com/whil/image/upload/v1675311569/textstroke_gbdiib.svg",
        accentColor
      ),
    },
    {
      id: uuidv4(),
      label: "UNDERLINE",
      slug: "underline",
      onClick: () => {
        editor?.chain().focus().toggleUnderline().run();
      },
      children: AtomIconGet(
        "https://res.cloudinary.com/whil/image/upload/v1675310821/text-underline_w6yk9o.svg",
        accentColor
      ),
    },
    {
      id: uuidv4(),
      label: "PARAGRAPH",
      onClick: () => {
        editor?.chain().focus().setParagraph().run();
      },
      children: AtomIconGet(
        "https://res.cloudinary.com/whil/image/upload/v1675312568/text-P_eu95jk.svg",
        accentColor
      ),
    },
    {
      id: uuidv4(),
      label: "H1",
      onClick: () => {
        editor?.chain().focus().setParagraph().run();
      },
      children: AtomIconGet(
        "https://res.cloudinary.com/whil/image/upload/v1675312568/text-P_eu95jk.svg",
        accentColor
      ),
    },
  ];
};
const ToolsBar = (props: Props) => {
  const { editor, accentColor } = props;
  const [showModalUrls, setshowModalUrls] = useState(false);
  const [url, seturl] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setshowModalUrls(false);
        console.log("WHAT");
      }
    };

    document.addEventListener(`mousedown`, handleClickOutside, true);
    return () => {
      document.removeEventListener(`mousedown`, handleClickOutside, true);
    };
  }, [ref]);

  return (
    <AtomWrapper
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-start"
      gap="5px"
      position="relative"
    >
      {showModalUrls && (
        <AtomWrapper
          ref={ref}
          customCSS={css`
            position: absolute;
            background-color: var(--card-background, #ffffff);
            padding: 8px 12px;
            border-radius: 5px;
            height: max-content;
            width: 400px;
            max-width: 400px;
            z-index: 999;
            top: 170%;
            left: 16.2%;
            transform: translateX(-50%);
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.227);
            :after {
              content: "";
              position: absolute;
              top: -10px;
              left: 10%;
              transform: translateX(-50%);
              width: 0;
              height: 0;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-bottom: 10px solid #ffffff;
            }
          `}
        >
          <AtomWrapper flexDirection="row" alignItems="center" gap="10px">
            <AtomInput
              type="text"
              value={url}
              onChange={(event) => seturl(event.target.value)}
            />
            <AtomButton
              onClick={() => {
                if (url !== "" && regexIframe?.test(url)) {
                  editor
                    ?.chain()
                    .focus()
                    .setIframe({
                      src: url,
                    })
                    .run();
                  setshowModalUrls(false);
                  seturl("");
                }
              }}
              backgroundColor={accentColor}
              padding="5px"
            >
              <AtomIcon
                src="https://res.cloudinary.com/whil/image/upload/v1675307897/links_mhsrbi.svg"
                color="default"
                width="25px"
                height="25px"
                customCSS={css`
                  svg {
                    path {
                      fill: none;
                      stroke-width: 2px;
                      stroke: ${isDarkLight(accentColor ?? "")};
                    }
                  }
                `}
              />
            </AtomButton>
          </AtomWrapper>
          <AtomWrapper>
            {url !== "" && !regexIframe?.test(url) && (
              <AtomText color="#f00" fontSize="9.6px" fontWeight="bold">
                Porfavor ingresa un iframe
              </AtomText>
            )}
          </AtomWrapper>
        </AtomWrapper>
      )}
      <AtomWrapper
        customCSS={css`
          /* Basic editor styles */
          .ProseMirror {
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
        `}
      >
        <AtomButton
          onClick={() => {
            setshowModalUrls(true);
          }}
          padding="7px 8px"
          backgroundColor={accentColor}
        >
          <AtomIcon
            src="https://res.cloudinary.com/whil/image/upload/v1675307897/links_mhsrbi.svg"
            color="default"
            width="25px"
            height="25px"
            customCSS={css`
              svg {
                path {
                  fill: none;
                  stroke-width: 2px;
                  stroke: ${isDarkLight(accentColor ?? "")};
                }
              }
            `}
          />
        </AtomButton>
        {toolsMap(props)?.map((item) => (
          <AtomButton padding="7px 8px" backgroundColor={accentColor} {...item}>
            {item.children}
          </AtomButton>
        ))}

        <button
          onClick={() => editor?.chain().focus().setParagraph().run()}
          className={editor?.isActive("paragraph") ? "is-active" : ""}
        >
          paragraph
        </button>
        <button
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor?.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        >
          h1
        </button>
        <button
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor?.isActive("heading", { level: 2 }) ? "is-active" : ""
          }
        >
          h2
        </button>
        <button
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor?.isActive("heading", { level: 3 }) ? "is-active" : ""
          }
        >
          h3
        </button>
        <button
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={
            editor?.isActive("heading", { level: 4 }) ? "is-active" : ""
          }
        >
          h4
        </button>
        <button
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={
            editor?.isActive("heading", { level: 5 }) ? "is-active" : ""
          }
        >
          h5
        </button>
        <button
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={
            editor?.isActive("heading", { level: 6 }) ? "is-active" : ""
          }
        >
          h6
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          className={editor?.isActive("bulletList") ? "is-active" : ""}
        >
          bullet list
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          className={editor?.isActive("orderedList") ? "is-active" : ""}
        >
          ordered list
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
          className={editor?.isActive("codeBlock") ? "is-active" : ""}
        >
          code block
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleBlockquote().run()}
          className={editor?.isActive("blockquote") ? "is-active" : ""}
        >
          blockquote
        </button>
        <button
          onClick={() => editor?.chain().focus().setHorizontalRule().run()}
        >
          horizontal rule
        </button>
        <button onClick={() => editor?.chain().focus().setHardBreak().run()}>
          hard break
        </button>
        <button onClick={() => editor?.chain().focus().undo().run()}>
          undo
        </button>
        <button onClick={() => editor?.chain().focus().redo().run()}>
          redo
        </button>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default ToolsBar;
