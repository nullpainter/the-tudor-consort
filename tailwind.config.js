module.exports = {
    content: [
        "./content/**/*.{html,md}",
        "./layouts/**/*.html",
        "./public/**/*.html"
    ],
    theme: {
        extend: {
            colors: {
                "secondary": "#6b615d",
            },
            fontFamily: {
                sans: ['"Poppins"', 'sans-serif']
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui'),
    ],
    daisyui: {
        logs: false,
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["black"],
                    secondary: "#6b615d",
                },
            },
        ],
    },
}