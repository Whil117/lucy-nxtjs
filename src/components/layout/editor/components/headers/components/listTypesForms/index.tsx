import { css } from "@emotion/react";
import { AtomButton, AtomIcon, AtomWrapper } from "@Src/@atoms";
import { isDarkLight } from "@Src/utils";
import { atom, useAtom } from "jotai";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const KEYS = {
  BOX: {
    backgroundLinearGradient: {
      rotate: "315deg",
      secondary: "#07deff",
      primary: "#0f97ff",
    },
    icon: "https://res.cloudinary.com/whil/image/upload/v1670118796/maximize-2_omhsld.svg",
  },
  TEXT: {
    backgroundLinearGradient: {
      rotate: "315deg",
      secondary: "#07deff",
      primary: "#0f97ff",
    },
    icon: "https://res.cloudinary.com/whil/image/upload/v1670118796/smallcaps_iowxub.svg",
  },
  IMAGE: {
    backgroundLinearGradient: {
      rotate: "315deg",
      secondary: "#07deff",
      primary: "#0f97ff",
    },
    icon: "https://res.cloudinary.com/whil/image/upload/v1670118796/gallery_duuoqb.svg",
  },
  DRAW: {
    backgroundLinearGradient: {
      rotate: "315deg",
      secondary: "#07deff",
      primary: "#0f97ff",
    },
    icon: "https://res.cloudinary.com/whil/image/upload/v1678335120/brush_cbsfmf.svg",
  },
};

export const TYPE_FIGURE_ATOM = atom<keyof typeof KEYS>("BOX");

const ListTypesForms: FC<Props> = () => {
  const [typeFigure, setTypeFigure] = useAtom(TYPE_FIGURE_ATOM);
  return (
    <AtomWrapper width="auto" flexDirection="row" gap="20px">
      {Object.entries(KEYS)?.map(([key, value]) => {
        const isValid = typeFigure === key;
        return (
          <AtomWrapper>
            <AtomButton
              backgroundLinearGradient={
                isValid && value?.backgroundLinearGradient
              }
              padding="2px 10px"
              focus
              onClick={() => {
                setTypeFigure(key as keyof typeof KEYS);
              }}
            >
              <AtomIcon
                src={value?.icon}
                color="default"
                width="20px"
                customCSS={css`
                  svg {
                    path {
                      stroke: ${isValid
                        ? isDarkLight(
                            `${value.backgroundLinearGradient?.primary}`
                          )
                        : "black"};
                    }
                  }
                `}
              />
            </AtomButton>
          </AtomWrapper>
        );
      })}
    </AtomWrapper>
  );
};

export default ListTypesForms;
