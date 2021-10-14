import {useMemo} from "react";
import sunny from "../IMG/sunny.png";
import partly_cliudy from "../IMG/partly_cloudy.png";
import cloudy from "../IMG/cloudy.png";


const WeatherCard = ({ clouds, temperature, error}) => {

  const icon = useMemo(() => {
    if (clouds < 33) {
      return sunny;
    }
    if (clouds >= 33 && clouds <= 66) {
      return partly_cliudy;
    }
    return cloudy
  }, [clouds])


  if (error) {
    return null;
  }

  return (
      <div className="forecast">
        <p>{temperature}° C</p>
        <img src={icon} alt="icon" />
      </div>
  )
}

export default WeatherCard;
