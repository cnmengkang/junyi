/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "rgba(217, 227, 241, 1)",
        footer: "rgba(59, 59, 59, 1)",
        downCard: "#e7eefe",
        indexCard: "rgba(225, 187, 130, 1)",
        // 首页定制配置
        bgColor: "rgba(177, 180, 195, 1)", //背景色
        fontColor: "#FD9102", //字体颜色
        planInput: "#19296C", //输入框颜色
        scenarios: "rgba(129, 211, 248, 1)",
        Scheme: "rgba(211, 210, 210, 1)",
        // 首页定制配置
        // download
        cardHover: "rgba(229, 234, 255, 1)",
        fontColor: "rgba(42, 121, 245, 1)",
        "regal-fill": "#6D6D6D",
        // download
      },
    },
  },
  plugins: [],
};
