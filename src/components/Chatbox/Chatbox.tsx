// src/components/Chatbox/Chatbox.tsx
import { Button, Input, ScrollView, Text, View } from "@tarojs/components";
import { useState } from "react";
import "./Chatbox.scss";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
}

const Chatbox = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;
    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
    };
    setMessages([...messages, newMessage]);
    setInputText("");
    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now().toString(),
        text: `You said: ${newMessage.text}`,
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  return (
    <View className="chatbox">
      <ScrollView scrollY className="chatbox-messages">
        {messages.map((msg) => (
          <View key={msg.id} className={`message ${msg.sender}`}>
            <Text>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View className="chatbox-input-area">
        <Input
          type="text"
          value={inputText}
          placeholder="Type your message..."
          onInput={(e) => setInputText(e.detail.value)}
          onConfirm={handleSendMessage}
          className="chat-input"
        />
        <Button onClick={handleSendMessage} className="send-button">
          Send
        </Button>
      </View>
    </View>
  );
};

export default Chatbox;
