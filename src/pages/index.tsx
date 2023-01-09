import { css } from "@emotion/react";
import {
  AtomButton,
  AtomIcon,
  AtomImage,
  AtomLoader,
  AtomText,
  AtomWrapper,
} from "@Src/@atoms";
import AtomInput from "@Src/@atoms/AtomInput";
import AtomInputTypes from "@Src/@atoms/AtomInput/types";
import AtomWrapperCard from "@Src/@atoms/AtomWrapperCard";
import { useTheme } from "@Src/hooks";
import { handleSetTheme, handleToggleTheme } from "@Src/utils";
import { useFormik } from "formik";
import { useState } from "react";

const QuestionsRadios: AtomInputTypes[] = [
  {
    id: "myAnswerRadio",
    label: "Question1 formik",
    value: "answer1",
    type: "radio",
  },
  {
    id: "myAnswerRadio",
    label: "Question2 formik",
    value: "answer2",
    type: "radio",
  },
];

export default function Home() {
  const theme = useTheme();
  const [loading, setloading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      Rddd: false,
      checkBox: false,
      radioChcek: false,
      myAnswerRadio: "",
      customC: false,
    },
    onSubmit: () => {},
  });

  return (
    <AtomWrapper
      maxWidth="1440px"
      padding="0px 90px"
      gap="20px"
      flexDirection="row"
      alignItems="center"
    >
      <AtomWrapper flexDirection="row">
        <AtomIcon
          src="https://res.cloudinary.com/whil/image/upload/v1672601967/LUCY_gsdwo3.svg"
          width="75px"
          height="75px"
        />
        <AtomText fontSize="42px" fontWeight="bold">
          Lucy
        </AtomText>
      </AtomWrapper>

      <AtomWrapper>
        <AtomText fontSize="42px" fontWeight="bold">
          A network of creators.
        </AtomText>
        <AtomWrapper>
          <AtomText>AtomLoader Large</AtomText>
          <AtomWrapper
            flexDirection="row"
            alignItems="center"
            width="100%"
            justifyContent="space-around"
          >
            <AtomLoader type="large" />
            <AtomLoader type="large" colorLoad="#0072FF" />

            {loading && <AtomLoader type="fullscreen" colorLoad="#0072FF" />}
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper>
          <AtomText>AtomLoader Medium</AtomText>
          <AtomWrapper
            flexDirection="row"
            alignItems="center"
            width="100%"
            justifyContent="space-around"
          >
            <AtomLoader type="medium" />
            <AtomLoader type="medium" colorLoad="#0072FF" />
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper>
          <AtomText>AtomLoader Small</AtomText>
          <AtomWrapper
            flexDirection="row"
            alignItems="center"
            width="100%"
            justifyContent="space-around"
          >
            <AtomLoader type="small" />
            <AtomLoader type="small" colorLoad="#0072FF" />
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper>
          <AtomText>AtomText</AtomText>
          <AtomWrapper
            flexDirection="row"
            alignItems="center"
            width="100%"
            justifyContent="flex-start"
          >
            <AtomText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos esse
              nulla neque repellendus debitis! Mollitia id quidem sunt atque
              quod maxime minus ducimus quasi, accusamus, dicta ex nam dolor
              perferendis!
            </AtomText>
            <AtomText fontWeight="bold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos esse
              nulla neque repellendus debitis! Mollitia id quidem sunt atque
              quod maxime minus ducimus quasi, accusamus, dicta ex nam dolor
              perferendis!
            </AtomText>
            <AtomText fontWeight="bold" textDecoration="underline">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos esse
              nulla neque repellendus debitis! Mollitia id quidem sunt atque
              quod maxime minus ducimus quasi, accusamus, dicta ex nam dolor
              perferendis!
            </AtomText>
            <AtomText
              fontSize="24px"
              fontWeight="bold"
              textDecoration="underline"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos esse
              nulla neque repellendus debitis! Mollitia id quidem sunt atque
              quod maxime minus ducimus quasi, accusamus, dicta ex nam dolor
              perferendis!
            </AtomText>
            <AtomText backgroundColor="#0072FF" fontWeight="bold" color="red">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos esse
              nulla neque repellendus debitis! Mollitia id quidem sunt atque
              quod maxime minus ducimus quasi, accusamus, dicta ex nam dolor
              perferendis!
            </AtomText>
            <AtomText fontSize="24px" fontWeight="bold">
              Sell templates.
            </AtomText>
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapperCard flexDirection="column" padding="25px">
          <AtomText color="#4619e9" fontWeight="bold">
            Request a Feature
          </AtomText>
          <AtomInput
            type="text"
            label="Nombre completo"
            placeholder="Hola escribe aqui"
            labelColor="#999"
            formik={formik}
            id="name"
          />
          {QuestionsRadios?.map((item) => (
            <AtomInput
              type="radio"
              label={item?.label}
              labelColor="#999"
              formik={formik}
              id="Rddd"
            />
          ))}

          <AtomInput
            type="radio"
            label="check formik "
            labelColor="#999"
            id="radioChcek"
            formik={formik}
            accentColor="rgb(253, 119, 2)"
          />
          <AtomInput
            type="checkbox"
            label="check formik 2"
            labelColor="#999"
            formik={formik}
            id="checkBox"
            accentColor="rgb(153, 0, 255)"
          />
          <AtomInput
            type="checkbox"
            label="check custom"
            labelColor="#999"
            id="custom"
            accentColor="rgb(255, 0, 238)"
            value={formik.values.customC}
            onClick={() => {
              formik.setFieldValue("customC", !formik.values.customC);
            }}
          />
        </AtomWrapperCard>
        <AtomWrapper>
          <AtomText>AtomIcon</AtomText>
          <AtomWrapper
            flexDirection="row"
            alignItems="center"
            width="100%"
            justifyContent="flex-start"
          >
            {[
              "https://res.cloudinary.com/whil/image/upload/v1661401537/close-circle_evk8hi.svg",
              "https://res.cloudinary.com/whil/image/upload/v1661401537/heart_bhq0v1.svg",
              "https://res.cloudinary.com/whil/image/upload/v1661401536/aleatory_ivf9r3.svg",
              "https://res.cloudinary.com/whil/image/upload/v1661401537/note-square_tnxyol.svg",
              "https://res.cloudinary.com/whil/image/upload/v1661401537/group_otfmxi.svg",
              "https://res.cloudinary.com/whil/image/upload/v1661401538/next_mudtaa.svg",
              "https://res.cloudinary.com/whil/image/upload/v1661401538/pause_he3p5p.svg",
              "https://res.cloudinary.com/whil/image/upload/v1661401538/music-filter_pfws7j.svg",
              "https://res.cloudinary.com/whil/image/upload/v1661401539/previous_sqclao.svg",
              "https://res.cloudinary.com/whil/image/upload/v1661401540/repeatt_yet17i.svg",
              "https://res.cloudinary.com/whil/image/upload/v1661401540/save-2_c738go.svg",
              "https://res.cloudinary.com/whil/image/upload/v1661401542/volume-low_rawzad.svg",
              "https://res.cloudinary.com/whil/image/upload/v1661401542/volume-cross_rlev1s.svg",
              "https://res.cloudinary.com/whil/image/upload/v1661403453/like_n69iyx.svg",
              "https://res.cloudinary.com/whil/image/upload/v1661632351/aleatory_fql0tl.svg",
              "https://res.cloudinary.com/whil/image/upload/v1661401542/volume-high_rkxle8.svg",
              "https://res.cloudinary.com/whil/image/upload/v1661674252/play-circle_tq6brv.svg",
              "https://res.cloudinary.com/whil/image/upload/v1661706864/PREVVIDEO_icmtkr.svg",
              "https://res.cloudinary.com/whil/image/upload/v1661674261/pause-circle_yw7s3n.svg",
            ].map((item) => (
              <AtomIcon
                src={item}
                color="default"
                width="65px"
                height="65px"
                customCSS={css`
                  svg {
                    path {
                      stroke: var(--icon-color);
                    }
                  }
                `}
              />
            ))}
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper>
          <AtomText>AtomButton</AtomText>
          <AtomWrapper
            flexDirection="row"
            alignItems="center"
            width="100%"
            justifyContent="flex-start"
          >
            <AtomButton
              disabled
              margin="10px"
              onClick={() => {
                alert("Button was clicked!");
              }}
            >
              DISABLED
            </AtomButton>
            <AtomButton margin="10px">DEFAULT</AtomButton>
            <AtomButton
              margin="10px"
              backgroundLinearGradient={{
                rotate: "315deg",
                secondary: "#07deff",
                primary: "#0f97ff",
              }}
              focus
              onClick={() => {
                theme.toggle();
              }}
            >
              TOGGLE THEME
            </AtomButton>
            <AtomButton
              margin="10px"
              backgroundLinearGradient={{
                rotate: "157deg",
                primary: "rgb(253, 119, 2)",
                secondary: "rgb(254, 2, 34)",
              }}
              onClick={() => {
                theme.setTheme("light");
              }}
            >
              LIGHT THEME
            </AtomButton>
            <AtomButton
              margin="10px"
              backgroundColor="rgb(253, 119, 2)"
              onClick={() => {
                theme.setTheme("light");
              }}
            >
              LIGHT COLOR THEME
            </AtomButton>

            <AtomButton
              margin="10px"
              backgroundLinearGradient={{
                rotate: "157deg",
                primary: "rgb(255, 61, 194)",
                secondary: "rgb(255, 0, 102)",
              }}
              onClick={() => {
                theme.setTheme("dark");
              }}
            >
              DARK THEME
            </AtomButton>
            <AtomButton
              margin="10px"
              backgroundColor="rgba(153, 0, 255,1)"
              onClick={() => {
                handleSetTheme("dark");
              }}
            >
              MANUAL SETTER THEME DARK
            </AtomButton>
            <AtomButton
              margin="10px"
              backgroundLinearGradient={{
                rotate: "157deg",
                primary: "rgba(19,0, 255, 1)",
                secondary: "rgba(153, 0, 255,1)",
              }}
              onClick={() => {
                handleSetTheme("light");
              }}
            >
              MANUAL SETTER THEME LIGHT
            </AtomButton>
            <AtomButton
              margin="10px"
              backgroundLinearGradient={{
                rotate: "315deg",
                primary: "rgb(153, 0, 255)  0%",
                secondary: "rgb(2, 136, 255)  100%",
              }}
              onClick={() => {
                handleToggleTheme();
              }}
            >
              TOGGLE MANUAL THEME
            </AtomButton>
            <AtomButton
              margin="10px"
              backgroundLinearGradient={{
                rotate: "315deg",
                primary: "rgb(255, 0, 238) 0%",
                secondary: "rgb(255, 170,0) 100%",
              }}
              onClick={() => {
                setloading(true);
              }}
            >
              LOADER FULLSSCREEN
            </AtomButton>
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapperCard flexDirection="column" padding="25px">
          <AtomText fontWeight="bold" fontSize="22px">
            AtomWrapperCard
          </AtomText>
          <AtomText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            illo consectetur hic earum, labore, eum omnis repellendus rem
            maiores debitis temporibus asperiores repudiandae? At eveniet vero,
            totam dolore non architecto?
          </AtomText>
          <AtomImage
            src="https://picsum.photos/200/300"
            width="420px"
            height="420px"
          />
          <AtomImage
            src="https://picsum.photos/200/300"
            width="250px"
            height="250px"
          />
          <AtomImage
            src="https://picsum.photos/200/300"
            width="150px"
            height="150px"
          />
        </AtomWrapperCard>
      </AtomWrapper>
    </AtomWrapper>
  );
}
