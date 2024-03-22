/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Space Grotesk', 'Sans-serif'],
        },
        colors: {
            transparent: 'transparent',
            white: '#FFFFFF',
            grey: {
                500: '#DEDDDF',
            },
            purple: {
                500: '#8e8593',
                900: '#21092F',
            },
        },
        extend: {},
    },
    plugins: [],
}
