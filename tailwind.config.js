/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "Red": "hsl(0, 66%, 54%)",
        'custom-blue': '#1A183E'
    }
  },
},
  plugins: [],
}

