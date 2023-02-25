import { AtomButton, AtomWrapper } from "@Src/@atoms";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const KEYS = {
  RECTANGLE: {
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
  PENCIL: {
    backgroundLinearGradient: {
      rotate: "315deg",
      secondary: "#07deff",
      primary: "#0f97ff",
    },
    icon: "https://res.cloudinary.com/whil/image/upload/v1670118796/gallery_duuoqb.svg",
  },
  LINE: {
    backgroundLinearGradient: {
      rotate: "315deg",
      secondary: "#07deff",
      primary: "#0f97ff",
    },
    icon: "https://res.cloudinary.com/whil/image/upload/v1670118796/gallery_duuoqb.svg",
  },
};

const ListTypesForms: FC<Props> = () => {
  return (
    <AtomWrapper width="auto" flexDirection="row" gap="20px">
      {Object.entries(KEYS)?.map(([key, value]) => {
        return (
          <AtomWrapper>
            <AtomButton
              backgroundLinearGradient={value?.backgroundLinearGradient}
              padding="2px 10px"
              focus
              onClick={() => {}}
            >
              {key}
            </AtomButton>
          </AtomWrapper>
        );
      })}
    </AtomWrapper>
  );
};

export default ListTypesForms;
