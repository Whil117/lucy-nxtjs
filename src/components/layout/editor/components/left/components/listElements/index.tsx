import { css } from "@emotion/react";
import { AtomButton, AtomText, AtomWrapper } from "@Src/@atoms";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const ListElements: FC<Props> = () => {
  const [currentElement, setCurrentElement] = [{}, {}];
  const elements = [];
  return (
    <AtomWrapper gap="10px" height="auto">
      <AtomText color="white">Elements</AtomText>
      <AtomWrapper
        customCSS={css`
          width: 100%;
          height: calc(85vh - 80px);
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
            padding="5px 15px"
            borderRadius="3px"
            backgroundColor="transparent"
            border={
              currentElement?.id === item?.id
                ? "1px solid #07deff"
                : "1px solid #14616d"
            }
            onClick={() => {}}
            whileHover={{
              scale: 1,
            }}
            alignItems="flex-start"
          >
            <AtomText color="white">
              {item.type} {index}
            </AtomText>
          </AtomButton>
        ))}
      </AtomWrapper>
      {/* <AtomText color="white">{JSON.stringify(elements, null, 2)}</AtomText> */}
    </AtomWrapper>
  );
};

export default ListElements;
