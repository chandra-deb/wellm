// src/components/Sidebar/Sidebar.tsx
import Button from "@taroify/core/button/button";
import { Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./Sidebar.scss";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const handleNewChatTemplate = (templateName: string) => {
    Taro.redirectTo({
      url: `/pages/chatSession/chatSession?template=${templateName}`,
    });
  };

  const handleOpenExistingChat = (sessionId: string) => {
    Taro.navigateTo({
      url: `/pages/chatSession/chatSession?sessionId=${sessionId}`,
    });
  };
  return (
    <View className={`sidebar ${isOpen ? "open" : ""}`}>
      <View className="sidebar-header">
        <Text className="sidebar-title">Gemini</Text>
      </View>
      <View className="sidebar-content">
        <View className="menu-item">
          <Text>Chat History 1</Text>
        </View>
        <View className="menu-item">
          <Text>Chat History 2</Text>
        </View>
        <View className="menu-item new-chat-button">
          <Button onClick={() => handleNewChatTemplate("default")}>
            + New Chat
          </Button>
        </View>
      </View>
      <View className="sidebar-footer">
        <Text>Settings</Text>
      </View>
    </View>
  );
};

export default Sidebar;
