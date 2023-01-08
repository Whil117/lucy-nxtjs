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
    label: "Question1",
    value: "answer1",
    type: "radio",
  },
  {
    id: "myAnswerRadio",
    label: "Question2",
    value: "answer2",
    type: "radio",
  },
  {
    id: "myAnswerRadio",
    label: "Question3",
    value: "answer3",
    type: "radio",
  },
  {
    id: "myAnswerRadio",
    label: "Question4",
    value: "answer4",
    type: "radio",
  },
  {
    id: "myAnswerRadio",
    label: "Question5",
    value: "answer5",
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
      myAnswerRadio: "",
    },
    onSubmit: () => {},
  });

  const [checking, setchecking] = useState(false);
  console.log(formik.values);

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
            <AtomLoader type="large" colorLoad="#e78ce7" />
            <AtomLoader type="large" colorLoad="#41c052" />
            <AtomLoader type="large" colorLoad="skyblue" />
            <AtomLoader type="large" colorLoad="#da1f1f" />
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
            <AtomLoader type="medium" colorLoad="#e78ce7" />
            <AtomLoader type="medium" colorLoad="#41c052" />
            <AtomLoader type="medium" colorLoad="skyblue" />
            <AtomLoader type="medium" colorLoad="#da1f1f" />
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
            <AtomLoader type="small" colorLoad="#e78ce7" />
            <AtomLoader type="small" colorLoad="#41c052" />
            <AtomLoader type="small" colorLoad="skyblue" />
            <AtomLoader type="small" colorLoad="#da1f1f" />
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
            // value={formik.values.name}
            // onChange={(event) => {

            //   formik.setFieldValue("name", event.target.value);
            // }}
            id="name"
          />
          {QuestionsRadios?.map((item) => (
            <AtomInput
              type="radio"
              label={item?.label}
              placeholder="Hola escribe aqui"
              labelColor="#999"
              formik={formik}
              isChecked={(formik) =>
                formik?.values?.myAnswerRadio === item.value
              }
              onIsChecked={(formik) =>
                formik?.setFieldValue?.(`${item.id}`, item?.value)
              }
              id={item.id}
              disabled={checking}
            />
          ))}
          <AtomInput
            type="radio"
            label="RadioSelect"
            placeholder="Hola escribe aqui"
            labelColor="#999"
            // value={formik.values.name}
            // onChange={(event) => {

            //   formik.setFieldValue("name", event.target.value);
            // }}
            id="Rddd"
            isChecked={() => checking}
            onIsChecked={() => setchecking(!checking)}
            accentColor="#ff00ee"
          />
          <AtomInput
            type="radio"
            label="RadioSelect"
            placeholder="Hola escribe aqui"
            labelColor="#999"
            // value={formik.values.name}
            // onChange={(event) => {

            //   formik.setFieldValue("name", event.target.value);
            // }}
            id="Rddd"
            isChecked={() => checking}
            onIsChecked={() => setchecking(!checking)}
            accentColor="rgb(153, 0, 255)"
          />
          <AtomInput
            type="radio"
            label="RadioSelect"
            placeholder="Hola escribe aqui"
            labelColor="#999"
            // value={formik.values.name}
            // onChange={(event) => {

            //   formik.setFieldValue("name", event.target.value);
            // }}
            id="Rddd"
            isChecked={() => checking}
            onIsChecked={() => setchecking(!checking)}
            accentColor="rgb(253, 119, 2)"
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
            <AtomIcon src="https://res.cloudinary.com/whil/image/upload/v1670118796/smallcaps_iowxub.svg" />
            <AtomIcon
              src="https://res.cloudinary.com/whil/image/upload/v1670118796/gallery_duuoqb.svg"
              width="100px"
              height="100px"
              color="white"
            />
            <AtomIcon
              src="https://res.cloudinary.com/whil/image/upload/v1666492647/HARMONY_orc7z0.svg"
              color="default"
            />
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
              TOGGLE
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
              LIGHT
            </AtomButton>
            <AtomButton
              margin="10px"
              backgroundColor="rgb(253, 119, 2)"
              onClick={() => {
                theme.setTheme("light");
              }}
            >
              LIGHT COLOR
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
              DARK
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
              LOADER linear-gradient
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
