
const Section3 = () => {
  return (
    <>
      <div className="mt-[80px] sm:mt-[130px]">
        <div className="text-[24px] sm:text-[48px] font-[700] font-actay text-center mb-[30px] uppercase">Правила турнира</div>

        <div className="border-2 border-[#FF5200] rounded-[15px] mt-[20px]">
          {/* Первая строка - две колонки */}
          <div className="flex justify-between items-center pt-[20px] md:pt-[72px] mb-[25px]">
            <div className="w-1/2 text-center">
              <div className="font-actay text-[22px] md:text-[64px] font-[700] leading-[100%] uppercase italic">4 + 1</div>
              <div className="font-actay text-[12px] md:text-[18px] font-[400] leading-[100%] uppercase">Полевых игрока</div>
            </div>
            <div className="w-1/2 text-center">
              <div className="font-actay text-[22px] md:text-[64px] font-[700] leading-[100%] uppercase italic">7МИН</div>
              <div className="font-actay text-[12px] md:text-[18px] font-[400] leading-[100%] uppercase">Время тайма</div>
          </div>
        </div>
        
          {/* Вторая строка - SVG круг с линией */}
          <div className="relative flex justify-center">
            <svg className="hidden md:block" width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="75" cy="75" r="73.5" stroke="#FF5200" strokeWidth="3"/>
              <circle cx="75.5" cy="75.5" r="7.5" fill="#FF5200"/>
            </svg>
            <svg className="block md:hidden" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24.6601" cy="24.7187" r="22.5956" stroke="#FF5200" stroke-width="3"/>
              <circle cx="24.8217" cy="25.8803" r="2.40956" fill="#FF5200"/>
            </svg>

            <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-[#FF5200] transform -translate-y-1/2"></div>
            </div>

          {/* Третья строка - две колонки */}
          <div className="flex justify-between items-center">
            <div className="w-[60%] md:w-1/2 text-center">
              <div className="font-actay text-[12px] md:text-[28px] font-[700] leading-[16px] md:leading-[40px] uppercase italic">Сотрудники предприятий</div>
              <div className="font-actay text-[12px] md:text-[16px] font-[400] leading-[100%] uppercase">Категория участников</div>
            </div>
            <div className="w-[40%] md:w-1/2 text-center">
              <div className="font-actay text-[22px] md:text-[64px] font-[700] leading-[100%] uppercase italic">5X5</div>
              <div className="font-actay text-[12px] md:text-[18px] font-[400] leading-[100%] uppercase">Формат игры</div>
            </div>
          </div>

          {/* Четвертая строка - SVG футбольное поле */}
          <div className="flex justify-center relative bottom-[-2px]">
            <svg className="hidden md:block" width="484" height="164" viewBox="0 0 484 164" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M177 43.0001V43.0001C204.449 -10.2223 280.551 -10.2223 308 43.0001V43.0001" stroke="#FF5200" stroke-width="3"/>
              <path d="M20 43H464C474.217 43 482.5 51.2827 482.5 61.5V162H1.5V61.5C1.5 51.2827 9.78273 43 20 43Z" stroke="#FF5200" stroke-width="3"/>
              <path d="M141 105H342C352.217 105 360.5 113.283 360.5 123.5V162H122.5V123.5C122.5 113.283 130.783 105 141 105Z" stroke="#FF5200" stroke-width="3"/>
            </svg>

            <svg className="block md:hidden" width="155" height="53" viewBox="0 0 155 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M56 15V15C65.0911 -2.33652 89.9089 -2.33652 99 15V15" stroke="#FF5200" stroke-width="3"/>
              <path d="M20 15.5H135C145.217 15.5 153.5 23.7827 153.5 34V51.5H1.5V34C1.5 23.7827 9.78273 15.5 20 15.5Z" stroke="#FF5200" stroke-width="3"/>
              <path d="M58 35.5H97C106.16 35.5 113.675 42.5372 114.436 51.5H40.5645C41.3253 42.5372 48.8403 35.5 58 35.5Z" stroke="#FF5200" stroke-width="3"/>
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