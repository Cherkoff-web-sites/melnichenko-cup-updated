/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Mask from "/images/Mask_1.png"
const ItemInfo = (props) => {
  const {
    id,
    img,
    title,
    text,
    customClass,
    secondImg
  } = props;

  return (
    <>
      <div className="pt-[15px] sm:pt-[25px] pl-[15px] sm:pl-[25px] bg-[#4C6580] h-[154px] sm:h-[230px] md:h-[245px] xl:h-[261px] rounded-[15px] truncate relative">
        <div className="inline-flex justify-center items-center w-[34px] sm:w-[50px] h-[34px] sm:h-[50px] bg-[#FF5200] text-[10px] sm:text-[20px] rounded-[10px]">{id}/</div>
        <div className="xl:text-[24px] font-[700] mt-[25px] lg:mt-[35px] font-actay uppercase relative z-[1]">{title}</div>
        <div className={`w-[300px] sm:w-[460px] ${customClass === 'third-card' ? 'xl:w-[758px]' : 'xl:w-[526px]'} text-[12px] xl:text-[24px] font-[300] mt-0 sm:mt-[9px] whitespace-normal leading-[15px] sm:leading-[30px] whitespace-pre-line relative z-[1]`}>{text}</div>

        <img src={img} alt="" className={`w-[110px] sm:w-[130px] ${customClass === 'third-card' ? 'xl:w-[300px]' : 'xl:w-[170px]'} h-auto absolute top-0 right-0 z-[0]`}/>
        {customClass === 'third-card' && secondImg && (
          <img 
            src={secondImg} 
            alt="" 
            className="w-[110px] sm:w-[130px] xl:w-[240px] h-auto absolute top-[5px] left-1/2 transform -translate-x-1/2 z-[0]"
          />
        )}
      </div>
    </>
  )
}

export default ItemInfo