/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      bebas: ["Bebas Neue"],
    },
    boxShadow: {
      "custom-shadow": "0px 0px 20px black",
    },
    extend: {
      backgroundImage: {
        "pochita-bg": "url('/src/ui/atoms/card/backgrounds/background.jpg')",
        "card-main": "url('/src/ui/atoms/card/backgrounds/main.jpg')",
        "makima-card": "url('/src/ui/atoms/card/backgrounds/1.jpg')",
        "reze-card": "url('/src/ui/atoms/card/backgrounds/2.jpg')",
        "power-card": "url('/src/ui/atoms/card/backgrounds/3.jpg')",
        "denji-card": "url('/src/ui/atoms/card/backgrounds/4.jpg')",
        "pochita-card": "url('/src/ui/atoms/card/backgrounds/5.jpg')",
        "himeno-card": "url('/src/ui/atoms/card/backgrounds/6.jpg')",
        "aki-card": "url('/src/ui/atoms/card/backgrounds/7.jpg')",
        "kobeni-card": "url('/src/ui/atoms/card/backgrounds/8.png')",
      },
    },
  },
  plugins: [],
};
