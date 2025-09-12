/* eslint-disable react/no-unknown-property */
import React from "react";
import { LiaTelegramPlane } from "react-icons/lia";
import { SlSocialVkontakte } from "react-icons/sl";

const OnlineBroadcast = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [widthForVideo, setWidthForVideo] = React.useState(window.innerWidth);
  const [size, setSize] = React.useState(70);
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
        setSize(30)
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

        <div className="text-[14px] w-[300px] sm:w-full sm:text-[32px] font-[700] font-actay text-center mt-[20px] sm:mt-[50px] mx-auto sm:mx-0">
          Подписывайтесь на нас в социальных сетях
        </div>

        <div className="mt-[15px] sm:mt-[40px] flex justify-center gap-[20px]">
          <a
            href="https://t.me/MelnichenkoCup"
            target="_blank"
            className="w-[144px] sm:w-[220px] md:w-[260px] lg:w-[290px] h-[55px] sm:h-[95px] md:h-[110px] lg:h-[150px] inline-flex justify-center items-center bg-[#111821] rounded-[12px] sm:rounded-[20px]"
          >
            <LiaTelegramPlane size={size} />
          </a>
          <a
            href="https://vk.com/melnichenkocup"
            target="_blank"
            className="w-[144px] sm:w-[220px] md:w-[260px] lg:w-[290px] h-[55px] sm:h-[95px] md:h-[110px] lg:h-[150px] inline-flex justify-center items-center bg-[#111821] rounded-[12px] sm:rounded-[20px]"
          >
            <SlSocialVkontakte size={size} />
          </a>
        </div>
      </div>
    </>
  );
};

export default OnlineBroadcast;

