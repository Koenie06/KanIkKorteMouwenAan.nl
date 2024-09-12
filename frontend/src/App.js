import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ja from './pages/ja/index.js';
import Nee from './pages/nee/index.js';
import Loading from './pages/loading/index.js'
import './App.css';

function App() {

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch('api/getWeather')
      .then((res) => res.json())
      .then((d) => setWeather(d));
  }, []);

  return weather !== null ? (
    <>
    <Router>
      <Routes>
        <Route path='/' element={weather.today.day.maxtemp_c >= 19 && weather.today.day.avgtemp_c >= 15 ? <Ja data={weather} /> : <Nee data={weather} />} />
      </Routes>
    </Router>
    </>
  ) : (
    <Loading />
  )
}

export default App;
