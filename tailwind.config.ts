import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: "class",
    extend: {
      gridTemplateColumns: {
        "custom-default": "1fr 1fr 1fr",
        "custom-lg": "2fr 1fr 1fr",
      },
      colors: {
        darkMode: {
          bgColor: "#121721",
          cardBgColor: "#19202d",
          locationColor: "#5964e0",
          jobColor: "#ffffff",
          jobHoverColor: "#6e8098",
          additionalInfoColor: "#6e8098",
          paragraphColor: "#9daec2",
          titleColor: "#FFF",
          mainBtnBgColor: "#5964e0",
          mainBtnTextColor: "#fff",
          mainBtnHoverBgColor: "#939bf4",
          secondaryBtnBgColor: "rgba(48, 54, 66, 0.8)",
          secondaryBtnHoverBgColor: "rgba(25, 32, 45, 0.4)",
          searchInputTxtColor: "rgb(25, 32, 45)",
          searchInputBgColor: "rgba(25, 32, 45, 1)",
          inputBorderColor: "rgba(110,128,152,.2)",
        },
        lightMode: {
          bgColor: "#f4f6f8",
          cardBgColor: "#fff",
          locationColor: "#5964e0",
          jobColor: "#19202d",
          jobHoverColor: "#6e8098",
          additionalInfoColor: "#6e8098",
          paragraphColor: "#6e8098",
          titleColor: "#000",
          mainBtnBgColor: "#5964e0",
          mainBtnTextColor: "#fff",
          mainBtnHoverBgColor: "#939bf4",
          secondaryBtnBgColor: "#eeeffc",
          secondaryBtnHoverBgColor: "rgba(89, 100, 224,0.35)",
          searchInputTxtColor: "rgb(25, 32, 45)",
          inputBorderColor: "rgba(110,128,152,.2)",
        },
      },
      container: {
        center: true,
        padding: "10px",
        screens: {
          sm: "480px",
          md: "768px",
          lg: "920px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
