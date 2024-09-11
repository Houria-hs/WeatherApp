import Search from './components/search';
import Temperature from './components/Temp';
import Descriptions from './components/description';
import GetWeatherData from './ApiServices';
import { useEffect, useState } from 'react';
import './App.css';


function App() {
  
  const [weather, setWeather] = useState(null);

  
  const handleSearchChange = (searchData) => {
    GetWeatherData(searchData).then(data => setWeather(data));
  };

  useEffect(() => {
    const FetchWeatherData = async () => {
      const Data = await GetWeatherData();
      setWeather(Data);
    };
    FetchWeatherData();
  }, []);

  return (
        <div className='Container-fluid' style={{backgroundImage : "blue", backgroundRepeat:"no-repeat", backgroundSize :"cover"}}>
            <Search onSearchChange={handleSearchChange} />
            <Temperature data={weather} />
            <Descriptions data={weather} />
        </div>
    );
} 
export default App;

