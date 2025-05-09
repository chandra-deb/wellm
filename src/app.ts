import { useLaunch } from "@tarojs/taro";
import { PropsWithChildren } from "react";
// app.ts
import "@taroify/core/index.scss";
import "@taroify/icons/index.scss";
import "./app.scss";

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log("App launched.");
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
