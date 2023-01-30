import React from "react";

import Input from "../atoms/SettingInput.jsx";

import styles from "./styles/settings.module.css";

function Settings(props) {
  return (
    <div className={styles.settings__container}>
      <h1 className="relative text-base mr-auto ml-auto mb-10 text-white font-normal before:content-[''] before:bg-settings before:bg-no-repeat before:bg-contain before:block before:w-4 before:h-4 before:absolute before:left-[-24px] before:top-1 sm:text-xl sm:before:w-5 sm:before:h-5 sm:before:left-[-26px] sm:before:top-[5px] lg:text-3xl lg:before:w-8 lg:before:h-8 lg:before:left-[-38px] lg:before:top-[5px]">
        Weather settings:
      </h1>
      <section className={styles.input__container}>
        <Input
          id={"Humidity"}
          status={props.humidityStatus}
          change={props.change}
          tag={"Humidity"}
        />
        <Input
          id={"Sunset"}
          status={props.sunsetStatus}
          change={props.change}
          tag={"Sunset time"}
        />
        <Input
          id={"Sunrise"}
          status={props.sunriseStatus}
          change={props.change}
          tag={"Sunrise time"}
        />
        <Input
          id={"Feels"}
          status={props.feelsStatus}
          change={props.change}
          tag={"Feels temperature"}
        />
      </section>
    </div>
  );
}

export default Settings;
