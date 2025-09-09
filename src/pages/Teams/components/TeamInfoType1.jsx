/* eslint-disable react/prop-types */

const TeamInfoType1 = ({city, team, mobileImg = null, mobileCheckImg = false}) => {
  const cssImg = mobileCheckImg ? "w-[58px] h-[58px] sm:w-[82px] sm:h-[82px] absolute bottom-[5px] right-[10px]" : "w-[58px] h-[58px] sm:w-[82px] sm:h-[82px] absolute top-0 right-[10px]";
  
  // Единый стиль для всех карточек - прозрачный фон с красной обводкой
  const cardStyle = "p-[10px] sm:p-[15px] bg-transparent border border-[#FF5200] rounded-[10px] flex flex-col justify-between gap-[58px] relative";
  
  return (
    <>
      <div className={cardStyle}>
        <div className="text-[12px] sm:text-[14px] text-[#CCD3DB] font-[400]">{city}</div>
        <div className="w-[150px] xl:w-[260px] text-[10px] sm:text-[16px] xl:text-[22px] font-[700] font-actay uppercase">{team}</div>
        
        {/* Иконка для мобильной версии (скрыта на ПК) */}
        {
          mobileImg && <img src={mobileImg} alt="" className={`${cssImg} block sm:hidden`}/>
        }
      </div>
    </>
  )
}

export default TeamInfoType1