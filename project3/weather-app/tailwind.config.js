/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montser: ["Montserrat"],
      },
      colors: {
        projectblue: "#020d14",
      },
      backgroundImage: {
        geolocation: "url('ui/atoms/img/geo.png')",
        world: "url('ui/atoms/img/world.png')",
        settings: "url('ui/atoms/img/settings.svg')",
        delete: "url('ui/atoms/img/delete.png')",
        save: "url('ui/atoms/img/save.png')",
        bggradient: "linear-gradient(0deg, #062c45 0%, #020d14 100%)",
      },
      dropShadow: {
        tempShadow: "10px 10px 5px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
