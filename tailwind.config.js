module.exports = {
    content: [
        "./content/**/*.{html,md}",
        "./layouts/**/*.html",
        "./public/**/*.html"
    ],
    theme: {
        extend: {
            colors: {
                "secondary": "#d74564",
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui'),
    ],
    daisyui: {
        logs: false,
        themes: ["black"]
    },
}