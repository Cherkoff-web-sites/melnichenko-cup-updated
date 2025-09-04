/* eslint-disable no-unused-vars */
import temp from "/images/circle_1.png"
import bodyDecor1 from "/images/body_decor_1.png"
import bodyDecor2 from "/images/body_decor_2.png"
import guest1 from "/images/guest_1-1.png"
import guest2 from "/images/guest_2-1.png"
import guest3 from "/images/guest_3-1.png"
import guest4 from "/images/guest_6-1.png"
import guest5 from "/images/guest_11_new.png"
import guest6 from "/images/guest_7_new.png"
const Section6 = () => {
  const data = [
    {
      img: guest1,
      name: `Михаил 
      Прокопьев`,
    },
    {
      img: guest2,
      name: "Мбэйп"
    },
    {
      img: guest3,
      name: `Артемий 
      Форзарезор`,
    }
  ]
  const data2 = [
    {
      img: guest4,
      name: `Денис
      Глушаков`,
    },
    {
      img: guest5,
      name: `Роман
      Павлюченко`,
    },
    {
      img: guest6,
      name: `Павел
      Погребняк`,
    }
  ]
  return (
    <>
      <div className="mt-[80px] sm:mt-[130px] relative" id="guests">
        <div className="text-[23px] md:text-[48px] font-[700] font-actay text-center uppercase">приглашенные футбольные звезды </div>

        <div className="text-[24px] font-[700] font-actay text-center mt-[20px] sm:mt-[40px]">
          <span className="text-[16px] sm:text-[24px] py-[10px] px-[20px] border border-[#FF5200] rounded-[10px]">Медиа игроки</span>
        </div>

        {/* 1 row */}
        <div className="grid grid-cols-2 place-items-center sm:flex sm:justify-center sm:items-center sm:flex-wrap gap-[10px] sm:gap-[25px] mt-[30px]">
          {
            data.map((item, index) => (
              <div className={"h-[245px] sm:h-[355px] " + (index === 4 ? "ml-[170px] sm:ml-0" : "")} key={index}>
                <div className="w-[170px] sm:w-[220px] xl:w-[275px] h-[170px] sm:h-[220px] xl:h-[275px] truncate rounded-full">
                  <img src={item.img} alt="" className={"w-full h-full object-cover "}/>
                </div>
                <div className="mt-[20px] fit-content text-[14px] sm:text-[24px] font-[700] font-actay text-center mx-auto whitespace-pre-line">{item.name}</div>
              </div>
            ))
          }
        </div>
        
        <div className="text-[24px] font-[700] font-actay text-center mt-[40px]">
          <span className="text-[16px] sm:text-[24px] py-[10px] px-[20px] border border-[#FF5200] rounded-[10px]">Профессионалы</span>
        </div>

        {/* 2 row */}
        <div className="grid grid-cols-2 place-items-center sm:flex sm:justify-center sm:items-center sm:flex-wrap gap-[10px] sm:gap-[25px] mt-[30px]">
          {
            data2.map((item, index) => (
              <div className={"h-[245px] sm:h-[355px] " + (index === 4 ? "ml-[170px] sm:ml-0" : "")} key={index}>
                <div className="w-[170px] sm:w-[220px] xl:w-[275px] h-[170px] sm:h-[220px] xl:h-[275px] truncate rounded-full">
                  <img src={item.img} alt="" className={"w-full h-full object-cover "}/>
                </div>
                <div className="mt-[20px] fit-content text-[14px] sm:text-[24px] font-[700] font-actay text-center mx-auto whitespace-pre-line">{item.name}</div>
              </div>
            ))
          }
        </div>
        {/* <div className="w-[360px] sm:w-[575px] md:w-[770px] lg:w-[865px] mx-auto flex items-center justify-center flex-wrap gap-[10px] sm:gap-[20px] mt-[30px]">
          {
            data2.map((item, index) => (
              <div className="h-[215px] sm:h-[275px] md:h-[355px] mt-[38px]" key={index}>
                <div className="w-[170px] sm:w-[220px] xl:w-[275px] h-[170px] sm:h-[220px] xl:h-[275px] truncate rounded-full">
                  <img src={item.img} alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="mt-[20px] text-[16px] sm:text-[24px] font-[700] font-actay text-center w-[140px] mx-auto">{item.name}</div>
              </div>
            ))
          }
        </div> */}
        {/* <div className="flex items-center justify-center gap-[20px] mt-[40px]">
          {
            data3.map((item, index) => (
              <div className="h-[355px]" key={index}>
                <div className="w-[220px] xl:w-[275px] h-[220px] xl:h-[275px] truncate rounded-full">
                  <img src={item.img} alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="mt-[20px] text-[24px] font-[700] font-actay text-center w-[140px] mx-auto">{item.name}</div>
              </div>
            ))
          }
        </div> */}
        <img src={bodyDecor1} alt="" className="absolute top-0 sm:top-[-200px] left-[-30px] sm:left-[-103px] z-[-1] w-[294px] sm:w-[350px] h-auto"/>
        <img src={bodyDecor2} alt="" className="absolute sm:bottom-[-200px] bottom-[0px] right-[-120px] sm:right-[-300px] z-[-1] w-[294px] sm:w-[661px] h-auto"/>
      </div>
    </>
  )
}

export default Section6