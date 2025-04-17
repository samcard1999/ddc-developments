/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark_blue: '#070f1d',
        blue: '#162d57',
        dark_grey: '#5e6673',
        grey: '#bac0c6',
        white_gray: '#dcdfe2'
      },
      fontFamily: {
        sans: ["Noirden", "sans-serif"], // Usa Noirden como fuente principal
      },
      fontWeight: {
        light: 300,    // Mapa 'font-light' a Noirden Light (300)
        normal: 400,   // Mapa 'font-normal' a Noirden Regular (400)
        bold: 700,     // Mapa 'font-bold' a Noirden Bold (700)
      },
    },
  },
  plugins: [],
}

