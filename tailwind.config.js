/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'ubuntu-purple': '#300A24',
                'ubuntu-orange': '#E95420',
                'term-black': '#121212',
                'accent': '#7209B7',
                'accent-light': '#9D4EDD',
                'term-green': '#4EFA8B',
                'term-text': '#F0F0F0',
                'dark-gunmetal': '#1A1A1D',
                'error-red': '#F44336',
            },
            fontFamily: {
                'mono': ['Ubuntu Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
                'sans': ['Ubuntu', 'system-ui', 'sans-serif'],
            },
            animation: {
                'blink': 'blink 1s step-end infinite',
                'typing': 'typing 3.5s steps(40, end)',
            },
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
                typing: {
                    from: { width: '0' },
                    to: { width: '100%' },
                },
            },
            gridTemplateColumns: {
                'projects': 'repeat(auto-fill, minmax(300px, 1fr))',
            },
        },
    },
    plugins: [],
}