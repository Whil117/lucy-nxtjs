import { css } from "@emotion/react";
import { AtomButton, AtomWrapper } from "@Src/@atoms";
import { FC, ReactNode, useEffect, useRef } from "react";

type Props = {
  children?: ReactNode;
};

let height = 620;
let width = 620;

const CameraPage: FC<Props> = (props) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;

      let streaming = false;

      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          video.srcObject = stream;
          video.play();
        })
        .catch((err) => {
          console.error(`An error occurred: ${err}`);
        });

      video.addEventListener(
        "canplay",
        (ev) => {
          if (!streaming) {
            height = video.videoHeight / (video.videoWidth / width);

            // Firefox currently has a bug where the height can't be read from
            // the video, so we will make assumptions if this happens.

            if (isNaN(height)) {
              height = width / (4 / 3);
            }

            video.setAttribute("width", width);
            video.setAttribute("height", height);
            canvas.setAttribute("width", width);
            canvas.setAttribute("height", height);
            streaming = true;
          }
        },
        false
      );
    }
  }, []);

  function clearphoto() {
    const canvas = canvasRef.current;
    const photo = photoRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    const data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);
  }

  function takepicture() {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video) {
      const photo = photoRef.current;
      const context = canvas.getContext("2d");

      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);

      const data = canvas.toDataURL("image/png");

      photo.setAttribute("src", data);
      //   clearphoto();
    }
  }

  return (
    <AtomWrapper
      customCSS={css`
        #video {
          border: 1px solid black;
          box-shadow: 2px 2px 3px black;
          width: 320px;
          height: 240px;
        }

        #photo {
          border: 1px solid black;
          box-shadow: 2px 2px 3px black;
          width: 320px;
          height: 240px;
        }

        #canvas {
          display: none;
        }

        .camera {
          width: 340px;
          display: inline-block;
        }

        .output {
          width: 340px;
          display: inline-block;
          vertical-align: top;
        }

        #startbutton {
          display: block;
          position: relative;
          margin-left: auto;
          margin-right: auto;
          bottom: 32px;
          background-color: rgba(0, 150, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.7);
          box-shadow: 0px 0px 1px 2px rgba(0, 0, 0, 0.2);
          font-size: 14px;
          font-family: "Lucida Grande", "Arial", sans-serif;
          color: rgba(255, 255, 255, 1);
        }

        .contentarea {
          font-size: 16px;
          font-family: "Lucida Grande", "Arial", sans-serif;
          width: 760px;
        }
      `}
    >
      <h1>CameraPage</h1>
      <AtomButton onClick={takepicture}>TAKE PHOTO</AtomButton>
      <div class="contentarea">
        <h1>
          MDN - navigator.mediaDevices.getUserMedia(): Still photo capture demo
        </h1>
        <p>
          This example demonstrates how to set up a media stream using your
          built-in webcam, fetch an image from that stream, and create a PNG
          using that image.
        </p>
        <div class="camera">
          <video id="video" ref={videoRef}>
            Video stream not available.
          </video>
          <button id="startbutton" onClick={takepicture}>
            Take photo
          </button>
        </div>
        <canvas id="canvas" ref={canvasRef}>
          {" "}
        </canvas>
        <div class="output">
          <img
            id="photo"
            alt="The screen capture will appear in this box."
            ref={photoRef}
          />
        </div>
        <p>
          Visit our article
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Taking_still_photos">
            Taking still photos with WebRTC
          </a>
          to learn more about the technologies used here.
        </p>
      </div>
    </AtomWrapper>
  );
};

export default CameraPage;
