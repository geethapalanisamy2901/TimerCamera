import React from "react";
import Webcam from "react-webcam";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

// const FACING_MODE_USER = "user";
// const FACING_MODE_ENVIRONMENT = "environment";

// const videoConstraints = {
//   facingMode: FACING_MODE_USER,
// };

const StudentWebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  //   const [facingMode, setFacingMode] = React.useState(FACING_MODE_USER);

  //   const handleClick = React.useCallback(() => {
  //     setFacingMode((prevState) =>
  //       prevState === FACING_MODE_USER
  //         ? FACING_MODE_ENVIRONMENT
  //         : FACING_MODE_USER
  //     );
  //   }, []);

  return (
    <>
      <h2>Place your face infront of camera</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CountdownCircleTimer
          size={120}
          isPlaying
          duration={5}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
          onComplete={() => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImgSrc(imageSrc);
          }}
        >
          {({ remainingTime }) => remainingTime + " secs"}
        </CountdownCircleTimer>
      </div>

      <Webcam
        audio={false}
        ref={webcamRef}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "30px",
          width: "100%",
          height: "0%",
        }}
      />

      {imgSrc &&
        console.log(imgSrc)(
          window.addEventListener(
            "flutterInAppWebViewPlatformReady",
            function (event) {
              // call flutter handler with name 'mySum' and pass one or more arguments
              window.flutter_inappwebview
                .callHandler("mySum", "hello")
                .then(function (result) {
                  // get result from Flutter side. It will be the number 64.
                  console.log(result);
                });
            }
          ),
          <img
            src={imgSrc}
            style={{
              paddingTop: "70px",
              width: "100%",
              height: "20%",
              // boxSizing: "content-box",
            }}
          />
        )}
      {console.log(imgSrc)}
    </>
  );
};

export default StudentWebcamCapture;
