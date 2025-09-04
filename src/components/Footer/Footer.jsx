/* eslint-disable no-undef */
import { NavLink } from "react-router-dom"
import { LiaTelegramPlane } from "react-icons/lia";
import { SlSocialVkontakte } from "react-icons/sl";
import logo_footer from "/images/logo.svg"
import React from "react";
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate()
  const [width, setWidth] = React.useState(window.innerWidth);
  const [size, setSize] = React.useState(70);

  const handleScrollToSection = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      // Chuyển hướng về trang chính
      navigate("/");
      // Sử dụng setTimeout để đảm bảo rằng việc cuộn diễn ra sau khi chuyển hướng
      setTimeout(() => {
        window.scrollTo({ top: document.querySelector(href).offsetTop, behavior: 'smooth' });
      }, 100); // Thời gian chờ có thể điều chỉnh tùy theo nhu cầu
    }
  };

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
      if (width < 576) {
        setSize(30)
      } else {
        setSize(70)
      }
    };

    calculateWidthAndHeight();
  }, [width]);

  return (
    <>
      <div className="h-[auto] pb-[20px] md:pb-[85px] bg-footer bg-cover">
        <div className="container mx-auto pt-[35px] sm:pt-[40px]">
          <NavLink to='/'>
            <div className="w-[150px] md:w-[200px] lg:w-[230px] h-auto mx-auto">
              <img src={logo_footer} alt="" className="w-full h-full object-cover" />
            </div>
          </NavLink>
          <div className="flex justify-between flex-wrap md:flex-nowrap mt-[25px] sm:mt-[40px] text-[12px] sm:text-[16px]">
            {/* Left */}
            <div className="flex gap-[120px] md:gap-[20px] lg:gap-[90px]">
              <ul>
              <li>
                  <NavLink 
                    to="#ticket" 
                    onClick={(e) => handleScrollToSection(e, "#ticket")}
                  >
                    Главная
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="#program" 
                    onClick={(e) => handleScrollToSection(e, "#program")}
                  >
                    Программа
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="#broadcast" 
                    onClick={(e) => handleScrollToSection(e, "#broadcast")}
                  >
                    Трансляция
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="#disciplines" 
                    onClick={(e) => handleScrollToSection(e, "#disciplines")}
                  >
                    Дисциплины
                  </NavLink>
                </li>
              </ul>
              <ul>
                <li>
                  <NavLink 
                    to="#guests" 
                    onClick={(e) => handleScrollToSection(e, "#guests")}
                  >
                    Приглашенные гости
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/command"
                  >
                    Команды
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/organizers" 
                  >
                    Организаторы
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* Right */}
            <div className="flex gap-[20px] mt-[15px] sm:mt-0">
              <a href="https://t.me/MelnichenkoCup" target="_blank" className="w-[165px] lg:w-[275px] h-[69px] sm:h-[80px] lg:h-[100px] inline-flex justify-center items-center bg-[#00234A] rounded-[20px]">
                <LiaTelegramPlane size={size}/>
              </a>
              <a href="https://vk.com/melnichenkocup" target="_blank" className="w-[165px] lg:w-[275px] h-[69px] sm:h-[80px] lg:h-[100px] inline-flex justify-center items-center bg-[#00234A] rounded-[20px]">
                <SlSocialVkontakte size={size}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
