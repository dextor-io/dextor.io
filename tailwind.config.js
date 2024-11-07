/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                green: {
                    100: '#C8E6C9',
                    200: '#A5D6A7',
                    300: '#81C784',
                    400: '#66BB6A',
                    500: '#4CAF50',
                    600: '#43A047',
                    700: '#388E3C',
                    800: '#2C6F2D',
                    900: '#1B5E20',
                },
                primary: {
                    100: '#E1F5FE',
                    200: '#B3E5FC',
                    300: '#81D4FA',
                    400: '#4FC3F7',
                    500: '#29B6F6',
                    600: '#039BE5',
                    700: '#0288D1',
                    800: '#0277BD',
                    900: '#01579B',
                },
            },
        },
    },
    plugins: [],
}

