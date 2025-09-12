/* eslint-disable react/no-unknown-property */
import React from "react";

const OnlineBroadcastTeams = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [widthForVideo, setWidthForVideo] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  React.useEffect(() => {
    const calculateWidthAndHeight = () => {
      if (width >= 1160) {
        setWidthForVideo(1160);
        setHeight(545);
      } else if (width > 992 && width < 1160) {
        setWidthForVideo(992);
        setHeight(545);
      } else if(width > 768 && width < 992) {
        setWidthForVideo(768);
        setHeight((width / 1160) * 545);
      } else if(width > 576 && width < 768) {
        setWidthForVideo(576);
        setHeight((width / 1160) * 545);
      }
      else{
        setWidthForVideo(350);
        setHeight(175);
      }
    };

    calculateWidthAndHeight();
  }, [width]);

  return (
    <>
      <div className="mt-[80px] md:mt-[130px] mb-[80px] sm:mb-[130px] relative z-[2]" id="broadcast">
        <div className="text-[21px] sm:text-[32px] lg:text-[48px] font-[700] font-actay text-center uppercase mb-[20px] sm:mb-[30px]">
          смотрите онлайн трансляцию фестиваля в vk
        </div>

        <iframe
          src="https://vkvideo.ru/video_ext.php?oid=-228510684&id=456239280&autoplay=1"
          width={widthForVideo}
          height={height}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
          frameBorder="0"
          allowFullScreen
          style={{
            borderRadius: "20px",
          }}
        ></iframe>
      </div>
    </>
  );
};

export default OnlineBroadcastTeams;
