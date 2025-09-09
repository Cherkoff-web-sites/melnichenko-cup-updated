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

  // Данные для плей-оффа
  const playoffData = [
    {
      rounds: [
        {
          className: "",
          teams: [
            { name: "", marginClass: "mb-[2px]" },
            { name: "", marginClass: "mb-[10px] md:mb-[30px]" },
            { name: "", marginClass: "mb-[2px]" },
            { name: "", marginClass: "" }
          ]
        },
        {
          className: "space-y-[2px] flex flex-col justify-center items-center",
          teams: [
            { name: "", marginClass: "" },
            { name: "", marginClass: "" }
          ]
        },
        {
          className: "space-y-[2px] flex flex-col justify-end items-end",
          teams: [
            { name: "", marginClass: "relative bottom-[-4px] md:bottom-[-14px]" }
          ]
        }
      ]
    },
    {
      rounds: [
        {
          className: "",
          teams: [
            { name: "", marginClass: "mb-[2px]" },
            { name: "", marginClass: "mb-[10px] md:mb-[30px]" },
            { name: "", marginClass: "mb-[2px]" },
            { name: "", marginClass: "" }
          ]
        },
        {
          className: "space-y-[2px] flex flex-col justify-center items-center",
          teams: [
            { name: "", marginClass: "" },
            { name: "", marginClass: "" }
          ]
        },
        {
          className: "space-y-[2px] flex flex-col justify-start items-end",
          teams: [
            { name: "", marginClass: "relative top-[-4px] md:top-[-14px]" }
          ]
        }
      ]
    }
  ]
  return (
    <>
      <div className="mt-[40px] sm:mt-[73px] mb-[90px] sm:mb-[130px] relative z-[2]">
        <div className="text-[24px] sm:text-[48px] font-[700] font-actay uppercase text-center mb-[30px]">Команды участников</div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] md:gap-[20px]">
          <TeamInfoType1 
            city="г. Ковдор"
            team="Ковдорский ГОК"
          />
          <TeamInfoType2 
            city="г. Березники"
            team="ЕВРОХИМ-УКК"
            mobileImg={decor1}
          />
          <TeamInfoType2 
            city="г. Новосибирск"
            team="СГК-НОВОСИБИРСК"
            img={decor1}
          />
          <TeamInfoType2 
            city="г. Кемерово"
            team="СГК-КУЗБАСС"
          />
          <TeamInfoType2 
            city="г. Алматы"
            team="ЕВРОХИМ-КАЗАХСТАН"
          />
          <TeamInfoType2 
            city="г. Невинномысск"
            team="НЕВИННОМЫССКИЙ АЗОТ"
            img={decor2}
            checkImg={true}
            customFontSize={true}
          />
          <TeamInfoType2 
            city="г. Новомосковск"
            team="НАК АЗОТ"
          />
          <TeamInfoType1 
            city="г. Красноярск"
            team="СУЭК-КРАСНОЯРСК"
            mobileImg={decor3}
            mobileCheckImg={true}
          />
          <TeamInfoType2 
            city="г. Ленинск-Кузнецк"
            team="СУЭК-КУЗБАСС"
            img={decor3}
            checkImg={true}
            mobileImg={decor2}
            mobileCheckImg={true}
          />
          <TeamInfoType1 
            city="г. Москва"
            team="АИММ И ЦТИП"
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
          <div className="absolute left-[calc(29.43%*2+5.72%)] md:left-[calc(31%+3.45%+31%-3.88%)] top-1/2 transform -translate-y-1/2 z-[-1] w-[5.72%] md:w-[calc(3.88%*3+3.45%)] hiddens md:block">
            <svg className="hidden md:block w-[100%] height-auto" width="174" height="368" viewBox="0 0 174 368" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 367H70C75.5228 367 80 362.523 80 357V11C80 5.47716 75.5228 1 70 1H0" stroke="#FF5200"/>
              <path d="M80 185H139.546H174" stroke="#FF5200"/>
            </svg>
            <svg className="block md:hidden w-[100%] height-auto" width="20" height="223" viewBox="0 0 20 223" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 222H1.11111C6.63396 222 11.1111 217.523 11.1111 212V11C11.1111 5.47715 6.63396 1 1.11111 1H0" stroke="#FF5200"/>
              <path d="M11.1113 111.544H16.7421H20.0002" stroke="#FF5200"/>
            </svg>
          </div>

          {/* Турнирная сетка */}
          {playoffData.map((row, rowIndex) => (
            <div key={rowIndex} className={`grid grid-cols-12 gap-[20px] md:gap-[40px] mx-auto relative ${rowIndex === 0 ? 'mb-[10px] md:mb-[30px]' : ''}`}>
              {/* SVG элемент между колонками */}
              <div className="absolute left-[29.43%] md:left-[23.28%] top-1/2 transform -translate-y-1/2 z-[-1] w-[5.72%] md:w-[calc(3.88%*3+3.45%)] hiddens md:block">
                <svg className="hidden md:block w-[100%] height-auto" width="174" height="186" viewBox="0 0 174 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 185H70C75.5228 185 80 180.523 80 175V11C80 5.47715 75.5228 1 70 1H0" stroke="#FF5200"/>
                  <path d="M80 94H139.546H174" stroke="#FF5200"/>
                </svg>
                <svg className="block md:hidden w-[100%] height-auto" width="20" height="115" viewBox="0 0 20 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 114H1.11111C6.63396 114 11.1111 109.523 11.1111 104V11C11.1111 5.47715 6.63396 1 1.11111 1H0" stroke="#FF5200"/>
                  <path d="M11.1113 58H16.7421H20.0002" stroke="#FF5200"/>
                </svg>
              </div>
              
              {row.rounds.map((round, roundIndex) => (
                <div key={roundIndex} className={`col-span-4 ${round.className}`}>
                  {round.teams.map((team, teamIndex) => (
                    <div key={teamIndex} className={`bg-[#4D6580] rounded-[10px] px-[5px] md:px-[15px] py-[2px] w-[100%] md:w-[75%] h-[50px] md:h-[75px] flex justify-center items-center ${team.marginClass}`}>
                      <div className="text-[12px] sm:text-[14px] font-[400] text-white text-center break-all">{team.name}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Section1

