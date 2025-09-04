/* eslint-disable react/prop-types */

const TeamInfoType1 = ({title, team, mobileImg = null, mobileCheckImg = false, mobileStyle = false, desktopStyle = false}) => {
  const cssImg = mobileCheckImg ? "w-[58px] h-[58px] sm:w-[82px] sm:h-[82px] absolute bottom-[5px] right-[10px]" : "w-[58px] h-[58px] sm:w-[82px] sm:h-[82px] absolute top-0 right-[10px]";
  
  // Условные стили для карточки
  // mobileStyle=true → заливка ТОЛЬКО на мобильной версии; на ПК — прозрачная с красной обводкой
  // desktopStyle=true → заливка ТОЛЬКО на ПК; на мобильной — прозрачная с красной обводкой
  let cardStyle = "p-[10px] sm:p-[15px] bg-[#ffffff32] rounded-[10px] flex flex-col justify-between gap-[58px] relative";
  if (mobileStyle) {
    cardStyle = "p-[10px] sm:p-[15px] bg-[#ffffff32] sm:bg-transparent border-none sm:border sm:border-[#FF5200] rounded-[10px] flex flex-col justify-between gap-[58px] relative";
  } else if (desktopStyle) {
    cardStyle = "p-[10px] sm:p-[15px] bg-transparent sm:bg-[#ffffff32] border border-[#FF5200] sm:border-none rounded-[10px] flex flex-col justify-between gap-[58px] relative";
  }
  
  return (
    <>
      <div className={cardStyle}>
        <div className="text-[12px] sm:text-[14px] font-[400]">{title}</div>
        <div className="w-[150px] xl:w-[260px] text-[10px] sm:text-[16px] xl:text-[22px] font-[700] font-actay">{team}</div>
        
        {/* Иконка для мобильной версии (скрыта на ПК) */}
        {
          mobileImg && <img src={mobileImg} alt="" className={`${cssImg} block sm:hidden`}/>
        }
      </div>
    </>
  )
}

export default TeamInfoType1