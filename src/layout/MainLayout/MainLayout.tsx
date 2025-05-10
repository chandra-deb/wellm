// src/layout/MainLayout/MainLayout.tsx
import { View } from "@tarojs/components";
import { useState } from "react";
import Chatbox from "../../components/Chatbox/Chatbox";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import "./MainLayout.scss";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <View className="main-layout">
      {/* Sidebar container will hold the sidebar. It's fixed and below the pusher. */}
      <View className="sidebar-container">
        <Sidebar isOpen={isSidebarOpen} />{" "}
        {/* Pass isOpen if Sidebar needs it for internal state/styles */}
      </View>

      {/* Main content pusher will slide to reveal the sidebar */}
      <View
        className={`main-content-pusher ${
          isSidebarOpen ? "main-content-pusher--sidebar-open" : ""
        }`}
      >
        <Topbar onToggleSidebar={toggleSidebar} />
        <View className="content-wrapper">
          {" "}
          {/* This is where your chatbox or other page content goes */}
          <Chatbox />
        </View>
      </View>

      {/* Overlay to click and close sidebar on mobile, if desired */}
      {/* {isSidebarOpen && (
        <View className="overlay active" onClick={toggleSidebar} />
      )} */}
    </View>
  );
};

export default MainLayout;
