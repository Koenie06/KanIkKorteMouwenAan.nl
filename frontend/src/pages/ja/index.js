import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import Hours from '../hours';
import Days from '../days';
import './index.css';

function Ja({ data }) {

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
      <div class="overflow-x-hidden overflow-y-hidden min-h-screen h-full w-full bg-gradient-to-t from-yellow-300 to-orange-500">
        <div class="main">
          <h1 class=" text-[#f7ce67] flex text-center text-[5vw] items-center flex-col p-[80px] font-sofiaPro">Kan ik korte mouwen aan?</h1>
          <h3 class="text-[#f7ce67] items-center text-center text-[2.5vw] relative p-[10px] font-sofiaPro">
            Datum : {new Date().toLocaleDateString().replaceAll('/', '-')}
          </h3>
          <h3 class="text-[#f7ce67] items-center text-center text-[2.5vw] relative p-[10px] font-sofiaPro">
            Regenkans : {data.today.day.daily_chance_of_rain}%
          </h3>
          <h3 class="text-[#f7ce67] items-center text-center text-[2.5vw] relative p-[10px] font-sofiaPro">
            Temperatuur : {data.today.day.mintemp_c}° - {data.today.day.maxtemp_c}°
          </h3>
          {/* <img class="h-[510px] mx-auto bottom-[65px] relative" src={process.env.PUBLIC_URL+'images/yes-man.png'} /> */}
        </div>
        <div class="left-0 bottom-0 fixed w-[100%] text-center font-sofiaPro">
          <h3>Ps. alle data komt uit Utrecht</h3>
        </div>
      </div>
    </>
  );
}

export default Ja;