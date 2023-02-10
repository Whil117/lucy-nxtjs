import { css } from "@emotion/react";
import { AtomButton, AtomText, AtomWrapper } from "@Src/@atoms";
import { useAtom, useAtomValue } from "jotai";
import { FC, ReactNode } from "react";
import { ELEMENTS_ATOM, SELECTED_ELEMENT_ATOM } from "../center";

type Props = {
  children?: ReactNode;
};

const SidebarLayoutEditorLeft: FC<Props> = () => {
  const elements = useAtomValue(ELEMENTS_ATOM);
  const [currentElement, setCurrentElement] = useAtom(SELECTED_ELEMENT_ATOM);
  return (
    <AtomWrapper
      backgroundColor="#252424"
      justifyContent="flex-start"
      padding="20px"
      customCSS={css`
        grid-column: 1;
        grid-row: 2;
      `}
    >
      <AtomText color="white" fontWeight="bold" fontSize="22px">
        Harmony Alph.2
      </AtomText>
      <AtomWrapper>
        <AtomText color="white">Elements</AtomText>
        <AtomWrapper
          customCSS={css`
            width: 100%;
            height: calc(92vh - 80px);
            overflow-y: scroll;
            flex-direction: column;
            justify-content: flex-start;
            flex-wrap: nowrap;
            padding-right: 6px;
            ::-webkit-scrollbar {
              width: 4px;
            }

            ::-webkit-scrollbar-thumb {
              background: #ccc;
              border-radius: 4px;
            }
            ::-webkit-scrollbar-thumb:hover {
              background: #b3b3b3;
              box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
            }
            gap: 4px;
          `}
        >
          {elements?.map((item, index) => (
            <AtomButton
              width="100%"
              padding="5px"
              borderRadius="3px"
              backgroundColor="transparent"
              border={
                currentElement?.id === item?.id
                  ? "1px solid #07deff"
                  : "1px solid #14616d"
              }
              onClick={() => {
                setCurrentElement(item);
              }}
              whileHover={{
                scale: 1,
              }}
            >
              <AtomText color="white">
                {item.id?.slice(0, 4)} #{item.type} {index}
              </AtomText>
            </AtomButton>
          ))}
        </AtomWrapper>
        {/* <AtomText color="white">{JSON.stringify(elements, null, 2)}</AtomText> */}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default SidebarLayoutEditorLeft;
