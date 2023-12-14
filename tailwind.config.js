

/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
 
  theme: {
    extend: {
      fontFamily: {
        poppin:["Poppins", "sans-serif"]
      },
      backgroundColor:{
        'primary':'#202122'
      },
      fontSize:{
          '14':'14px',
          '16':'16px',
          '18':'18px',
          '20':'20px',
          '28':'28px',
          '35':'35px',
      },
      colors:{
        'primary':'#dfdfdf'
      }
    },

    screens: {
      'sm': "640px",
      'md': "848px",
      'lg': "1024px",
      'xl': "1280px",
    },
    
  },
  plugins: [require("daisyui")],
  daisyui:{
    themes: [],
    base:false,
  }
 
};