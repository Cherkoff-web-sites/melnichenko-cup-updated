
const Section5 = () => {
  const schedule1 = [
    {
      time: "10:00 - 10:30",
      title: "Сбор участников"
    },
    {
      time: "10:30 - 11:00",
      title: "Церемония открытия"
    },
    {
      time: "11:00 - 13:55",
      title: "Матчи группового этапа"
    },
    {
      time: "13:55 - 15:20",
      title: `Футбольные челленджи
      со звездами`
    }
  ]
  const schedule2 = [
    {
      time: "10:00 - 12:05",
      title: "Матчи группового этапа"
    },
    {
      time: "12:05 - 13:55",
      title: `Плей-офф и челленджи
      со звездами`
    },
    {
      time: "13:55 - 16:00",
      title: "Финальные матчи"
    },
    {
      time: "16:00 - 16:30",
      title: `Торжественная
      церемония награждения`
    }
  ]
  return (
    <>
      <div className="mt-[80px] sm:mt-[130px]" id="schedule">
        <div className="uppercase text-center text-[24px] sm:text-[32px] md:text-[48px] font-[700] font-actay">расписание фестиваля</div>

        <div className="mt-[63px] grid grid-cols-1 lg:grid-cols-2 gap-[45px] lg:gap-[20px]">
          <div className="border border-[#FF5200] pr-0 pl-[15px] sm:px-[32px] pt-[50px] lg:pt-[68px] pb-[10px] rounded-[20px] relative">
            {
              schedule1.map((item, index) => (
                <div className="flex items-center gap-[17px] sm:gap-[28px] mb-[20px] text-[14px] sm:text-[13px] lg:text-[17px]" key={index}>
                  <span className="">{item.time}</span>
                  <span className="whitespace-pre-line">{item.title}</span>
                </div>
              ))
            }
            <div className="text-[14px] sm:text-[24px] font-[700] font-actay leading-[100%] py-[10px] px-[34px] bg-[#FF5200] absolute rounded-[10px] top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2">12 сентября</div>
          </div>
          <div className="border border-[#FF5200] pr-0 pl-[15px] sm:px-[32px] pt-[50px] lg:pt-[68px] pb-[10px] rounded-[20px] relative">
            {
              schedule2.map((item, index) => (
                <div className="flex items-center gap-[17px] sm:gap-[28px] mb-[20px] text-[14px] sm:text-[13px] lg:text-[17px]" key={index}>
                  <span className="">{item.time}</span>
                  <span className="whitespace-pre-line">{item.title}</span>
                </div>
              ))
            }
            <div className="text-[14px] sm:text-[24px] font-[700] font-actay leading-[100%] py-[10px] px-[34px] bg-[#FF5200] absolute rounded-[10px] top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2">13 сентября</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section5