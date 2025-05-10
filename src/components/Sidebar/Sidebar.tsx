// src/components/Sidebar/Sidebar.tsx
import { Text, View } from "@tarojs/components";
import "./Sidebar.scss";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
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
          <Text>+ New Chat</Text>
        </View>
      </View>
      <View className="sidebar-footer">
        <Text>Settings</Text>
      </View>
    </View>
  );
};

export default Sidebar;
