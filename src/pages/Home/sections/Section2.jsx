/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import ItemInfo from "../components/ItemInfo"
import Mask1 from "/images/Mask_1_new.png"
import Mask2 from "/images/Mask_2_new.png"
import Mask3 from "/images/Mask_3_new.png"
import Mask4 from "/images/Mask_4_new.png"
const Section2 = () => {
  const data = [
    {
      id: "01",
      img: Mask1,
      title: "Футбольные Соревнования",
      text: "Проводятся среди 10-ти команд, каждая команда включает до 10 участников."
    },
    {
      id: "02",
      img: Mask2,
      title: "Автограф сессии",
      text: "Автограф и фото-сессии от звезд профессионального и медиа-футбола."
    },
    {
      id: "03",
      img: Mask4,
      secondImg: Mask3,
      title: "Развлекательные зоны",
      text: "В рамках matchday для болельщиков будут организованы активные игры, зоны с видеоиграми и творческие мастер-классы."
    }
  ]
  return (
    <>
      <div className="mt-[80px] sm:mt-[90px] lg:mt-[130px]" id="program">
        <div className="text-center text-[23px] sm:text-[40px] md:text-[48px] font-[700] font-actay uppercase">Программа фестиваля</div>
        <div className="w-[310px] sm:w-full max-w-[845px] mx-auto sm:block text-center text-[14px] md:text-[24px] font-[400] mt-[10px] sm:mt-[8px]"><b>"Кубок Мельниченко"</b> — Это соревнование для сотрудников компаний СУЭК, СГК, ЕвроХим, ГРК, АИМ и ЦТиП</div>

        <div className="mt-[20px] sm:mt-[33px] grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
          <div>
            <ItemInfo 
              key={0} 
              {...data[0]} 
            />
          </div>
          <div>
            <ItemInfo 
              key={1} 
              {...data[1]} 
            />
          </div>
          <div className="lg:col-span-2">
            <ItemInfo 
              key={2} 
              {...data[2]} 
              customClass="third-card"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Section2