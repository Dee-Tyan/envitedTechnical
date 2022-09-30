/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
     fontFamily: {
       helvetica: ["Helvetica", "sans-serif"]
     },
     colors: {
       bgcolor: "#F6F2FF",
       darkPurple: "#8456EC",
       lightPurple: "#E87BF8",
       darkblue:"#240D57",
       footer: "#F9F9F9",
       grey: "#e4e8e1",
       color: "#86a6b8",
       txt: "#4F4F4F",
       
     }

    },
  },
  plugins: [],
}
