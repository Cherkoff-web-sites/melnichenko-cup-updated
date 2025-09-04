import TeamInfoType1 from "../components/TeamInfoType1"
import TeamInfoType2 from "../components/TeamInfoType2"
import decor1 from "/images/team_decor_1.png"
import decor2 from "/images/team_decor_2.png"
import decor3 from "/images/team_decor_3.png"
import fox from "/images/fox.png"
import { Link } from "react-router-dom"

const Section1 = () => {
  // Данные для турнирной таблицы
  const tournamentData = [
    {
      groupName: "ГРУППА А",
      teams: [
        { position: "", team: "", wins: "", draws: "", losses: "", goalDiff: "", points: ""},
        { position: "", team: "", wins: "", draws: "", losses: "", goalDiff: "", points: ""},
        { position: "", team: "", wins: "", draws: "", losses: "", goalDiff: "", points: ""},
        { position: "", team: "", wins: "", draws: "", losses: "", goalDiff: "", points: ""},
        { position: "", team: "", wins: "", draws: "", losses: "", goalDiff: "", points: ""}
      ]
    },
    {
      groupName: "ГРУППА Б",
      teams: [
        { position: "", team: "", wins: "", draws: "", losses: "", goalDiff: "", points: ""},
        { position: "", team: "", wins: "", draws: "", losses: "", goalDiff: "", points: ""},
        { position: "", team: "", wins: "", draws: "", losses: "", goalDiff: "", points: ""},
        { position: "", team: "", wins: "", draws: "", losses: "", goalDiff: "", points: ""},
        { position: "", team: "", wins: "", draws: "", losses: "", goalDiff: "", points: ""}
      ]
    }
  ]

  // Данные для таблицы "Лучшие бомбардиры"
  const topScorers = [
    { player: "", team: "", goals: "" },
    { player: "", team: "", goals: "" },
    { player: "", team: "", goals: "" },
    { player: "", team: "", goals: "" },
    { player: "", team: "", goals: "" }
  ]
  return (
    <>
      <div className="mt-[40px] sm:mt-[73px] mb-[90px] sm:mb-[130px] relative z-[2]">
        <div className="text-[24px] sm:text-[48px] font-[700] font-actay uppercase text-center mb-[30px]">Команды участников</div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] md:gap-[20px]">
          <TeamInfoType1 
            title={"АО \"Ковдорский ГОК\""}
            team={"ГОРНЯК"}
          />
          <TeamInfoType2 
            title="Еврохим-УКК"
            team="ЕВРОХИМ-УКК"
            mobileImg={decor1}
          />
          <TeamInfoType2 
            title="АО СГК-Новосибирск"
            team="СГК-НОВОСИБИРСК"
            img={decor1}
          />
          <TeamInfoType2 
            title={`АО "Кузбассэнерго"`}
            team="СГК-КУЗБАСС"
          />
          <TeamInfoType2 
            title={`ТОО "ЕвроХим - Каратау"`}
            team="ЕВРОХИМ-КАЗАХСТАН"
          />
          <TeamInfoType2 
            title={`АО "Невинномысский Азот"`}
            team="НЕВИННОМЫССКИЙ АЗОТ"
            img={decor2}
            checkImg={true}
            mobileStyle={true}
            customFontSize={true}
          />
          <TeamInfoType2 
            title={`АО "НАК "Азот"`}
            team="АЗОТ"
          />
          <TeamInfoType1 
            title={`АО "СУЭК-Красноярск"`}
            team="СУЭК-КРАСНОЯРСК"
            desktopStyle={true}
            mobileImg={decor3}
            mobileCheckImg={true}
          />
          <TeamInfoType2 
            title={`АО "СУЭК-Кузбасс"`}
            team="СУЭК-КУЗБАСС"
            img={decor3}
            checkImg={true}
            mobileImg={decor2}
            mobileCheckImg={true}
          />
          <TeamInfoType1 
            title={"АИММ и ЦТИП"}
            team={"АИММ И ЦТИП"}
            desktopStyle={true}
          />
        </div>
        <Link to='/'>
          <img src={fox} alt="" className="absolute right-[-50px] md:right-[180px] bottom-[-200px] md:bottom-[-90px] hidden md:block w-[251px] h-[236px] z-[1]" />
        </Link>
      </div>

      {/* Секция "Статистика" */}
      <div className="mt-[80px] sm:mt-[130px] mb-[90px] sm:mb-[150px]">
        <div className="text-[24px] md:text-[48px] md:pt-[30px] font-[700] font-actay mb-[20px] md:mb-[30px] uppercase text-center">СТАТИСТИКА</div>
        
        {/* Турнирная таблица */}
        <div className="space-y-[2px] mb-[40px]">
          {/* Заголовок таблицы */}
          <div className="bg-[#4D6580] rounded-[10px] px-[10px] sm:px-[20px] h-[60px] flex items-center">
            <div className="grid grid-cols-12 gap-[10px] w-full">
              <div className="col-span-1 text-[12px] sm:text-[16px] md:text-[18px] font-[700] font-actay text-white text-center">№</div>
              <div className="col-span-6 text-[12px] sm:text-[16px] md:text-[18px] font-[700] font-actay text-white text-left">КЛУБ</div>
              <div className="col-span-1 text-[12px] sm:text-[16px] md:text-[18px] font-[700] font-actay text-white text-center">В</div>
              <div className="col-span-1 text-[12px] sm:text-[16px] md:text-[18px] font-[700] font-actay text-white text-center">Н</div>
              <div className="col-span-1 text-[12px] sm:text-[16px] md:text-[18px] font-[700] font-actay text-white text-center">П</div>
              <div className="col-span-1 text-[12px] sm:text-[16px] md:text-[18px] font-[700] font-actay text-white text-center">РМ</div>
              <div className="col-span-1 text-[12px] sm:text-[16px] md:text-[18px] font-[700] font-actay text-white text-center">О</div>
            </div>
          </div>
          
          {/* Группы */}
          {tournamentData.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-[2px]">
              {/* Заголовок группы */}
              <div className="bg-[#FF5200] rounded-[10px] px-[10px] sm:px-[20px] h-[60px] flex items-center">
                <div className="grid grid-cols-12 gap-[10px] w-full">
                  <div className="col-span-1"></div>
                  <div className="col-span-11 text-[12px] sm:text-[16px] md:text-[18px] font-[700] font-actay text-white">
                    {group.groupName}
                  </div>
                </div>
              </div>
              
              {/* Команды группы */}
              <div className="space-y-[2px]">
                {group.teams.map((team, teamIndex) => (
                  <div key={teamIndex} className="bg-[#4D6580] rounded-[10px] px-[10px] sm:px-[20px] h-[60px] flex items-center">
                    <div className="grid grid-cols-12 gap-[10px] w-full">
                      <div className="col-span-1 text-[11px] sm:text-[14px] md:text-[16px] font-[400] text-white text-center">{team.position}</div>
                      <div className="col-span-6 text-[11px] sm:text-[14px] md:text-[16px] font-[400] text-white text-left">{team.team}</div>
                      <div className="col-span-1 text-[11px] sm:text-[14px] md:text-[16px] font-[400] text-white text-center">{team.wins}</div>
                      <div className="col-span-1 text-[11px] sm:text-[14px] md:text-[16px] font-[400] text-white text-center">{team.draws}</div>
                      <div className="col-span-1 text-[11px] sm:text-[14px] md:text-[16px] font-[400] text-white text-center">{team.losses}</div>
                      <div className="col-span-1 text-[11px] sm:text-[14px] md:text-[16px] font-[400] text-white text-center">{team.goalDiff}</div>
                      <div className="col-span-1 text-[11px] sm:text-[14px] md:text-[16px] font-[700] text-white text-center">{team.points}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Секция "Лучшие бомбардиры" */}
        <div className="text-[14px] sm:text-[24px] font-[700] font-actay mb-[5px] uppercase">Лучшие бомбардиры</div>
        
        <div className="space-y-[2px]">
          {/* Заголовок */}
          <div className="bg-[#FF5200] rounded-[10px] px-[10px] sm:px-[20px] h-[60px] flex items-center justify-between">
            <div className="grid grid-cols-12 gap-[10px] w-full">
              <div className="col-span-5 lg:col-span-5 text-[12px] sm:text-[16px] md:text-[18px] font-[700] font-actay text-white text-left">ИГРОК</div>
              <div className="col-span-5 lg:col-span-5 text-[12px] sm:text-[16px] md:text-[18px] font-[700] font-actay text-white text-left">КОМАНДА</div>
              <div className="hidden lg:block lg:col-span-1"></div>
              <div className="col-span-2 lg:col-span-1 text-[12px] sm:text-[16px] md:text-[18px] font-[700] font-actay text-white text-center">ГОЛОВ</div>
            </div>
          </div>
          
          {/* Строки данных */}
          {topScorers.map((scorer, index) => (
            <div key={index} className="bg-[#4D6580] rounded-[10px] px-[10px] sm:px-[20px] h-[60px] flex items-center justify-between">
              <div className="grid grid-cols-12 gap-[10px] w-full">
                <div className="col-span-5 lg:col-span-5 text-[11px] sm:text-[14px] md:text-[16px] font-[400] text-white text-left">{scorer.player}</div>
                <div className="col-span-5 lg:col-span-5 text-[11px] sm:text-[14px] md:text-[16px] font-[400] text-white text-left">{scorer.team}</div>
                <div className="hidden lg:block lg:col-span-1"></div>
                <div className="col-span-2 lg:col-span-1 text-[11px] sm:text-[14px] md:text-[16px] font-[700] text-white text-center">{scorer.goals}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Секция "Плей-офф" */}
      <div className="mt-[80px] sm:mt-[130px] mb-[90px] sm:mb-[150px]">
        <div className="text-[24px] sm:text-[48px] font-[700] font-actay mb-[30px] uppercase text-center">ПЛЕЙ-ОФФ</div>
        
        <div className="relative">
          {/* SVG элемент между колонками */}
          <div className="absolute left-[calc(31%+3.45%+31%-3.88%)] top-1/2 transform -translate-y-1/2 z-0">
            <svg width="174" height="368" viewBox="0 0 174 368" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 367H70C75.5228 367 80 362.523 80 357V11C80 5.47716 75.5228 1 70 1H0" stroke="#FF5200"/>
              <path d="M80 185H139.546H174" stroke="#FF5200"/>
            </svg>
          </div>

          {/* Турнирная сетка */}
          {/* Первая строка */}
          <div className="grid grid-cols-12 gap-[20px] sm:gap-[40px] mx-auto mb-[10px] md:mb-[30px] relative">
            {/* SVG элемент между колонками */}
            <div className="absolute left-[23.28%] top-1/2 transform -translate-y-1/2 z-0">
              <svg width="174" height="186" viewBox="0 0 174 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 185H70C75.5228 185 80 180.523 80 175V11C80 5.47715 75.5228 1 70 1H0" stroke="#FF5200"/>
                <path d="M80 94H139.546H174" stroke="#FF5200"/>
              </svg>
            </div>
            
            {/* Первый раунд */}
            <div className="col-span-4">
              <div className="bg-[#4D6580] rounded-[10px] px-[5px] md:px-[15px] py-[10px] md:py-[27px] w-[100%] md:w-[75%] mb-[2px]">
                <div className="text-[12px] sm:text-[14px] font-[400] text-white text-center break-all">СГК-НОВОСИБИРСК</div>
              </div>
              <div className="bg-[#4D6580] rounded-[10px] px-[5px] md:px-[15px] py-[10px] md:py-[27px] w-[100%] md:w-[75%] mb-[10px] md:mb-[30px]">
                <div className="text-[12px] sm:text-[14px] font-[400] text-white text-center break-all">ЕВРОХИМ-УКК</div>
              </div>
              <div className="bg-[#4D6580] rounded-[10px] px-[5px] md:px-[15px] py-[10px] md:py-[27px] w-[100%] md:w-[75%] mb-[2px]">
                <div className="text-[12px] sm:text-[14px] font-[400] text-white text-center break-all">ГОРНЯК</div>
              </div>
              <div className="bg-[#4D6580] rounded-[10px] px-[5px] md:px-[15px] py-[10px] md:py-[27px] w-[100%] md:w-[75%]">
                <div className="text-[12px] sm:text-[14px] font-[400] text-white text-center break-all">СУЭК-КУЗБАСС</div>
              </div>
            </div>

            {/* Второй раунд */}
            <div className="col-span-4 space-y-[2px] flex flex-col justify-center items-center">
              <div className="bg-[#4D6580] rounded-[10px] px-[5px] md:px-[15px] py-[10px] md:py-[27px] text-center w-[100%] md:w-[75%]">
                <div className="text-[12px] sm:text-[14px] font-[400] text-white text-center break-all">СГК-НОВОСИБИРСК</div>
              </div>
              <div className="bg-[#4D6580] rounded-[10px] px-[5px] md:px-[15px] py-[10px] md:py-[27px] text-center w-[100%] md:w-[75%]">
                <div className="text-[12px] sm:text-[14px] font-[400] text-white text-center break-all">ГОРНЯК</div>
              </div>
            </div>

            {/* Третий раунд (финал) */}
            <div className="col-span-4 space-y-[2px] flex flex-col justify-end items-end">
              <div className="bg-[#4D6580] rounded-[10px] px-[5px] md:px-[15px] py-[10px] md:py-[27px] w-[100%] md:w-[75%] relative bottom-[-4px] md:bottom-[-14px]">
                <div className="text-[12px] sm:text-[14px] font-[400] text-white text-center break-all">СГК-НОВОСИБИРСК</div>
              </div>
            </div>
          </div>

          {/* Вторая строка */}
          <div className="grid grid-cols-12 gap-[20px] sm:gap-[40px] mx-auto relative">
            {/* SVG элемент между колонками */}
            <div className="absolute left-[23.28%] top-1/2 transform -translate-y-1/2 z-0">
              <svg width="174" height="186" viewBox="0 0 174 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 185H70C75.5228 185 80 180.523 80 175V11C80 5.47715 75.5228 1 70 1H0" stroke="#FF5200"/>
                <path d="M80 94H139.546H174" stroke="#FF5200"/>
              </svg>
            </div>
            
            {/* Первый раунд (продолжение) */}
            <div className="col-span-4">
              <div className="bg-[#4D6580] rounded-[10px] px-[5px] md:px-[15px] py-[10px] md:py-[27px] w-[100%] md:w-[75%] mb-[2px]">
                <div className="text-[12px] sm:text-[14px] font-[400] text-white text-center break-all">НЕВИННОМЫССКИЙ АЗОТ</div>
              </div>
              <div className="bg-[#4D6580] rounded-[10px] px-[5px] md:px-[15px] py-[10px] md:py-[27px] w-[100%] md:w-[75%] mb-[10px] md:mb-[30px]">
                <div className="text-[12px] sm:text-[14px] font-[400] text-white text-center break-all">ЕВРОХИМ-КАЗАХСТАН</div>
              </div>
              <div className="bg-[#4D6580] rounded-[10px] px-[5px] md:px-[15px] py-[10px] md:py-[27px] w-[100%] md:w-[75%] mb-[2px]">
                <div className="text-[12px] sm:text-[14px] font-[400] text-white text-center break-all">АЗОТ</div>
              </div>
              <div className="bg-[#4D6580] rounded-[10px] px-[5px] md:px-[15px] py-[10px] md:py-[27px] w-[100%] md:w-[75%]">
                <div className="text-[12px] sm:text-[14px] font-[400] text-white text-center break-all">СУЭК-КРАСНОЯРСК</div>
              </div>
            </div>

            {/* Второй раунд (продолжение) */}
            <div className="col-span-4 space-y-[2px] flex flex-col justify-center items-center">
              <div className="bg-[#4D6580] rounded-[10px] px-[5px] md:px-[15px] py-[10px] md:py-[27px] w-[100%] md:w-[75%]">
                <div className="text-[12px] sm:text-[14px] font-[400] text-white text-center break-all">ЕВРОХИМ-КАЗАХСТАН</div>
              </div>
              <div className="bg-[#4D6580] rounded-[10px] px-[5px] md:px-[15px] py-[10px] md:py-[27px] w-[100%] md:w-[75%]">
                <div className="text-[12px] sm:text-[14px] font-[400] text-white text-center break-all">СУЭК-КРАСНОЯРСК</div>
              </div>
            </div>

            {/* Третий раунд (финал продолжение) */}
            <div className="col-span-4 space-y-[2px] flex flex-col justify-start items-end">
              <div className="bg-[#4D6580] rounded-[10px] px-[5px] md:px-[15px] py-[10px] md:py-[27px] w-[100%] md:w-[75%] relative top-[-4px] md:top-[-14px]">
                <div className="text-[12px] sm:text-[14px] font-[400] text-white text-center break-all">ЕВРОХИМ-КАЗАХСТАН</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Section1

