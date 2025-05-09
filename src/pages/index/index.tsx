import { Button } from "@taroify/core";
import { Text, View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View>
      <Text>Hello World </Text>
      <Text>Taro + React + WebPack + Taroify</Text>
      <View className="index">
        <Button variant="outlined" color="primary">
          主要按钮
        </Button>
        <Button variant="outlined" color="info">
          信息按钮
        </Button>
        <Button variant="outlined" color="success">
          成功按钮
        </Button>
        <Button variant="outlined" color="warning">
          警告按钮
        </Button>
        <Button variant="outlined" color="danger">
          危险按钮
        </Button>
        <Button variant="outlined" color="info">
          默认按钮
        </Button>
      </View>
    </View>
  );
}
