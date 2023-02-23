import React,{useState} from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=23898db283d582d473c9064efbf45cca`

  const searchLocation = (event) => {
    if(event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }

  }

  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress = {searchLocation}
        placeholder = 'Enter Location'
        type="text" />
      </div>
      <div className='container'>
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}</h1> : null}
          </div>
        </div>
        <div className='bottom'>

          <div className='humidity'>
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
          {data.wind ? <p className="bold">{data.wind.speed} MPH</p> : null}
            <p>Wind speed</p>
          </div>
        </div>
      </div>   
    </div>
  );
}

export default App;
