import {
  AtomButton,
  AtomIcon,
  AtomImage,
  AtomInput,
  AtomText,
  AtomWrapper,
  createAtomSeoPage,
} from "@Src/@atoms";
import AtomModal from "@Src/@atoms/AtomModal";
import Head from "next/head";
import { FC, ReactNode, useState } from "react";

type Props = {
  children?: ReactNode;
};

const { AtomSeoPage } = createAtomSeoPage(Head);

import { css } from "@emotion/react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <pre>{JSON.stringify(getValues())}</pre>
      <AtomInput
        onExecute={() => register("firstName")}
        placeholder="First Name"
        css={() => css`
          width: 300px;
        `}
      />
      <AtomInput
        onExecute={() => register("lastName")}
        placeholder="Last name"
        css={() => css`
          width: 300px;
        `}
      />
      <AtomInput
        type="select"
        options={() => [
          {
            id: "df",
            label: "optionone",
            value: "optionone",
          },
          {
            id: "male",
            label: "option two",
            value: "optiontwo",
          },
        ]}
        // value="DEFAULT"
        onExecute={() => register("gender")}
      />
      <button onClick={() => setValue("firstName", "")} type="button">
        SET FIRSTNAME{" "}
      </button>

      <AtomInput type="submit" />
    </form>
  );
}

const LoginPage: FC<Props> = (props) => {
  return (
    <AtomWrapper>
      <App />
    </AtomWrapper>
  );
};

const Template: FC<Props> = (props) => {
  const [state, setstate] = useState("");
  const [isShow, setIsShow] = useState(false);
  return (
    <AtomWrapper customCSS={(css) => css``}>
      <LoginPage />
      <AtomSeoPage title="Main page" icon="https://picsum.photos/200/300" />
      <AtomModal
        isShow={isShow}
        onCloseShow={() => {
          setIsShow(false);
        }}
      >
        <AtomText>HOLA</AtomText>
      </AtomModal>
      <AtomText
        customCSS={(css) => css`
          background-color: red;
        `}
      >
        Hdsffd
      </AtomText>
      <AtomButton
        onClick={() => {
          setIsShow((prev) => !prev);
        }}
      >
        Toggle modal
      </AtomButton>
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
