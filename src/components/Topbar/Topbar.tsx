import { Button, Text, View } from "@tarojs/components";
import "./Topbar.scss";

interface TopbarProps {
  onToggleSidebar: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onToggleSidebar }) => {
  return (
    <View className="topbar">
      <View>
        <Button onClick={onToggleSidebar} className="topbar-toggle-button">
          ☰
        </Button>
      </View>
      <View>
        <Text>LLM</Text>
      </View>
      <View className="topbar-title">
        <Text>Temp</Text>
      </View>
      {/* Other topbar items can be added here */}
    </View>
  );
};

export default Topbar;
