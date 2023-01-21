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
import { InputFileProps } from "@Src/@atoms/AtomInput/file";
import AtomInputTypes from "@Src/@atoms/AtomInput/types";
import AtomWrapperCard from "@Src/@atoms/AtomWrapperCard";
import getDaysByMotnh from "@Src/@utils/calendar";
import isDarkLight from "@Src/@utils/isDarkLight";
import { useTheme } from "@Src/hooks";
import { handleSetTheme, handleToggleTheme } from "@Src/utils";
import { useFormik } from "formik";
import { useState } from "react";

const QuestionsRadios: AtomInputTypes[] = [
  {
    id: "myAnswerRadio",
    label: "Input radio",
    value: "answer1",
    type: "radio",
  },
  {
    id: "myAnswerRadio",
    label: "Input radio",
    value: "answer2",
    type: "radio",
  },
];

const daysPosition = {
  0: 7,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
};

const dayByLabel = {
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 6,
};

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
      textMess: "",
      colorButton: "#000000",
      myDATE: "",
      myFile: {} as InputFileProps,
      myFiles: [] as InputFileProps[],
      myNumb: 0,
    },
    onSubmit: () => {},
  });

  const [count, setcount] = useState(new Date().getMonth());
  // console.log(formik.values);

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
          <AtomWrapper flexDirection="row" alignItems="center" width="100%">
            <AtomLoader isLoading type="large" />
            <AtomLoader isLoading type="large" colorLoad="#0072FF" />
            <AtomLoader
              isLoading={false}
              type="fullscreen"
              colorLoad="#0072FF"
            />
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper>
          <AtomText>AtomLoader Medium</AtomText>
          <AtomWrapper flexDirection="row" alignItems="center" width="100%">
            <AtomLoader isLoading type="medium" />
            <AtomLoader isLoading type="medium" colorLoad="#0072FF" />
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper>
          <AtomText>AtomLoader Small</AtomText>
          <AtomWrapper flexDirection="row" alignItems="center" width="100%">
            <AtomLoader isLoading type="small" />
            <AtomLoader isLoading type="small" colorLoad="#0072FF" />
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper>
          <AtomWrapper flexDirection="row" alignItems="center" gap="20px">
            <AtomButton
              onClick={() => {
                setcount((prev) => (prev === 0 ? 0 : prev - 1));
              }}
            >
              Decrease
            </AtomButton>
            <AtomText>
              {new Date(new Date().getFullYear(), count).toLocaleDateString(
                "es",
                {
                  month: "long",
                }
              )}
            </AtomText>
            <AtomButton
              onClick={() => {
                setcount((prev) => (prev === 11 ? 11 : prev + 1));
              }}
              // backgroundLinearGradient={{
              //   rotate: "157deg",
              //   primary: "rgb(255, 61, 194)",
              //   secondary: "rgb(255, 0, 102)",
              // }}
              backgroundColor={formik.values.colorButton}
            >
              Increase
            </AtomButton>
          </AtomWrapper>
        </AtomWrapper>
        <AtomInput
          type="color"
          label="Input color"
          labelColor="#999"
          id="colorButton"
          accentColor="rgb(255, 0, 238)"
          formik={formik}
          height="80px"
        />
        <AtomWrapper
          customCSS={css`
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 10px;
          `}
        >
          {[
            "Lunes",
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes",
            "Sabado",
            "Domingo",
          ].map((item, index) => {
            const current = new Date();
            const currentDay =
              dayByLabel[current.getDay()] === index &&
              current.getMonth() === count;
            return (
              <AtomWrapper
                alignItems="center"
                justifyContent="center"
                padding="5px"
                customCSS={css`
                  ${currentDay &&
                  css`
                    border-bottom: 2px solid ${formik.values.colorButton};
                  `}
                `}
              >
                <AtomText fontWeight="bold">{item}</AtomText>
              </AtomWrapper>
            );
          })}
        </AtomWrapper>
        <AtomWrapper
          customCSS={css`
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            background-color: var(--background-color);
            gap: 4px;
            grid-template-rows: repeat(6, auto);
          `}
        >
          {getDaysByMotnh({
            month: count,
          }).map((item) => {
            return (
              <AtomWrapper
                customCSS={css`
                  padding: 8px;
                  background-color: var(--card-background);
                  /* grid-column: ${daysPosition[item.gridPosition]}; */
                  ${item.isToday
                    ? css`
                        background-color: ${formik.values.colorButton};
                      `
                    : css`
                        background-color: var(--calendar-color);
                      `}
                  ${!item.isMonth &&
                  css`
                    background-color: #e7e7e7;
                  `}
                `}
                height="120px"
              >
                <AtomText
                  fontSize="17px"
                  fontWeight="bold"
                  color={
                    item.isToday && isDarkLight(`${formik.values.colorButton}`)
                  }
                >
                  {item.countNumber}
                </AtomText>
                <AtomText
                  color={
                    item.isToday && isDarkLight(`${formik.values.colorButton}`)
                  }
                >
                  {item.date.toLocaleString("es-ES", {
                    month: "long",
                    year: "numeric",
                  })}
                </AtomText>
              </AtomWrapper>
            );
          })}
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
          <AtomText width="100%">{formik.values.textMess}</AtomText>
          <AtomText width="100%">
            {formik.values.name} {formik.values.name.length}
          </AtomText>
          <AtomInput
            type="text"
            label="Input text"
            placeholder="Hola escribe aqui"
            labelColor="#999"
            formik={formik}
            onChange={(envent) => {
              console.log(envent.target.value);
            }}
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
            label="Input radio"
            labelColor="#999"
            id="radioChcek"
            formik={formik}
            accentColor="rgb(253, 119, 2)"
          />
          <AtomInput
            type="checkbox"
            label="Input checkbox"
            labelColor="#999"
            formik={formik}
            id="checkBox"
            accentColor="rgb(153, 0, 255)"
          />
          <AtomInput
            type="checkbox"
            label="Input checkbox"
            labelColor="#999"
            id="custom"
            accentColor="rgb(255, 0, 238)"
            formik={formik}
          />
          <AtomInput
            type="textbox"
            label="Input textbox"
            labelColor="#999"
            id="textMess"
            accentColor="rgb(255, 0, 238)"
            formik={formik}
          />
          <AtomInput
            type="color"
            label="Input color"
            labelColor="#999"
            id="colorButton"
            accentColor="rgb(255, 0, 238)"
            formik={formik}
            height="80px"
          />
          <AtomWrapper
            flexDirection="row"
            justifyContent="flex-end"
            width="100%"
            gap="10px"
          >
            <AtomButton backgroundColor={formik.values.colorButton}>
              TEST COLOR
            </AtomButton>
            <AtomButton backgroundColor={formik.values.colorButton}>
              TEST COLOR
            </AtomButton>
            <AtomButton backgroundColor={formik.values.colorButton}>
              TEST COLOR
            </AtomButton>
            <AtomButton backgroundColor={formik.values.colorButton}>
              TEST COLOR
            </AtomButton>
            <AtomButton backgroundColor={formik.values.colorButton}>
              TEST COLOR
            </AtomButton>
            <AtomButton backgroundColor={formik.values.colorButton}>
              TEST COLOR
            </AtomButton>
          </AtomWrapper>
          <AtomInput
            type="date"
            label="Input date"
            labelColor="#999"
            id="myDATE"
            accentColor="rgb(255, 0, 238)"
            formik={formik}
            height="80px"
          />
          <AtomInput
            type="month"
            label="Input date month"
            labelColor="#999"
            id="myDATE"
            accentColor="rgb(255, 0, 238)"
            formik={formik}
            height="80px"
          />
          <AtomInput
            type="number"
            label="Input number"
            labelColor="#999"
            id="myNumb"
            accentColor="rgb(255, 0, 238)"
            formik={formik}
            step={10}
            maxLength={100}
            min={0}
            max={100}
            height="80px"
          />
          <AtomInput
            type="file"
            label="Input file"
            labelColor="#999"
            id="myFile"
            accentColor="rgb(255, 0, 238)"
            formik={formik}
            height="80px"
          />
          <AtomWrapperCard>
            <AtomWrapper>
              <AtomImage src={formik.values.myFile?.blob} />
              <AtomText>{formik.values.myFile?.name}</AtomText>
            </AtomWrapper>
          </AtomWrapperCard>
          <AtomInput
            type="file"
            label="Input files "
            labelColor="#999"
            id="myFiles"
            accentColor="rgb(255, 0, 238)"
            formik={formik}
            multiple
            height="80px"
          />
          <AtomWrapperCard>
            {formik.values.myFiles?.map((item) => (
              <AtomWrapper>
                <AtomImage src={item?.blob} />
                <AtomText>{item?.name}</AtomText>
              </AtomWrapper>
            ))}
          </AtomWrapperCard>
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
            <AtomButton
              margin="10px"
              backgroundColor="rgb(255, 170,0)"
              onClick={() => {
                setloading(true);
              }}
            >
              LOADER FULLSSCREEN
            </AtomButton>
            <AtomButton
              margin="10px"
              backgroundColor="#3d3b38"
              onClick={() => {
                setloading(true);
              }}
            >
              LOADER FULLSSCREEN
            </AtomButton>
            <AtomButton
              margin="10px"
              backgroundColor="#47129c"
              onClick={() => {
                setloading(true);
              }}
            >
              LOADER FULLSSCREEN
            </AtomButton>
            <AtomButton
              margin="10px"
              backgroundColor="#e91ee9"
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
