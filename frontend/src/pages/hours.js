import React from 'react';
import * as TiIcons from 'react-icons/ti'

function Hours({ data }) {

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

  return (
    <>
        <div class="mt-[12px]">
        <div class="mb-[14px]">
            <details>
              <summary class="hover:cursor-pointer">
                <div class="inline-block align-middle pl-[13px] text-[1.5rem]">1:00</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[data.today.hour[1].condition.text]}
                </div>
                <div class="inline-block align-middle text-[1.4rem] pl-[5px]">-</div>
                <div class="inline-block align-middle text-[1.2rem] pl-[5.5px]">{Number.isInteger(data.today.hour[0].temp_c) ? data.today.hour[0].temp_c + ".0" : data.today.hour[0].temp_c}°C / {data.today.hour[0].chance_of_rain}%</div>
              </summary>
              <p class="text-center">Temperatuur: {data.today.hour[0].temp_c}°C</p>
              <p class="text-center">Regenkans: {data.today.hour[0].chance_of_rain}%</p>
              <p class="text-center">Wind: {data.today.hour[0].wind_kph} km/h</p>
            </details>
          </div>
          <div class="mb-[14px]">
            <details>
              <summary class="hover:cursor-pointer">
                <div class="inline-block align-middle pl-[13px] text-[1.5rem]">2:00</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[data.today.hour[2].condition.text]}
                </div>
                <div class="inline-block align-middle text-[1.4rem] pl-[5px]">-</div>
                <div class="inline-block align-middle text-[1.2rem] pl-[5.5px]">{Number.isInteger(data.today.hour[1].temp_c) ? data.today.hour[1].temp_c + ".0" : data.today.hour[1].temp_c}°C / {data.today.hour[1].chance_of_rain}%</div>
              </summary>
              <p class="text-center">Temperatuur: {data.today.hour[1].temp_c}°C</p>
              <p class="text-center">Regenkans: {data.today.hour[1].chance_of_rain}%</p>
              <p class="text-center">Wind: {data.today.hour[1].wind_kph} km/h</p>
            </details>
          </div>
          <div class="mb-[14px]">
            <details>
              <summary class="hover:cursor-pointer">
                <div class="inline-block align-middle pl-[13px] text-[1.5rem]">3:00</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[data.today.hour[3].condition.text]}
                </div>
                <div class="inline-block align-middle text-[1.4rem] pl-[5px]">-</div>
                <div class="inline-block align-middle text-[1.2rem] pl-[5.5px]">{Number.isInteger(data.today.hour[2].temp_c) ? data.today.hour[2].temp_c + ".0" : data.today.hour[2].temp_c}°C / {data.today.hour[2].chance_of_rain}%</div>
              </summary>
              <p class="text-center">Temperatuur: {data.today.hour[2].temp_c}°C</p>
              <p class="text-center">Regenkans: {data.today.hour[2].chance_of_rain}%</p>
              <p class="text-center">Wind: {data.today.hour[2].wind_kph} km/h</p>
            </details>
          </div>
          <div class="mb-[14px]">
            <details>
              <summary class="hover:cursor-pointer">
                <div class="inline-block align-middle pl-[13px] text-[1.5rem]">4:00</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[data.today.hour[4].condition.text]}
                </div>
                <div class="inline-block align-middle text-[1.4rem] pl-[5px]">-</div>
                <div class="inline-block align-middle text-[1.2rem] pl-[5.5px]">{Number.isInteger(data.today.hour[3].temp_c) ? data.today.hour[3].temp_c + ".0" : data.today.hour[3].temp_c}°C / {data.today.hour[3].chance_of_rain}%</div>
              </summary>
              <p class="text-center">Temperatuur: {data.today.hour[3].temp_c}°C</p>
              <p class="text-center">Regenkans: {data.today.hour[3].chance_of_rain}%</p>
              <p class="text-center">Wind: {data.today.hour[3].wind_kph} km/h</p>
            </details>
          </div>
          <div class="mb-[14px]">
            <details>
              <summary class="hover:cursor-pointer">
                <div class="inline-block align-middle pl-[13px] text-[1.5rem]">5:00</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[data.today.hour[5].condition.text]}
                </div>
                <div class="inline-block align-middle text-[1.4rem] pl-[5px]">-</div>
                <div class="inline-block align-middle text-[1.2rem] pl-[5.5px]">{Number.isInteger(data.today.hour[4].temp_c) ? data.today.hour[4].temp_c + ".0" : data.today.hour[4].temp_c}°C / {data.today.hour[4].chance_of_rain}%</div>
              </summary>
              <p class="text-center">Temperatuur: {data.today.hour[4].temp_c}°C</p>
              <p class="text-center">Regenkans: {data.today.hour[4].chance_of_rain}%</p>
              <p class="text-center">Wind: {data.today.hour[4].wind_kph} km/h</p>
            </details>
          </div>
          <div class="mb-[14px]">
            <details>
              <summary class="hover:cursor-pointer">
                <div class="inline-block align-middle pl-[13px] text-[1.5rem]">6:00</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[data.today.hour[6].condition.text]}
                </div>
                <div class="inline-block align-middle text-[1.4rem] pl-[5px]">-</div>
                <div class="inline-block align-middle text-[1.2rem] pl-[5.5px]">{Number.isInteger(data.today.hour[7].temp_c) ? data.today.hour[7].temp_c + ".0" : data.today.hour[7].temp_c}°C / {data.today.hour[7].chance_of_rain}%</div>
              </summary>
              <p class="text-center">Temperatuur: {data.today.hour[7].temp_c}°C</p>
              <p class="text-center">Regenkans: {data.today.hour[7].chance_of_rain}%</p>
              <p class="text-center">Wind: {data.today.hour[7].wind_kph} km/h</p>
            </details>
          </div>
          <div class="mb-[14px]">
            <details>
              <summary class="hover:cursor-pointer">
                <div class="inline-block align-middle pl-[13px] text-[1.5rem]">7:00</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[data.today.hour[7].condition.text]}
                </div>
                <div class="inline-block align-middle text-[1.4rem] pl-[5px]">-</div>
                <div class="inline-block align-middle text-[1.2rem] pl-[5.5px]">{Number.isInteger(data.today.hour[8].temp_c) ? data.today.hour[8].temp_c + ".0" : data.today.hour[8].temp_c}°C / {data.today.hour[8].chance_of_rain}%</div>
              </summary>
              <p class="text-center">Temperatuur: {data.today.hour[8].temp_c}°C</p>
              <p class="text-center">Regenkans: {data.today.hour[8].chance_of_rain}%</p>
              <p class="text-center">Wind: {data.today.hour[8].wind_kph} km/h</p>
            </details>
          </div>
          <div class="mb-[14px]">
            <details>
              <summary class="hover:cursor-pointer">
                <div class="inline-block align-middle pl-[13px] text-[1.5rem]">8:00</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[data.today.hour[8].condition.text]}
                </div>
                <div class="inline-block align-middle text-[1.4rem] pl-[5px]">-</div>
                <div class="inline-block align-middle text-[1.2rem] pl-[5.5px]">{Number.isInteger(data.today.hour[9].temp_c) ? data.today.hour[9].temp_c + ".0" : data.today.hour[9].temp_c}°C / {data.today.hour[9].chance_of_rain}%</div>
              </summary>
              <p class="text-center">Temperatuur: {data.today.hour[9].temp_c}°C</p>
              <p class="text-center">Regenkans: {data.today.hour[9].chance_of_rain}%</p>
              <p class="text-center">Wind: {data.today.hour[9].wind_kph} km/h</p>
            </details>
          </div>
          <div class="mb-[14px]">
            <details>
              <summary class="hover:cursor-pointer">
                <div class="inline-block align-middle pl-[13px] text-[1.5rem]">9:00</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[data.today.hour[9].condition.text]}
                </div>
                <div class="inline-block align-middle text-[1.4rem] pl-[5px]">-</div>
                <div class="inline-block align-middle text-[1.2rem] pl-[5.5px]">{Number.isInteger(data.today.hour[10].temp_c) ? data.today.hour[10].temp_c + ".0" : data.today.hour[10].temp_c}°C / {data.today.hour[10].chance_of_rain}%</div>
              </summary>
              <p class="text-center">Temperatuur: {data.today.hour[10].temp_c}°C</p>
              <p class="text-center">Regenkans: {data.today.hour[10].chance_of_rain}%</p>
              <p class="text-center">Wind: {data.today.hour[10].wind_kph} km/h</p>
            </details>
          </div>
          <div class="mb-[14px]">
            <details>
              <summary class="hover:cursor-pointer">
                <div class="inline-block align-middle text-[1.5rem]">10:00</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[data.today.hour[10].condition.text]}
                </div>
                <div class="inline-block align-middle text-[1.4rem] pl-[5px]">-</div>
                <div class="inline-block align-middle text-[1.2rem] pl-[5.5px]">{Number.isInteger(data.today.hour[11].temp_c) ? data.today.hour[11].temp_c + ".0" : data.today.hour[11].temp_c}°C / {data.today.hour[11].chance_of_rain}%</div>
              </summary>
              <p class="text-center">Temperatuur: {data.today.hour[11].temp_c}°C</p>
              <p class="text-center">Regenkans: {data.today.hour[11].chance_of_rain}%</p>
              <p class="text-center">Wind: {data.today.hour[11].wind_kph} km/h</p>
            </details>
          </div>
          <div class="mb-[14px]">
            <details>
              <summary class="hover:cursor-pointer">
                <div class="inline-block align-middle text-[1.5rem]">11:00</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[data.today.hour[11].condition.text]}
                </div>
                <div class="inline-block align-middle text-[1.4rem] pl-[5px]">-</div>
                <div class="inline-block align-middle text-[1.2rem] pl-[5.5px]">{Number.isInteger(data.today.hour[12].temp_c) ? data.today.hour[12].temp_c + ".0" : data.today.hour[12].temp_c}°C / {data.today.hour[12].chance_of_rain}%</div>
              </summary>
              <p class="text-center">Temperatuur: {data.today.hour[12].temp_c}°C</p>
              <p class="text-center">Regenkans: {data.today.hour[12].chance_of_rain}%</p>
              <p class="text-center">Wind: {data.today.hour[12].wind_kph} km/h</p>
            </details>
          </div>
          <div class="mb-[14px]">
            <details>
              <summary class="hover:cursor-pointer">
                <div class="inline-block align-middle text-[1.5rem]">12:00</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[data.today.hour[12].condition.text]}
                </div>
                <div class="inline-block align-middle text-[1.4rem] pl-[5px]">-</div>
                <div class="inline-block align-middle text-[1.2rem] pl-[5.5px]">{Number.isInteger(data.today.hour[13].temp_c) ? data.today.hour[13].temp_c + ".0" : data.today.hour[13].temp_c}°C / {data.today.hour[13].chance_of_rain}%</div>
              </summary>
              <p class="text-center">Temperatuur: {data.today.hour[13].temp_c}°C</p>
              <p class="text-center">Regenkans: {data.today.hour[13].chance_of_rain}%</p>
              <p class="text-center">Wind: {data.today.hour[13].wind_kph} km/h</p>
            </details>
          </div>
          <div class="mb-[14px]">
            <details>
              <summary class="hover:cursor-pointer">
                <div class="inline-block align-middle text-[1.5rem]">13:00</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[data.today.hour[13].condition.text]}
                </div>
                <div class="inline-block align-middle text-[1.4rem] pl-[5px]">-</div>
                <div class="inline-block align-middle text-[1.2rem] pl-[5.5px]">{Number.isInteger(data.today.hour[14].temp_c) ? data.today.hour[14].temp_c + ".0" : data.today.hour[14].temp_c}°C / {data.today.hour[14].chance_of_rain}%</div>
              </summary>
              <p class="text-center">Temperatuur: {data.today.hour[14].temp_c}°C</p>
              <p class="text-center">Regenkans: {data.today.hour[14].chance_of_rain}%</p>
              <p class="text-center">Wind: {data.today.hour[14].wind_kph} km/h</p>
            </details>
          </div>
          <div class="mb-[14px]">
            <details>
              <summary class="hover:cursor-pointer">
                <div class="inline-block align-middle text-[1.5rem]">14:00</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[data.today.hour[14].condition.text]}
                </div>
                <div class="inline-block align-middle text-[1.4rem] pl-[5px]">-</div>
                <div class="inline-block align-middle text-[1.2rem] pl-[5.5px]">{Number.isInteger(data.today.hour[15].temp_c) ? data.today.hour[15].temp_c + ".0" : data.today.hour[15].temp_c}°C / {data.today.hour[15].chance_of_rain}%</div>
              </summary>
              <p class="text-center">Temperatuur: {data.today.hour[15].temp_c}°C</p>
              <p class="text-center">Regenkans: {data.today.hour[15].chance_of_rain}%</p>
              <p class="text-center">Wind: {data.today.hour[15].wind_kph} km/h</p>
            </details>
          </div>
          <div class="mb-[14px]">
            <details>
              <summary class="hover:cursor-pointer">
                <div class="inline-block align-middle text-[1.5rem]">15:00</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[data.today.hour[15].condition.text]}
                </div>
                <div class="inline-block align-middle text-[1.4rem] pl-[5px]">-</div>
                <div class="inline-block align-middle text-[1.2rem] pl-[5.5px]">{Number.isInteger(data.today.hour[16].temp_c) ? data.today.hour[16].temp_c + ".0" : data.today.hour[16].temp_c}°C / {data.today.hour[16].chance_of_rain}%</div>
              </summary>
              <p class="text-center">Temperatuur: {data.today.hour[16].temp_c}°C</p>
              <p class="text-center">Regenkans: {data.today.hour[16].chance_of_rain}%</p>
              <p class="text-center">Wind: {data.today.hour[16].wind_kph} km/h</p>
            </details>
          </div>
          <div class="mb-[14px]">
            <details>
              <summary class="hover:cursor-pointer">
                <div class="inline-block align-middle text-[1.5rem]">16:00</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[data.today.hour[16].condition.text]}
                </div>
                <div class="inline-block align-middle text-[1.4rem] pl-[5px]">-</div>
                <div class="inline-block align-middle text-[1.2rem] pl-[5.5px]">{Number.isInteger(data.today.hour[17].temp_c) ? data.today.hour[17].temp_c + ".0" : data.today.hour[17].temp_c}°C / {data.today.hour[17].chance_of_rain}%</div>
              </summary>
              <p class="text-center">Temperatuur: {data.today.hour[17].temp_c}°C</p>
              <p class="text-center">Regenkans: {data.today.hour[17].chance_of_rain}%</p>
              <p class="text-center">Wind: {data.today.hour[17].wind_kph} km/h</p>
            </details>
          </div>
          <div class="mb-[14px]">
            <details>
              <summary class="hover:cursor-pointer">
                <div class="inline-block align-middle text-[1.5rem]">17:00</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[data.today.hour[17].condition.text]}
                </div>
                <div class="inline-block align-middle text-[1.4rem] pl-[5px]">-</div>
                <div class="inline-block align-middle text-[1.2rem] pl-[5.5px]">{Number.isInteger(data.today.hour[18].temp_c) ? data.today.hour[18].temp_c + ".0" : data.today.hour[18].temp_c}°C / {data.today.hour[18].chance_of_rain}%</div>
              </summary>
              <p class="text-center">Temperatuur: {data.today.hour[18].temp_c}°C</p>
              <p class="text-center">Regenkans: {data.today.hour[18].chance_of_rain}%</p>
              <p class="text-center">Wind: {data.today.hour[18].wind_kph} km/h</p>
            </details>
          </div>
          <div class="mb-[14px]">
            <details>
              <summary class="hover:cursor-pointer">
                <div class="inline-block align-middle text-[1.5rem]">18:00</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[data.today.hour[18].condition.text]}
                </div>
                <div class="inline-block align-middle text-[1.4rem] pl-[5px]">-</div>
                <div class="inline-block align-middle text-[1.2rem] pl-[5.5px]">{Number.isInteger(data.today.hour[19].temp_c) ? data.today.hour[19].temp_c + ".0" : data.today.hour[19].temp_c}°C / {data.today.hour[19].chance_of_rain}%</div>
              </summary>
              <p class="text-center">Temperatuur: {data.today.hour[19].temp_c}°C</p>
              <p class="text-center">Regenkans: {data.today.hour[19].chance_of_rain}%</p>
              <p class="text-center">Wind: {data.today.hour[19].wind_kph} km/h</p>
            </details>
          </div>
          <div class="mb-[14px]">
            <details>
              <summary class="hover:cursor-pointer">
                <div class="inline-block align-middle text-[1.5rem]">19:00</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[data.today.hour[19].condition.text]}
                </div>
                <div class="inline-block align-middle text-[1.4rem] pl-[5px]">-</div>
                <div class="inline-block align-middle text-[1.2rem] pl-[5.5px]">{Number.isInteger(data.today.hour[19].temp_c) ? data.today.hour[19].temp_c + ".0" : data.today.hour[19].temp_c}°C / {data.today.hour[19].chance_of_rain}%</div>
              </summary>
              <p class="text-center">Temperatuur: {data.today.hour[19].temp_c}°C</p>
              <p class="text-center">Regenkans: {data.today.hour[19].chance_of_rain}%</p>
              <p class="text-center">Wind: {data.today.hour[19].wind_kph} km/h</p>
            </details>
          </div>
          <div class="mb-[14px]">
            <details>
              <summary class="hover:cursor-pointer">
                <div class="inline-block align-middle text-[1.5rem]">20:00</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[data.today.hour[20].condition.text]}
                </div>
                <div class="inline-block align-middle text-[1.4rem] pl-[5px]">-</div>
                <div class="inline-block align-middle text-[1.2rem] pl-[5.5px]">{Number.isInteger(data.today.hour[20].temp_c) ? data.today.hour[20].temp_c + ".0" : data.today.hour[20].temp_c}°C / {data.today.hour[20].chance_of_rain}%</div>
              </summary>
              <p class="text-center">Temperatuur: {data.today.hour[20].temp_c}°C</p>
              <p class="text-center">Regenkans: {data.today.hour[20].chance_of_rain}%</p>
              <p class="text-center">Wind: {data.today.hour[20].wind_kph} km/h</p>
            </details>
          </div>
          <div class="mb-[14px]">
            <details>
              <summary class="hover:cursor-pointer">
                <div class="inline-block align-middle text-[1.5rem]">21:00</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[data.today.hour[21].condition.text]}
                </div>
                <div class="inline-block align-middle text-[1.4rem] pl-[5px]">-</div>
                <div class="inline-block align-middle text-[1.2rem] pl-[5.5px]">{Number.isInteger(data.today.hour[21].temp_c) ? data.today.hour[21].temp_c + ".0" : data.today.hour[21].temp_c}°C / {data.today.hour[21].chance_of_rain}%</div>
              </summary>
              <p class="text-center">Temperatuur: {data.today.hour[21].temp_c}°C</p>
              <p class="text-center">Regenkans: {data.today.hour[21].chance_of_rain}%</p>
              <p class="text-center">Wind: {data.today.hour[21].wind_kph} km/h</p>
            </details>
          </div>
          <div class="mb-[14px]">
            <details>
              <summary class="hover:cursor-pointer">
                <div class="inline-block align-middle text-[1.5rem]">22:00</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[data.today.hour[22].condition.text]}
                </div>
                <div class="inline-block align-middle text-[1.4rem] pl-[5px]">-</div>
                <div class="inline-block align-middle text-[1.2rem] pl-[5.5px]">{Number.isInteger(data.today.hour[22].temp_c) ? data.today.hour[22].temp_c + ".0" : data.today.hour[22].temp_c}°C / {data.today.hour[22].chance_of_rain}%</div>
              </summary>
              <p class="text-center">Temperatuur: {data.today.hour[22].temp_c}°C</p>
              <p class="text-center">Regenkans: {data.today.hour[22].chance_of_rain}%</p>
              <p class="text-center">Wind: {data.today.hour[22].wind_kph} km/h</p>
            </details>
          </div>
          <div class="mb-[14px]">
            <details>
              <summary class="hover:cursor-pointer">
                <div class="inline-block align-middle text-[1.5rem]">23:00</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[data.today.hour[23].condition.text]}
                </div>
                <div class="inline-block align-middle text-[1.4rem] pl-[5px]">-</div>
                <div class="inline-block align-middle text-[1.2rem] pl-[5.5px]">{Number.isInteger(data.today.hour[23].temp_c) ? data.today.hour[23].temp_c + ".0" : data.today.hour[23].temp_c}°C / {data.today.hour[23].chance_of_rain}%</div>
              </summary>
              <p class="text-center">Temperatuur: {data.today.hour[23].temp_c}°C</p>
              <p class="text-center">Regenkans: {data.today.hour[23].chance_of_rain}%</p>
              <p class="text-center">Wind: {data.today.hour[23].wind_kph} km/h</p>
            </details>
          </div>
          <div class="mb-[14px]">
            <details class="transition-all duration-[0.3s]">
              <summary class="hover:cursor-pointer">
                <div class="inline-block align-middle text-[1.5rem]">24:00</div>
                <div class="inline-block align-middle pl-[2px]">
                  {conditionList[data.today.hour[0].condition.text]}
                </div>
                <div class="inline-block align-middle text-[1.4rem] pl-[5px]">-</div>
                <div class="inline-block align-middle text-[1.2rem] pl-[5.5px]">{Number.isInteger(data.today.hour[0].temp_c) ? data.today.hour[0].temp_c + ".0" : data.today.hour[0].temp_c}°C / {data.today.hour[0].chance_of_rain}%</div>
              </summary>
              <p class="text-center">Temperatuur: {data.today.hour[0].temp_c}°C</p>
              <p class="text-center">Regenkans: {data.today.hour[0].chance_of_rain}%</p>
              <p class="text-center">Wind: {data.today.hour[0].wind_kph} km/h</p>
            </details>
          </div>
          <br></br>
        </div>
    </>
  );
}

export default Hours;