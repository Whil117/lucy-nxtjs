import { css } from "@emotion/react";
import { AtomButton, AtomIcon, AtomText, AtomWrapper } from "@Src/@atoms";
import { isDarkLight } from "@Src/utils";
import { atom, useAtom } from "jotai";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

type headerOptions = {
  id: number;
  typeState: "VIEW" | "ADD" | "EDITOR" | "MOVE" | "UPDATE";
  backgroundLinearGradient: {
    rotate: string;
    secondary: string;
    primary: string;
  };
  icon: string;
};

const headerOptions: headerOptions[] = [
  {
    id: 1,
    typeState: "VIEW",
    backgroundLinearGradient: {
      rotate: "315deg",
      secondary: "#07deff",
      primary: "#0f97ff",
    },
    icon: "https://res.cloudinary.com/whil/image/upload/v1676008336/CURSOR_m7mjkg.svg",
  },
  {
    id: 2,
    typeState: "ADD",
    backgroundLinearGradient: {
      rotate: "315deg",
      secondary: "#07ff1c",
      primary: "#47ff0f",
    },
    icon: "https://res.cloudinary.com/whil/image/upload/v1676008630/ADDED_bl7hgd.svg",
  },
  {
    id: 3,
    typeState: "EDITOR",
    backgroundLinearGradient: {
      rotate: "315deg",
      secondary: "#ff4107",
      primary: "#ff670f",
    },
    icon: "https://res.cloudinary.com/whil/image/upload/v1676009019/EDITYOR_e4pyzh.svg",
  },
  {
    id: 4,
    typeState: "UPDATE",
    backgroundLinearGradient: {
      rotate: "315deg",
      secondary: "#0741ff",
      primary: "#b30fff",
    },
    icon: "https://res.cloudinary.com/whil/image/upload/v1676009570/UPDATEE_mlumua.svg",
  },
  {
    id: 5,
    typeState: "MOVE",
    backgroundLinearGradient: {
      rotate: "315deg",
      secondary: "#c507ff",
      primary: "#ff0fcb",
    },
    icon: "https://res.cloudinary.com/whil/image/upload/v1676009859/MOVE_y3ho0n.svg",
  },
];

export const STATE_CONTROL_ATOM = atom<
  "VIEW" | "ADD" | "EDITOR" | "MOVE" | "UPDATE"
>("VIEW");

const ListMethods: FC<Props> = () => {
  const [stateControl, setStateControl] = useAtom(STATE_CONTROL_ATOM);
  return (
    <AtomWrapper gap="10px" height="auto">
      <AtomText color="white">Methods</AtomText>

      <AtomWrapper
        flexDirection="row"
        justifyContent="space-between"
        height="auto"
      >
        {headerOptions?.map((item) => {
          const isValid = stateControl === item.typeState;
          return (
            <AtomButton
              focus
              onClick={() => {
                setStateControl(item.typeState);
              }}
              padding="2px 10px"
              key={item.id}
              backgroundLinearGradient={
                isValid && item?.backgroundLinearGradient
              }
            >
              <AtomIcon
                src={item.icon}
                color={
                  isValid &&
                  isDarkLight(`${item.backgroundLinearGradient?.primary}`)
                }
                width="15px"
                customCSS={css`
                  margin: 2px 4px;
                  /* margin-left: 5px; */
                `}
              />
            </AtomButton>
          );
        })}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default ListMethods;
