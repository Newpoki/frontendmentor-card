/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Space Grotesk', 'Sans-serif'],
        },
        screens: {
            lg: '1440px',
        },
        colors: {
            transparent: 'transparent',
            white: '#FFFFFF',
            grey: {
                500: '#DEDDDF',
                700: '#8F8694',
            },
            purple: {
                500: '#8e8593',
                900: '#21092F',
            },
            red: {
                500: '#FF5050',
            },
        },
        extend: {},
    },
    plugins: [],
}
