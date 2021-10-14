import { useState } from 'react'
import './Weather.css'
import debounce from "./utils/debounce";
import client from "./utils/client";
import WeatherCard from "./cmponents/WeatherCard";

export default function Weather() {

  const [state, setState] = useState({
    city: '',
    temperature:null,
    clouds: null,
    error: false,
    isLoaded:false
  });


  const getWeather = debounce((event) => {

    const params  = { q: event.target.value };
    client.get(`/data/2.5/weather`, { params })
      .then((result) => {
        console.log(result);
        setState({
          temperature: Math.round(result.data.main.temp) ,
          clouds: result.data.clouds.all,
          isLoaded:true,
          city: event.target.value,
          error: false
        })
      })
      .catch((err) => {
        console.log(err);
        setState({
          isLoaded:true,
          city: event.target.value,
          error: true
        })
      })
  }, 500)




    return (
      <div>
        <input className="input" onChange={getWeather} />
        {
          state.isLoaded === false || state.city.length === 0
            ? (<p>Please enter city name</p>)
              :
              (
                  <>
                    { state.error && <p>Please enter city name corectly!</p> }
                    <WeatherCard
                        clouds={state.clouds}
                        temperature={state.temperature}
                        error={state.error}
                    />
                  </>
              )
        }
      </div>
  )
}
