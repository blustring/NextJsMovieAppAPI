import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors:{
          primary: "#C1A1DE",
          secondary: "#7D3C98",
          textColor: "#B3B6B7 "

        }
      ,
    },
  },
  plugins: [],
}
export default config
