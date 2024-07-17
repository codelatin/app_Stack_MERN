/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // Asegúrate de incluir el archivo HTML de tu aplicación
    './src/**/*.{js,jsx,ts,tsx}', // Incluye todos los archivos de React en la carpeta src
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}
