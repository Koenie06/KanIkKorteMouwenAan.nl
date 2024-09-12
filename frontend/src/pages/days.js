import React from 'react';
import * as TiIcons from 'react-icons/ti'

function Days({ data }) {

    const days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
    const day = days[new Date().getDay()];
    console.log(days)
    console.log(day)
    console.log(new Date().getDate())

    function nextDate(dayIndex) {
      var today = new Date();
      today.setDate(today.getDate() + (dayIndex - 1 - today.getDay() + 7) % 7 + 1);
      return today;
    }

    console.log(data.forecast.forecast.forecastday)

    const conditionList = {
      "sunny": <TiIcons.TiWeatherSunny class="w-[32px] h-[32px]" />,
      "clear ": <TiIcons.TiWeatherCloudy class="w-[32px] h-[32px]" />,
      "partlycloudy": <TiIcons.TiWeatherPartlySunny class="w-[32px] h-[32px]" />,
      "cloudy": <TiIcons.TiWeatherCloudy class="w-[32px] h-[32px]" />,
      "overcast": <TiIcons.TiWeatherCloudy class="w-[32px] h-[32px]" />,
      "mist": <TiIcons.TiWeatherWindyCloudy class="w-[32px] h-[32px]" />,
      "patchyrainpossible": <TiIcons.TiWeatherShower class="w-[32px] h-[32px]" />,
      "patchysnowpossible": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "patchysleetpossible": <TiIcons.TiWeatherShower class="w-[32px] h-[32px]" />,
      "patchyfreezingdrizzlepossible": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "thunderyoutbreakspossible": <TiIcons.TiWeatherStormy class="w-[32px] h-[32px]" />,
      "blowingsnow": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "blizzard": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "fog": <TiIcons.TiWeatherWindyCloudy class="w-[32px] h-[32px]" />,
      "freezingfog": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "patchylightdrizzle": <TiIcons.TiWeatherDownpour class="w-[32px] h-[32px]" />,
      "lightdrizzle": <TiIcons.TiWeatherDownpour class="w-[32px] h-[32px]" />,
      "freezingdrizzle": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "heavyfreezingdrizzle": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "patchylightrain": <TiIcons.TiWeatherShower class="w-[32px] h-[32px]" />,
      "patchyrainnearby": <TiIcons.TiWeatherShower class="w-[32px] h-[32px]" />,
      "lightrain": <TiIcons.TiWeatherShower class="w-[32px] h-[32px]" />,
      "moderaterainattimes": <TiIcons.TiWeatherShower class="w-[32px] h-[32px]" />,
      "moderaterain": <TiIcons.TiWeatherShower class="w-[32px] h-[32px]" />,
      "heavyrainattimes": <TiIcons.TiWeatherDownpour class="w-[32px] h-[32px]" />,
      "heavyrain": <TiIcons.TiWeatherDownpour class="w-[32px] h-[32px]" />,
      "lightfreezing rain": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "moderateorheavyfreezingrain": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "lightsleet": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "moderateorheavysleet": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "patchylightsnow": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "lightsnow": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "patchymoderatesnow": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "moderatesnow": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "patchyheavysnow": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "heavysnow": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "icepellets": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "lightrainshower": <TiIcons.TiWeatherShower class="w-[32px] h-[32px]" />,
      "moderateorheavyrainshower": <TiIcons.TiWeatherDownpour class="w-[32px] h-[32px]" />,
      "torrentialrainshower": <TiIcons.TiWeatherDownpour class="w-[32px] h-[32px]" />,
      "lightsleetshowers": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "moderateorheavysleetshowers": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "lightsnowshowers": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "moderateorheavysnowshowers": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "lightshowersoficepellets": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "moderateorheavyshowersoficepellets": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "patchylightrainwiththunder": <TiIcons.TiWeatherStormy class="w-[32px] h-[32px]" />,
      "moderateorheavyrainwiththunder": <TiIcons.TiWeatherStormy class="w-[32px] h-[32px]" />,
      "patchylightsnowwiththunder": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />,
      "moderateorheavysnowwiththunder": <TiIcons.TiWeatherSnow class="w-[32px] h-[32px]" />, 
    };

    // day === "Dinsdag" ? data.forecast.forecast.forecastday[0].day.condition.text.toString().toLowerCase().replace(/\s+/g,'') : (new Date().getDate() - nextDate(2).getDate()) > 0 ? data.history.forecast.forecastday[1].day.condition.text.toString().toLowerCase().replace(/\s+/g,'') : data.forecast.forecast.forecastday[nextDate(2).getDate() - new Date().getDate()].day.condition.text.toString().toLowerCase().replace(/\s+/g,'')

    return (
        <>
        <div class="mt-[12px]">
          <div class="mb-[14px]">
            <details class="pointer-events-none">
              <summary class="hover:cursor-pointer">
                <div class={`${day === "Maandag" ? "font-sofiaPro" : ""} inline-block align-middle pl-[13px] text-[1.5rem]`}>Maandag</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[day === "Maandag" ? data.forecast.forecast.forecastday[0].day.condition.text.toString().toLowerCase().replace(/\s+/g,'') : data.history.forecast.forecastday[0].day.condition.text.toString().toLowerCase().replace(/\s+/g,'')]}
                </div>
                <br></br>
                <div class="inline-block align-middle text-[1.2rem] pl-[30px]">{day === "Maandag" ? data.forecast.forecast.forecastday[0].day.mintemp_c + "° / " + data.forecast.forecast.forecastday[0].day.maxtemp_c + "° - " + data.forecast.forecast.forecastday[0].day.daily_chance_of_rain + "%" : data.history.forecast.forecastday[0].day.mintemp_c + "° / " + data.history.forecast.forecastday[0].day.maxtemp_c + "° - " + data.history.forecast.forecastday[0].day.daily_chance_of_rain + "%"}</div>
              </summary>
            </details>
          </div>
          <div class="mb-[14px]">
            <details class="pointer-events-none">
              <summary class="hover:cursor-pointer">
                <div class={`${day === "Dinsdag" ? "font-sofiaPro" : ""} inline-block align-middle pl-[13px] text-[1.5rem]`}>Dinsdag</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[day === "Dinsdag" ? data.forecast.forecast.forecastday[0].day.condition.text.toString().toLowerCase().replace(/\s+/g,'') : (new Date().getDate() - nextDate(2).getDate()) > 0 ? data.history.forecast.forecastday[1].day.condition.text.toString().toLowerCase().replace(/\s+/g,'') : data.forecast.forecast.forecastday[nextDate(2).getDate() - new Date().getDate()].day.condition.text.toString().toLowerCase().replace(/\s+/g,'')]}
                </div>
                <br></br>
                <div class="inline-block align-middle text-[1.2rem] pl-[30px]">{day === "Dinsdag" ? data.forecast.forecast.forecastday[0].day.mintemp_c + "° / " + data.forecast.forecast.forecastday[0].day.maxtemp_c + "° - " + data.forecast.forecast.forecastday[0].day.daily_chance_of_rain + "%" : (new Date().getDate() - nextDate(2).getDate()) > 0 ? data.history.forecast.forecastday[1].day.mintemp_c + "° / " + data.history.forecast.forecastday[1].day.maxtemp_c + "° - " + data.history.forecast.forecastday[1].day.daily_chance_of_rain + "%" : data.forecast.forecast.forecastday[nextDate(2).getDate() - new Date().getDate()].day.mintemp_c + "° / " + data.forecast.forecast.forecastday[nextDate(2).getDate() - new Date().getDate()].day.maxtemp_c + "° - " + data.forecast.forecast.forecastday[nextDate(2).getDate() - new Date().getDate()].day.daily_chance_of_rain + "%"}</div>
              </summary>

            </details>
          </div>
          <div class="mb-[14px]">
            <details class="pointer-events-none">
              <summary class="hover:cursor-pointer">
                <div class={`${day === "Woensdag" ? "font-sofiaPro" : ""} inline-block align-middle pl-[13px] text-[1.5rem]`}>Woensdag</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[day === "Woensdag" ? data.forecast.forecast.forecastday[0].day.condition.text.toString().toLowerCase().replace(/\s+/g,'') : ((new Date().getDate() - nextDate(3).getDate()) > 0) ? data.history.forecast.forecastday[2].day.condition.text.toString().toLowerCase().replace(/\s+/g,'') : data.forecast.forecast.forecastday[nextDate(3).getDate() - new Date().getDate()].day.condition.text.toString().toLowerCase().replace(/\s+/g,'')]}
                </div>
                <br></br>
                <div class="inline-block align-middle text-[1.2rem] pl-[30px]">{day === "Woensdag" ? data.forecast.forecast.forecastday[0].day.mintemp_c + "° / " + data.forecast.forecast.forecastday[0].day.maxtemp_c + "° - " + data.forecast.forecast.forecastday[0].day.daily_chance_of_rain + "%" : (new Date().getDate() - nextDate(3).getDate()) > 0 ? data.history.forecast.forecastday[2].day.mintemp_c + "° / " + data.history.forecast.forecastday[2].day.maxtemp_c + "° - " + data.history.forecast.forecastday[2].day.daily_chance_of_rain + "%" : data.forecast.forecast.forecastday[nextDate(3).getDate() - new Date().getDate()].day.mintemp_c + "° / " + data.forecast.forecast.forecastday[nextDate(3).getDate() - new Date().getDate()].day.maxtemp_c + "° - " + data.forecast.forecast.forecastday[nextDate(3).getDate() - new Date().getDate()].day.daily_chance_of_rain + "%"}</div>
              </summary>
            </details>
          </div>
          <div class="mb-[14px]">
            <details class="pointer-events-none">
              <summary class="hover:cursor-pointer">
                <div class={`${day === "Donderdag" ? "font-sofiaPro" : ""} inline-block align-middle pl-[13px] text-[1.5rem]`}>Donderdag</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[day === "Donderdag" ? data.forecast.forecast.forecastday[0].day.condition.text.toString().toLowerCase().replace(/\s+/g,'') : (new Date().getDate() - nextDate(4).getDate()) > 0 ? data.history.forecast.forecastday[3].day.condition.text.toString().toLowerCase().replace(/\s+/g,'') : data.forecast.forecast.forecastday[nextDate(4).getDate() - new Date().getDate()].day.condition.text.toString().toLowerCase().replace(/\s+/g,'')]}
                </div>
                <br></br>
                <div class="inline-block align-middle text-[1.2rem] pl-[30px]">{day === "Donderdag" ? data.forecast.forecast.forecastday[0].day.mintemp_c + "° / " + data.forecast.forecast.forecastday[0].day.maxtemp_c + "° - " + data.forecast.forecast.forecastday[0].day.daily_chance_of_rain + "%" : (new Date().getDate() - nextDate(4).getDate()) > 0 ? data.history.forecast.forecastday[3].day.mintemp_c + "° / " + data.history.forecast.forecastday[3].day.maxtemp_c + "° - " + data.history.forecast.forecastday[3].day.daily_chance_of_rain + "%" : data.forecast.forecast.forecastday[nextDate(4).getDate() - new Date().getDate()].day.mintemp_c + "° / " + data.forecast.forecast.forecastday[nextDate(4).getDate() - new Date().getDate()].day.maxtemp_c + "° - " + data.forecast.forecast.forecastday[nextDate(4).getDate() - new Date().getDate()].day.daily_chance_of_rain + "%"}</div>
              </summary>
            </details>
          </div>
          <div class="mb-[14px]">
            <details class="pointer-events-none">
              <summary class="hover:cursor-pointer">
                <div class={`${day === "Vrijdag" ? "font-sofiaPro" : ""} inline-block align-middle pl-[13px] text-[1.5rem]`}>Vrijdag</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[day === "Vrijdag" ? data.forecast.forecast.forecastday[0].day.condition.text.toString().toLowerCase().replace(/\s+/g,'') : (new Date().getDate() - nextDate(5).getDate()) > 0 ? data.history.forecast.forecastday[4].day.condition.text.toString().toLowerCase().replace(/\s+/g,'') : data.forecast.forecast.forecastday[nextDate(5).getDate() - new Date().getDate()].day.condition.text.toString().toLowerCase().replace(/\s+/g,'')]}
                </div>
                <br></br>
                <div class="inline-block align-middle text-[1.2rem] pl-[30px]">{day === "Vrijdag" ? data.forecast.forecast.forecastday[0].day.mintemp_c + "° / " + data.forecast.forecast.forecastday[0].day.maxtemp_c + "° - " + data.forecast.forecast.forecastday[0].day.daily_chance_of_rain + "%" : (new Date().getDate() - nextDate(5).getDate()) > 0 ? data.history.forecast.forecastday[4].day.mintemp_c + "° / " + data.history.forecast.forecastday[4].day.maxtemp_c + "° - " + data.history.forecast.forecastday[4].day.daily_chance_of_rain + "%" : data.forecast.forecast.forecastday[nextDate(5).getDate() - new Date().getDate()].day.mintemp_c + "° / " + data.forecast.forecast.forecastday[nextDate(5).getDate() - new Date().getDate()].day.maxtemp_c + "° - " + data.forecast.forecast.forecastday[nextDate(5).getDate() - new Date().getDate()].day.daily_chance_of_rain + "%"}</div>
              </summary>
            </details>
          </div>
          <div class="mb-[14px]">
            <details class="pointer-events-none">
              <summary class="hover:cursor-pointer">
                <div class={`${day === "Zaterdag" ? "font-sofiaPro" : ""} inline-block align-middle pl-[13px] text-[1.5rem]`}>Zaterdag</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[day === "Zaterdag" ? data.forecast.forecast.forecastday[0].day.condition.text.toString().toLowerCase().replace(/\s+/g,'') : (new Date().getDate() - nextDate(6).getDate()) > 0 ? data.history.forecast.forecastday[5].day.condition.text.toString().toLowerCase().replace(/\s+/g,'') : data.forecast.forecast.forecastday[nextDate(6).getDate() - new Date().getDate()].day.condition.text.toString().toLowerCase().replace(/\s+/g,'')]}
                </div>
                <br></br>
                <div class="inline-block align-middle text-[1.2rem] pl-[30px]">{day === "Zaterdag" ? data.forecast.forecast.forecastday[0].day.mintemp_c + "° / " + data.forecast.forecast.forecastday[0].day.maxtemp_c + "° - " + data.forecast.forecast.forecastday[0].day.daily_chance_of_rain + "%" : (new Date().getDate() - nextDate(6).getDate()) > 0 ? data.history.forecast.forecastday[5].day.mintemp_c + "° / " + data.history.forecast.forecastday[5].day.maxtemp_c + "° - " + data.history.forecast.forecastday[5].day.daily_chance_of_rain + "%" : data.forecast.forecast.forecastday[nextDate(6).getDate() - new Date().getDate()].day.mintemp_c + "° / " + data.forecast.forecast.forecastday[nextDate(6).getDate() - new Date().getDate()].day.maxtemp_c + "° - " + data.forecast.forecast.forecastday[nextDate(6).getDate() - new Date().getDate()].day.daily_chance_of_rain + "%"}</div>
              </summary>
            </details>
          </div>
          <div class="mb-[14px]">
            <details class="pointer-events-none">
              <summary class="hover:cursor-pointer">
                <div class={`${day === "Zondag" ? "font-sofiaPro" : ""} inline-block align-middle pl-[13px] text-[1.5rem]`}>Zondag</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[day === "Zondag" ? data.forecast.forecast.forecastday[0].day.condition.text.toString().toLowerCase().replace(/\s+/g,'') : (new Date().getDate() - nextDate(0).getDate()) > 0 ? data.history.forecast.forecastday[6].day.condition.text.toString().toLowerCase().replace(/\s+/g,'') : data.forecast.forecast.forecastday[nextDate(0).getDate() - new Date().getDate()].day.condition.text.toString().toLowerCase().replace(/\s+/g,'')]}
                </div>
                <br></br>
                <div class="inline-block align-middle text-[1.2rem] pl-[30px]">{day === "Zondag" ? data.forecast.forecast.forecastday[0].day.mintemp_c + "° / " + data.forecast.forecast.forecastday[0].day.maxtemp_c + "° - " + data.forecast.forecast.forecastday[0].day.daily_chance_of_rain + "%" : (new Date().getDate() - nextDate(0).getDate()) > 0 ? data.history.forecast.forecastday[6].day.mintemp_c + "° / " + data.history.forecast.forecastday[6].day.maxtemp_c + "° - " + data.history.forecast.forecastday[6].day.daily_chance_of_rain + "%" : data.forecast.forecast.forecastday[nextDate(0).getDate() - new Date().getDate()].day.mintemp_c + "° / " + data.forecast.forecast.forecastday[nextDate(0).getDate() - new Date().getDate()].day.maxtemp_c + "° - " + data.forecast.forecast.forecastday[nextDate(0).getDate() - new Date().getDate()].day.daily_chance_of_rain + "%"}</div>
              </summary>
            </details>
          </div>
        </div>
        </>
    );
};

export default Days;