import { css } from "@emotion/react";
import AtomButton from "@Src/@atoms/AtomButton";
import AtomIcon from "@Src/@atoms/AtomIcon";
import AtomInput from "@Src/@atoms/AtomInput";
import AtomText from "@Src/@atoms/AtomText";
import AtomWrapper from "@Src/@atoms/AtomWrapper";
import isDarkLight from "@Src/@utils/isDarkLight";
import { Editor } from "@tiptap/react";
import { useEffect, useRef, useState } from "react";
import { PropsEditor } from "..";

type Props = PropsEditor & {
  editor: Editor;
};

const regexIframe = /iframe/;

const ToolsBar = ({ editor, accentColor }: Props) => {
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
                src="https://res.cloudinary.com/whil/image/upload/v1665020520/Vector3_wbh0px.svg"
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
      <AtomButton
        onClick={() => {
          setshowModalUrls(true);
        }}
        padding="7px 8px"
        backgroundColor="#f00"
      >
        <svg height="20px" version="1.1" viewBox="0 0 68 48" width="100%">
          <path
            d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
            fill="#ffffff"
          ></path>
          <path d="M 45,24 27,14 27,34" fill="#f00"></path>
        </svg>
      </AtomButton>
      <AtomButton
        onClick={() => {
          setshowModalUrls(true);
        }}
        padding="7px 8px"
        backgroundColor="#1db954"
      >
        <svg
          role="img"
          height="20"
          width="32"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-encore-id="icon"
        >
          <path
            d="M12 1a11 11 0 100 22 11 11 0 000-22zm5.045 15.866a.686.686 0 01-.943.228c-2.583-1.579-5.834-1.935-9.663-1.06a.686.686 0 01-.306-1.337c4.19-.958 7.785-.546 10.684 1.226a.686.686 0 01.228.943zm1.346-2.995a.858.858 0 01-1.18.282c-2.956-1.817-7.464-2.344-10.961-1.282a.856.856 0 01-1.11-.904.858.858 0 01.611-.737c3.996-1.212 8.962-.625 12.357 1.462a.857.857 0 01.283 1.179zm.116-3.119c-3.546-2.106-9.395-2.3-12.78-1.272a1.029 1.029 0 01-.597-1.969c3.886-1.18 10.345-.952 14.427 1.471a1.029 1.029 0 01-1.05 1.77z"
            fill="#fdfdfd"
          ></path>
        </svg>
      </AtomButton>
    </AtomWrapper>
  );
};

export default ToolsBar;
