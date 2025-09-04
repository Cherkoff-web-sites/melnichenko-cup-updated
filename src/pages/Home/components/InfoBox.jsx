/* eslint-disable react/prop-types */

const InfoBox = ({ img, title, desc, customDescClass }) => {
  return (
    <>
      <div className="p-[10px] sm:p-[15px] md:p-[20px] bg-[#4D6580] rounded-[20px] flex flex-col h-full">
        <div className="w-[36px] sm:w-[60px] md:w-[70px] h-[36px] sm:h-[60px] md:h-[70px] truncate">
          <img src={img} alt={title} className="w-full h-full object-cover"/>
        </div>
        <div className="text-[12px] sm:text-[16px] sm:text-[18px] md:text-[20px] font-[700] font-actay mt-[20px] sm:mt-[30px] md:mt-[43px] uppercase whitespace-pre-line">{title}</div>
        <div className={`w-[146px] sm:w-full text-[12px] sm:text-[18px] md:text-[20px] font-[400] mt-[5px] sm:mt-[15px] whitespace-normal sm:whitespace-pre-line flex-grow ${customDescClass}`}>{desc}</div>
      </div>
    </>
  )
}

export default InfoBox