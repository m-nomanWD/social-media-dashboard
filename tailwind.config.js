/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // screens: {
      //   sm: '576px',
      //   // => @media (min-width: 576px) { ... }

      //   md: '960px',
      //   // => @media (min-width: 960px) { ... }

      //   lg: '1440px',
      //   // => @media (min-width: 1440px) { ... }
      // },
      colors: {
        general_lime_green: 'hsl(163, 72%, 41%)',
        general_bright_red: 'hsl(356, 69%, 56%)',
        social_facebook: 'hsl(208, 92%, 53%)',
        social_twitter: 'hsl(203, 89%, 53%)',
        social_youtube: 'hsl(348, 97%, 39%)',
        dark_theme_toggle: 'hsl(210, 78%, 56%)',
        light_theme_toggle: 'hsl(230, 22%, 74%)',
        neutral_dark_very_dark_blue_bg: 'hsl(230, 17%, 14%)',
        neutral_dark_very_dark_blue_top_bg_pattern: 'hsl(232, 19%, 15%)',
        neutral_dark_desaturated_blue_card_bg: 'hsl(228, 28%, 20%)',
        neutral_dark_desaturated_blue_text: 'hsl(228, 34%, 66%)',
        neutral_dark_white_text: 'hsl(0, 0%, 100%)',
        neutral_light_white_bg: 'hsl(0, 0%, 100%)',
        neutral_light_very_pale_blue_top_bg_pattern: 'hsl(225, 100%, 98%)',
        neutral_light_light_grayish_blue_card_bg: 'hsl(227, 47%, 96%)',
        neutral_light_dark_grayish_blue_text: 'hsl(228, 12%, 44%)',
        neutral_light_very_dark_blue_text: 'hsl(230, 17%, 14%)',
        social_instagram:
          'linear-gradient(hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
      },
      fontFamily: {
        font_inner: ['Inter', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        social_instagram:
          'linear-gradient(hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
        dark_theme_toggle:
          'linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
      }),
      borderColor: (theme) => ({
        // Use Instagram gradient as borderColor
        instagram: theme('colors.social_instagram'),
      }),
    },
  },
  plugins: [],
}
