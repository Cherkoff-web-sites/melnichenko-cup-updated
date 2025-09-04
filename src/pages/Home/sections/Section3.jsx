
const Section3 = () => {
  return (
    <>
      <div className="mt-[80px] sm:mt-[130px]">
        <div className="text-[24px] sm:text-[48px] font-[700] font-actay text-center mb-[30px] uppercase">Правила турнира</div>

        <div className="border-2 border-[#FF5200] rounded-[15px] mt-[20px]">
          {/* Первая строка - две колонки */}
          <div className="flex justify-between items-center pt-[72px] mb-[25px]">
            <div className="w-1/2 text-center">
              <div className="font-actay text-[24px] md:text-[64px] font-[700] leading-[100%] uppercase italic">4 + 1</div>
              <div className="font-actay text-[14px] md:text-[18px] font-[400] leading-[100%] uppercase">Полевых игрока</div>
            </div>
            <div className="w-1/2 text-center">
              <div className="font-actay text-[24px] md:text-[64px] font-[700] leading-[100%] uppercase italic">7МИН</div>
              <div className="font-actay text-[14px] md:text-[18px] font-[400] leading-[100%] uppercase">Время тайма</div>
          </div>
        </div>
        
          {/* Вторая строка - SVG круг с линией */}
          <div className="relative flex justify-center">
            <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="75" cy="75" r="73.5" stroke="#FF5200" strokeWidth="3"/>
              <circle cx="75.5" cy="75.5" r="7.5" fill="#FF5200"/>
            </svg>
            <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-[#FF5200] transform -translate-y-1/2"></div>
            </div>

          {/* Третья строка - две колонки */}
          <div className="flex justify-between items-center">
            <div className="w-1/2 text-center">
              <div className="font-actay text-[16px] md:text-[28px] font-[700] leading-[40px] uppercase italic">Сотрудники предприятий</div>
              <div className="font-actay text-[12px] md:text-[16px] font-[400] leading-[100%] uppercase">Категория участников</div>
            </div>
            <div className="w-1/2 text-center">
              <div className="font-actay text-[24px] md:text-[64px] font-[700] leading-[100%] uppercase italic">5X5</div>
              <div className="font-actay text-[14px] md:text-[18px] font-[400] leading-[100%] uppercase">Формат игры</div>
            </div>
          </div>

          {/* Четвертая строка - SVG футбольное поле */}
          <div className="flex justify-center relative bottom-[-2px]">
            <svg width="484" height="164" viewBox="0 0 484 164" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M177 43.0001V43.0001C204.449 -10.2223 280.551 -10.2223 308 43.0001V43.0001" stroke="#FF5200" stroke-width="3"/>
              <path d="M20 43H464C474.217 43 482.5 51.2827 482.5 61.5V162H1.5V61.5C1.5 51.2827 9.78273 43 20 43Z" stroke="#FF5200" stroke-width="3"/>
              <path d="M141 105H342C352.217 105 360.5 113.283 360.5 123.5V162H122.5V123.5C122.5 113.283 130.783 105 141 105Z" stroke="#FF5200" stroke-width="3"/>
            </svg>
            </div>
            
          {/* опустить ворота 
          убрать лишние отступы */}
        </div>
      </div>
    </>
  )
}

export default Section3