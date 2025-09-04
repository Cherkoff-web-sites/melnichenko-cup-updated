/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const TeamInfoType2 = (props) => {
  const {
    title,
    team,
    img = null,
    check = false,
    checkImg = false
  } = props;

  const css = check ? "text-[10px] sm:text-[19px] xl:text-[22px] font-[700] font-actay absolute bottom-[10px] sm:bottom-[14px]" : "text-[11px] sm:text-[19px] xl:text-[22px] font-[700] font-actay";
  const cssImg = checkImg ? "w-[82px] h-[82px] absolute bottom-[5px] right-[10px]" : "w-[82px] h-[82px] absolute top-0 right-[10px]";
  return (
    <>
      <div className="p-[10px] sm:p-[15px] rounded-[10px] border border-[#FF5200] relative flex flex-col justify-between gap-[58px]">
        <div className="text-[10px] sm:text-[14px] text-[#CCD3DB] font-[400]">{title}</div>
        <div className={css}>{team}</div>

        {
          img && <img src={img} alt="" className={cssImg}/>
        }
        
      </div>
    </>
  )
}

export default TeamInfoType2