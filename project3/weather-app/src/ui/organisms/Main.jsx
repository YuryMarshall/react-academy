import React from "react";
import { useState, useEffect } from "react";

import GeoByIp from "../molecules/GeoByIpTable.jsx";
import SearchForm from "../atoms/SearchForm.jsx";
import ByCityName from "../molecules/CityByNameTable.jsx";

import styles from "./styles/main.module.css";

function Main() {
  const startCities = localStorage.getItem("savedCities");
  const defineCities = () => {
    if (startCities) {
      return startCities.split(",");
    } else {
      return [];
    }
  };
  const [cityData, changeCity] = useState(null);
  const [userCity, changeUserCity] = useState("");
  const [savedCities, addCity] = useState(defineCities());
  const [status, setStatus] = useState(false);

  const onChangerCity = (event) => {
    changeUserCity(event.target.value);
  };
  const handleSumbmitClick = (event) => {
    event.preventDefault();
    apiLink();
    apiRequest();
    setStatus(false);
  };

  const apiLink = () => {
    let adress =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      userCity +
      "&appid=0a559540ef937280cdde51f15160a2fb";

    return adress;
  };

  const apiRequest = () => {
    fetch(apiLink())
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        if (data.cod === "404" || data.cod === "400") {
          console.log(data.message);

          changeCity(null);
        } else {
          changeCity(data);
        }
      });
  };

  const saveCity = () => {
    setStatus(true);
    if (!savedCities.includes(cityData.name))
      addCity([...savedCities, cityData.name]);
  };
  const SaveAlert = () => {
    if (status) {
      return <p className="text-xs lg:text-sm">Saved</p>;
    }
  };

  useEffect(() => {
    localStorage.setItem("savedCities", savedCities);
  }, [savedCities]);

  return (
    <div className={styles.main}>
      <div className={styles.weather__container}>
        <div className={styles.your__location__container}>
          <h1 className="text-white mb-4 relative  before:content-[''] before:bg-geolocation before:bg-no-repeat before:bg-contain before:block before:w-5 before:h-5 before:absolute before:left-[-24px] before:top-0.5 sm:text-xl sm:before:w-5 sm:before:h-5 sm:before:left-[-26px] sm:before:top-[5px] lg:text-3xl lg:before:w-7 lg:before:h-7 lg:before:left-[-30px] lg:mb-20">
            Your location:
          </h1>
          <GeoByIp />
        </div>
        <div className={styles.custom__location__container}>
          <h1 className="text-white mb-5 relative  before:content-[''] before:bg-world before:bg-no-repeat before:bg-contain before:block before:w-4 before:h-4 before:absolute before:left-[-24px] before:top-1 sm:text-xl sm:before:w-5 sm:before:h-5 sm:before:left-[-26px] sm:before:top-[5px] lg:text-3xl lg:before:w-7 lg:before:h-7 lg:before:left-[-35px] lg:mb-20 ">
            Custom location:
          </h1>
          <ByCityName
            cityData={cityData}
            saveCity={saveCity}
            save={SaveAlert}
          />

          <SearchForm
            handler={handleSumbmitClick}
            changerCity={onChangerCity}
            data={userCity}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
