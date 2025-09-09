/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const TeamInfoType2 = (props) => {
  const {
    city,
    team,
    img = null,
    check = false,
    checkImg = false,
    mobileImg = null,
    mobileCheckImg = false,
    customFontSize = false
  } = props;

  const css = check ? 
    (customFontSize ? "text-[10px] sm:text-[19px] xl:text-[21px] font-[700] font-actay uppercase absolute bottom-[10px] sm:bottom-[14px]" : "text-[10px] sm:text-[19px] xl:text-[22px] font-[700] font-actay uppercase absolute bottom-[10px] sm:bottom-[14px]") :
    (customFontSize ? "text-[11px] sm:text-[19px] xl:text-[21px] font-[700] font-actay uppercase" : "text-[11px] sm:text-[19px] xl:text-[22px] font-[700] font-actay uppercase");
  const cssImg = checkImg ? "w-[58px] h-[58px] sm:w-[82px] sm:h-[82px] absolute bottom-[5px] right-[10px]" : "w-[58px] h-[58px] sm:w-[82px] sm:h-[82px] absolute top-0 right-[10px]";
  
  // Единый стиль для всех карточек - прозрачный фон с красной обводкой
  const cardStyle = "p-[10px] sm:p-[15px] bg-transparent border border-[#FF5200] rounded-[10px] relative flex flex-col justify-between gap-[58px]";
  return (
    <>
      <div className={cardStyle}>
        <div className="text-[10px] sm:text-[14px] text-[#CCD3DB] font-[400]">{city}</div>
        <div className={css}>{team}</div>

        {/* Иконка для ПК версии (скрыта на мобильных) */}
        {
          img && <img src={img} alt="" className={`${cssImg} hidden sm:block`}/>
        }
        
        {/* Иконка для мобильной версии (скрыта на ПК) */}
        {
          mobileImg && <img src={mobileImg} alt="" className={`${cssImg} block sm:hidden`}/>
        }
        
      </div>
    </>
  )
}

export default TeamInfoType2