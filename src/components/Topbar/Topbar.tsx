import { Button, Text, View } from "@tarojs/components";
import "./Topbar.scss";

interface TopbarProps {
  onToggleSidebar: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onToggleSidebar }) => {
  return (
    <View className="topbar">
      <Button onClick={onToggleSidebar} className="topbar-toggle-button">
        ☰
      </Button>
      <View className="topbar-title">
        <Text>My App</Text>
      </View>
      {/* Other topbar items can be added here */}
    </View>
  );
};

export default Topbar;
