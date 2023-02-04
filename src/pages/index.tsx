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
import InputText from "@Src/@atoms/AtomInput/text";
import AtomInputTypes from "@Src/@atoms/AtomInput/types";
import AtomTextEditor from "@Src/@atoms/AtomTextEditor";
import AtomWrapperCard from "@Src/@atoms/AtomWrapperCard";
import getDaysByMotnh from "@Src/@utils/calendar";
import isDarkLight from "@Src/@utils/isDarkLight";
import FormFormik from "@Src/components/formFormik";
import { useTheme } from "@Src/hooks";
import { handleSetTheme, handleToggleTheme } from "@Src/utils";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { useState } from "react";
import * as Yup from "yup";

const MyForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
    }),
    onSubmit: (values, formikHelpers) => {
      alert(JSON.stringify(values, null, 2));
      formikHelpers.setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* <InputText formik={formik} id="name" />
      <InputText formik={formik} id="name" />
      <InputText formik={formik} id="name" />
      <InputText formik={formik} id="name" />
      <InputText formik={formik} id="name" /> */}

      {formik.errors.name && formik.touched.name && formik.errors.name}

      <motion.div
        css={css`
          padding: 5px;
          border-radius: 5px;
          &:hover {
            box-shadow: rgb(0 0 0 / 4%) 0px 0.60323px 3.01615px -1.25px,
              rgb(0 0 0 / 3%) 0px 2.29021px 11.4511px -2.5px,
              rgb(0 0 0 / 1%) 0px 10px 50px -3.75px;
            background-color: rgba(255, 255, 255, 0.2);
          }
          &:focus {
            box-shadow: rgb(0 0 0 / 4%) 0px 0.60323px 3.01615px -1.25px,
              rgb(0 0 0 / 3%) 0px 2.29021px 11.4511px -2.5px,
              rgb(0 0 0 / 1%) 0px 10px 50px -3.75px;
            background-color: rgba(255, 255, 255, 0.2);
          }
        `}
        whileTap={{
          scale: 0.99,
        }}
        whileHover={{ scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div
          css={css`
            display: flex;
            flex-direction: column;
            padding: 8px 12px;
            cursor: text;
            box-sizing: border-box;
            border-radius: 5px;
            padding: 5px;
            padding: 0px;
            box-shadow: rgb(0 0 0 / 10%) 0px 0.60323px 3.01615px -0.833333px,
              rgb(0 0 0 / 10%) 0px 2.29021px 11.4511px -1.66667px,
              rgb(0 0 0 / 10%) 0px 10px 50px -2.5px;
            border: 1px solid #ffffff7f;
          `}
        >
          <motion.input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="InputDefault"
          />
        </motion.div>
      </motion.div>

      <motion.div
        css={css`
          height: 100px;
          padding: 5px;
          border-radius: 5px;
          &:hover {
            box-shadow: rgb(0 0 0 / 4%) 0px 0.60323px 3.01615px -1.25px,
              rgb(0 0 0 / 3%) 0px 2.29021px 11.4511px -2.5px,
              rgb(0 0 0 / 1%) 0px 10px 50px -3.75px;
            background-color: rgba(255, 255, 255, 0.2);
          }
          &:focus {
            box-shadow: rgb(0 0 0 / 4%) 0px 0.60323px 3.01615px -1.25px,
              rgb(0 0 0 / 3%) 0px 2.29021px 11.4511px -2.5px,
              rgb(0 0 0 / 1%) 0px 10px 50px -3.75px;
            background-color: rgba(255, 255, 255, 0.2);
          }
        `}
        whileTap={{
          scale: 0.99,
        }}
        whileHover={{ scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div
          css={css`
            display: flex;
            height: 100px;
            flex-direction: column;
            padding: 8px 12px;
            cursor: text;
            box-sizing: border-box;
            border-radius: 5px;
            padding: 5px;
            padding: 0px;
            box-shadow: rgb(0 0 0 / 10%) 0px 0.60323px 3.01615px -0.833333px,
              rgb(0 0 0 / 10%) 0px 2.29021px 11.4511px -1.66667px,
              rgb(0 0 0 / 10%) 0px 10px 50px -2.5px;
            border: 1px solid #ffffff7f;
          `}
        >
          <motion.input
            type="color"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="InputDefault"
          />
        </motion.div>
      </motion.div>

      <motion.div
        css={css`
          padding: 5px;
          border-radius: 5px;
          &:hover {
            box-shadow: rgb(0 0 0 / 4%) 0px 0.60323px 3.01615px -1.25px,
              rgb(0 0 0 / 3%) 0px 2.29021px 11.4511px -2.5px,
              rgb(0 0 0 / 1%) 0px 10px 50px -3.75px;
            background-color: rgba(255, 255, 255, 0.2);
          }
          &:focus {
            box-shadow: rgb(0 0 0 / 4%) 0px 0.60323px 3.01615px -1.25px,
              rgb(0 0 0 / 3%) 0px 2.29021px 11.4511px -2.5px,
              rgb(0 0 0 / 1%) 0px 10px 50px -3.75px;
            background-color: rgba(255, 255, 255, 0.2);
          }
        `}
        whileTap={{
          scale: 0.99,
        }}
        whileHover={{ scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div
          css={css`
            display: flex;
            flex-direction: column;
            padding: 8px 12px;
            cursor: text;
            box-sizing: border-box;
            border-radius: 5px;
            padding: 5px;
            padding: 0px;
            box-shadow: rgb(0 0 0 / 10%) 0px 0.60323px 3.01615px -0.833333px,
              rgb(0 0 0 / 10%) 0px 2.29021px 11.4511px -1.66667px,
              rgb(0 0 0 / 10%) 0px 10px 50px -2.5px;
            border: 1px solid #ffffff7f;
          `}
        >
          <motion.input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="InputDefault"
          />
        </motion.div>
      </motion.div>

      <motion.div
        css={css`
          padding: 5px;
          border-radius: 5px;
          &:hover {
            box-shadow: rgb(0 0 0 / 4%) 0px 0.60323px 3.01615px -1.25px,
              rgb(0 0 0 / 3%) 0px 2.29021px 11.4511px -2.5px,
              rgb(0 0 0 / 1%) 0px 10px 50px -3.75px;
            background-color: rgba(255, 255, 255, 0.2);
          }
          &:focus {
            box-shadow: rgb(0 0 0 / 4%) 0px 0.60323px 3.01615px -1.25px,
              rgb(0 0 0 / 3%) 0px 2.29021px 11.4511px -2.5px,
              rgb(0 0 0 / 1%) 0px 10px 50px -3.75px;
            background-color: rgba(255, 255, 255, 0.2);
          }
        `}
        whileTap={{
          scale: 0.99,
        }}
        whileHover={{ scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div
          css={css`
            display: flex;
            flex-direction: column;
            padding: 8px 12px;
            cursor: text;
            box-sizing: border-box;
            border-radius: 5px;
            padding: 5px;
            padding: 0px;
            box-shadow: rgb(0 0 0 / 10%) 0px 0.60323px 3.01615px -0.833333px,
              rgb(0 0 0 / 10%) 0px 2.29021px 11.4511px -1.66667px,
              rgb(0 0 0 / 10%) 0px 10px 50px -2.5px;
            border: 1px solid #ffffff7f;
          `}
        >
          <motion.input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="InputDefault"
          />
        </motion.div>
      </motion.div>

      <motion.div
        css={css`
          padding: 5px;
          border-radius: 5px;
          &:hover {
            box-shadow: rgb(0 0 0 / 4%) 0px 0.60323px 3.01615px -1.25px,
              rgb(0 0 0 / 3%) 0px 2.29021px 11.4511px -2.5px,
              rgb(0 0 0 / 1%) 0px 10px 50px -3.75px;
            background-color: rgba(255, 255, 255, 0.2);
          }
          &:focus {
            box-shadow: rgb(0 0 0 / 4%) 0px 0.60323px 3.01615px -1.25px,
              rgb(0 0 0 / 3%) 0px 2.29021px 11.4511px -2.5px,
              rgb(0 0 0 / 1%) 0px 10px 50px -3.75px;
            background-color: rgba(255, 255, 255, 0.2);
          }
        `}
        whileTap={{
          scale: 0.99,
        }}
        whileHover={{ scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div
          css={css`
            display: flex;
            flex-direction: column;
            padding: 8px 12px;
            cursor: text;
            box-sizing: border-box;
            border-radius: 5px;
            padding: 5px;
            padding: 0px;
            box-shadow: rgb(0 0 0 / 10%) 0px 0.60323px 3.01615px -0.833333px,
              rgb(0 0 0 / 10%) 0px 2.29021px 11.4511px -1.66667px,
              rgb(0 0 0 / 10%) 0px 10px 50px -2.5px;
            border: 1px solid #ffffff7f;
          `}
        >
          <motion.input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="InputDefault"
          />
        </motion.div>
      </motion.div>

      <motion.div
        css={css`
          padding: 5px;
          border-radius: 5px;
          &:hover {
            box-shadow: rgb(0 0 0 / 4%) 0px 0.60323px 3.01615px -1.25px,
              rgb(0 0 0 / 3%) 0px 2.29021px 11.4511px -2.5px,
              rgb(0 0 0 / 1%) 0px 10px 50px -3.75px;
            background-color: rgba(255, 255, 255, 0.2);
          }
          &:focus {
            box-shadow: rgb(0 0 0 / 4%) 0px 0.60323px 3.01615px -1.25px,
              rgb(0 0 0 / 3%) 0px 2.29021px 11.4511px -2.5px,
              rgb(0 0 0 / 1%) 0px 10px 50px -3.75px;
            background-color: rgba(255, 255, 255, 0.2);
          }
        `}
        whileTap={{
          scale: 0.99,
        }}
        whileHover={{ scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div
          css={css`
            display: flex;
            flex-direction: column;
            padding: 8px 12px;
            cursor: text;
            box-sizing: border-box;
            border-radius: 5px;
            padding: 5px;
            padding: 0px;
            box-shadow: rgb(0 0 0 / 10%) 0px 0.60323px 3.01615px -0.833333px,
              rgb(0 0 0 / 10%) 0px 2.29021px 11.4511px -1.66667px,
              rgb(0 0 0 / 10%) 0px 10px 50px -2.5px;
            border: 1px solid #ffffff7f;
          `}
        >
          <motion.input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="InputDefault"
          />
        </motion.div>
      </motion.div>

      <motion.div
        css={css`
          padding: 5px;
          border-radius: 5px;
          &:hover {
            box-shadow: rgb(0 0 0 / 4%) 0px 0.60323px 3.01615px -1.25px,
              rgb(0 0 0 / 3%) 0px 2.29021px 11.4511px -2.5px,
              rgb(0 0 0 / 1%) 0px 10px 50px -3.75px;
            background-color: rgba(255, 255, 255, 0.2);
          }
          &:focus {
            box-shadow: rgb(0 0 0 / 4%) 0px 0.60323px 3.01615px -1.25px,
              rgb(0 0 0 / 3%) 0px 2.29021px 11.4511px -2.5px,
              rgb(0 0 0 / 1%) 0px 10px 50px -3.75px;
            background-color: rgba(255, 255, 255, 0.2);
          }
        `}
        whileTap={{
          scale: 0.99,
        }}
        whileHover={{ scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div
          css={css`
            display: flex;
            flex-direction: column;
            padding: 8px 12px;
            cursor: text;
            box-sizing: border-box;
            border-radius: 5px;
            padding: 5px;
            padding: 0px;
            box-shadow: rgb(0 0 0 / 10%) 0px 0.60323px 3.01615px -0.833333px,
              rgb(0 0 0 / 10%) 0px 2.29021px 11.4511px -1.66667px,
              rgb(0 0 0 / 10%) 0px 10px 50px -2.5px;
            border: 1px solid #ffffff7f;
          `}
        >
          <motion.input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="InputDefault"
          />
        </motion.div>
      </motion.div>

      {formik.errors.email && formik.touched.email && formik.errors.email}

      <button type="submit" disabled={formik.isSubmitting}>
        Submit
      </button>
    </form>
  );
};

const MyForm222222 = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
    }),
    onSubmit: (values, formikHelpers) => {
      alert(JSON.stringify(values, null, 2));
      formikHelpers.setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputText formik={formik} id="name" />
      <InputText formik={formik} id="name" />
      <InputText formik={formik} id="name" />
      <InputText formik={formik} id="name" />
      <InputText formik={formik} id="name" />

      <button type="submit" disabled={formik.isSubmitting}>
        Submit
      </button>
    </form>
  );
};

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
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es requerido"),
      textMess: Yup.string().required("El textMess es requerido"),
    }),
    onSubmit: () => {},
  });

  const [count, setcount] = useState(new Date().getMonth());

  return (
    <AtomWrapper maxWidth="1440px" padding="0px 90px" gap="20px">
      <AtomWrapper>
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
        <motion.div
          css={css`
            background-color: red;
          `}
        >
          dfdf
        </motion.div>

        <AtomWrapper
          width="100%"
          customCSS={css`
            iframe {
              width: 100%;
            }
          `}
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://open.spotify.com/embed/track/00Cxlg96EHYJG2VoTh7Q3D?utm_source=generator&quot" width="auto" height="80px" id="IFRAMEPLAYER" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture;"></iframe>`,
          }}
        ></AtomWrapper>
        <iframe
          src="https://open.spotify.com/embed/album/4WKAzZ4LdjbtQu1Nhh5KDx?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <AtomTextEditor
          accentColor="rgb(18, 221, 45)"
          onChange={(event) => {}}
          value={``}
        />
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
        <MyForm />
        <MyForm222222 />
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
            gap: 10px;
          `}
        >
          {getDaysByMotnh({
            month: count,
          }).map((item) => {
            return (
              <AtomWrapper
                width="auto"
                customCSS={css`
                  padding: 8px;
                  background-color: var(--card-background);
                  grid-column: ${daysPosition[item.gridPosition]};
                  ${item.isToday
                    ? css`
                        background-color: ${formik.values.colorButton};
                      `
                    : css`
                        background-color: var(--calendar-color);
                      `}
                  ${!item.isMonth &&
                  css`
                    background-color: var(--card-background);
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
          <AtomButton onClick={formik.submitForm}>SUBMIT</AtomButton>
          <AtomText width="100%">{formik.values.textMess}</AtomText>
          <AtomText width="100%"></AtomText>

          <FormFormik />

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
              onClick={() => {}}
            >
              LOADER FULLSSCREEN
            </AtomButton>
            <AtomButton
              margin="10px"
              backgroundColor="rgb(255, 170,0)"
              onClick={() => {}}
            >
              LOADER FULLSSCREEN
            </AtomButton>
            <AtomButton
              margin="10px"
              backgroundColor="#3d3b38"
              onClick={() => {}}
            >
              LOADER FULLSSCREEN
            </AtomButton>
            <AtomButton
              margin="10px"
              backgroundColor="#47129c"
              onClick={() => {}}
            >
              LOADER FULLSSCREEN
            </AtomButton>
            <AtomButton
              margin="10px"
              backgroundColor="#e91ee9"
              onClick={() => {}}
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
