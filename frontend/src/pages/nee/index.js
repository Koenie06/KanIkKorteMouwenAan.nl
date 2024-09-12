import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import Hours from '../hours';
import Days from '../days';
import './index.css';

function Nee({ data }) {
  const [days, setDays] = React.useState(true);
  const [hours, setHours] = React.useState(null);

  return (
    <>
      <Menu>
        <div>
          <div class="text-center mb-[15px] after:content-[''] after:absolute after:w-full after:h-[0.175rem] after:bg-[#bdc3c7] after:left-0 after:bottom-0">
            <button onClick={() => { setDays(true); setHours(false)}} className={`text-[25px] font-sofiaPro w-[75px] bg-[#373a47] text-[#bdc3c7] relative right-[30px] p-[1rem,0] after:content-[''] after:absolute after:w-full after:h-[0.175rem] after:bg-[#bdc3c7] after:left-0 after:bottom-0 ${days === true ? "after:scale-[1.1]" : "after:scale-[0.0]"} after:transition-transform duration-[0.3s] hover:after:scale-[1.1]`}>Dagen</button>
            <button onClick={() => { setDays(false); setHours(true)}} className={`text-[25px] font-sofiaPro w-[55px] bg-[#373a47] text-[#bdc3c7] relative left-[15px] p-[1rem,0] after:content-[''] after:absolute after:w-full after:h-[0.175rem] after:bg-[#bdc3c7] after:left-0 after:bottom-0 ${hours === true ? "after:scale-[1.1]" : "after:scale-[0.0]"} after:transition-transform duration-[0.3s] hover:after:scale-[1.1]`}>Uren</button>
          </div>
          <hr class="opacity-50"></hr>
          {days === true ? <Days data={data} /> : <Hours data={data} />}
        </div>
      </Menu>
      <div class="overflow-x-hidden overflow-y-hidden min-h-screen h-full w-full bg-gradient-to-t from-[#004e71] to-[#6b93a8]">
        <div class="main">
          <h1 class=" text-[#004E71] flex text-center text-4xl items-center flex-col p-[80px] font-sofiaPro">Kan ik korte mouwen aan?</h1>
          <h3 class="text-[#004E71] items-center text-center relative bottom-[55px] font-sofiaPro">
            Datum {new Date().toLocaleDateString().replaceAll('/', '-')}
          </h3>
          <h3 class="text-[#004E71] items-center text-center relative bottom-[46px] left-[100px] font-sofiaPro">
            Regenkans {data.today.day.daily_chance_of_rain}%
          </h3>
          <h3 class="text-[#004E71] items-center text-center relative bottom-[70px] right-[100px] font-sofiaPro">
            Temperatuur {data.today.day.mintemp_c}° / {data.today.day.maxtemp_c}°
          </h3>
        </div>
      </div>
    </>
  );
}

export default Nee;