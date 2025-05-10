export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/chatSession/chatSession", // Added the new chat session page
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
