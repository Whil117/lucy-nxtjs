import { AtomButton, AtomText, AtomWrapper } from "@Src/@atoms";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

type headerOptions = {
  id: number;
  typeState: string;
  backgroundLinearGradient: {
    rotate: string;
    secondary: string;
    primary: string;
  };
  icon: string;
};

export const headerOptions: headerOptions[] = [
  {
    id: 1,
    typeState: "NONE",
    backgroundLinearGradient: {
      rotate: "315deg",
      secondary: "#07deff",
      primary: "#0f97ff",
    },
    icon: "https://res.cloudinary.com/whil/image/upload/v1676008336/CURSOR_m7mjkg.svg",
  },
  {
    id: 2,
    typeState: "MOVING",
    backgroundLinearGradient: {
      rotate: "315deg",
      secondary: "#07ff1c",
      primary: "#47ff0f",
    },
    icon: "https://res.cloudinary.com/whil/image/upload/v1676008630/ADDED_bl7hgd.svg",
  },
  {
    id: 3,
    typeState: "RESIZING",
    backgroundLinearGradient: {
      rotate: "315deg",
      secondary: "#ff4107",
      primary: "#ff670f",
    },
    icon: "https://res.cloudinary.com/whil/image/upload/v1676009019/EDITYOR_e4pyzh.svg",
  },
  {
    id: 4,
    typeState: "WRITING",
    backgroundLinearGradient: {
      rotate: "315deg",
      secondary: "#0741ff",
      primary: "#b30fff",
    },
    icon: "https://res.cloudinary.com/whil/image/upload/v1676009570/UPDATEE_mlumua.svg",
  },
  {
    id: 5,
    typeState: "DRAWING",
    backgroundLinearGradient: {
      rotate: "315deg",
      secondary: "#c507ff",
      primary: "#ff0fcb",
    },
    icon: "https://res.cloudinary.com/whil/image/upload/v1676009859/MOVE_y3ho0n.svg",
  },
];

const ListMethods: FC<Props> = () => {
  return (
    <AtomWrapper gap="10px" height="auto">
      <AtomText color="white">Methods</AtomText>

      <AtomWrapper flexDirection="row" height="auto" flexWrap="wrap" gap="5px">
        {headerOptions?.map((item) => {
          return (
            <AtomButton
              focus
              onClick={() => {}}
              padding="2px 10px"
              key={item.id}
              backgroundLinearGradient={item?.backgroundLinearGradient}
            >
              {item.typeState}
            </AtomButton>
          );
        })}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default ListMethods;
