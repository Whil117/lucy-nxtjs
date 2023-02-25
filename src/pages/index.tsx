import {
  AtomButton,
  AtomIcon,
  AtomImage,
  AtomInput,
  AtomText,
  AtomWrapper,
  createAtomSeoPage,
} from "@Src/@atoms";
import Head from "next/head";
import { FC, ReactNode, useState } from "react";

type Props = {
  children?: ReactNode;
};

const { AtomSeoPage } = createAtomSeoPage(Head);

const Template: FC<Props> = (props) => {
  const [state, setstate] = useState("");

  return (
    <AtomWrapper customCSS={(css) => css``}>
      <AtomSeoPage title="Main page" icon="https://picsum.photos/200/300" />
      <AtomText
        customCSS={(css) => css`
          background-color: red;
        `}
      >
        Hdsffd
      </AtomText>
      <AtomImage
        src="https://picsum.photos/200/300"
        width="auto"
        customCSS={(css) => css`
          width: 100px;
          height: 100px;
        `}
      />
      <AtomIcon src="https://res.cloudinary.com/whil/image/upload/v1676009859/MOVE_y3ho0n.svg" />
      <AtomButton
        customCSS={(css) => css`
          color: #ffffff;
        `}
        isFocus
        backgroundLinearGradient={{
          rotate: "315deg",
          secondary: "#07deff",
          primary: "#0f97ff",
        }}
        padding="10px 15px"
        onClick={() => {}}
      >
        DARK
      </AtomButton>
      <AtomButton
        customCSS={(css) => css`
          color: #ffffff;
        `}
        isFocus
        backgroundLinearGradient={{
          rotate: "315deg",
          secondary: "#07deff",
          primary: "#0f97ff",
        }}
        padding="10px 15px"
        onClick={() => {}}
      >
        LIGHT
      </AtomButton>
      <AtomInput
        type="text"
        label="Name"
        customCSS={(css) => css`
          width: 100px;
        `}
        value={state}
        isFocus
        onChange={(event) => setstate(event.target.value)}
      />
    </AtomWrapper>
  );
};

export default Template;
