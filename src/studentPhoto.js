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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CountdownCircleTimer
          isPlaying
          duration={5}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
          onComplete={() => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImgSrc(imageSrc);
          }}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>

      <Webcam audio={false} ref={webcamRef} height={100} width={100} />

      {/* <button onClick={capture}>Capture photo</button> */}

      {imgSrc && <img src={imgSrc} height={140} width={100} />}
      {console.log(imgSrc)}
    </>
  );
};

export default StudentWebcamCapture;
